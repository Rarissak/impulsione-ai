import React, { useState, useEffect } from 'react';
import './header.css';
import '../../index.css';
import HandshakeIconSvg from '../../assets/handshakeIcon.svg';
import SearchIconSvg from '../../assets/searchIcon.svg';
import UserIconSvg from '../../assets/userIcon.svg';
import LogoDescritivaIcon from '../../assets/logoDescritivaIcon.svg';
import { Link, useNavigate } from 'react-router-dom';
import Login, { ToggleModal } from '../../pages/UsuarioComum/login/login';
import useAxios, { useAxiosWithDependecies } from '../../hook/useAxios';
import axiosInstance from '../../helper/axiosInstance.js';

function Header() {
    const token = localStorage.getItem('token')
    const id = localStorage.getItem('id')
    const uri = localStorage.getItem('uri')
    const [itemPesquisa, setItemPesquisa] = useState("")
    const [tipoUsuario, setTipoUsuario] = useState('');
    const [rota, setRota] = useState('');

    const handleInputChange = (event) => {
        setItemPesquisa(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            window.location.href = `/pesquisa/${itemPesquisa}`
        }
    };

    const [isLogado, setLogado] = useState(false)

    useEffect(() => {
        if (token != null) {
            setLogado(true);
        }
    }, [token]);


    const [usuarioLogado, loading, error] = useAxiosWithDependecies({
        axiosInstance: axiosInstance,
        method: 'GET',
        url: uri + '/' + id
    }, [isLogado])

    useEffect(() => {
        const fetchUserType = async () => {
            try {
                const adminResponse = await axiosInstance.get(`/admin/${id}`);
                if (adminResponse.data) {
                    setTipoUsuario('admin');
                    return;
                }
            } catch (error) {
                console.log('Usuário não é admin', error);
            }

            try {
                const empreendedorResponse = await axiosInstance.get(`/empreendedores/${id}`);
                if (empreendedorResponse.data) {
                    setTipoUsuario('empreendedor');
                    return;
                }
            } catch (error) {
                console.log('Usuário não é empreendedor', error);
            }

            try {
                const usuarioResponse = await axiosInstance.get(`/usuarios/${id}`);
                if (usuarioResponse.data) {
                    setTipoUsuario('usuario');
                }
            } catch (error) {
                console.log('Erro ao obter tipo de usuário', error);
            }
        };
        if (isLogado) {
            fetchUserType();
        }
    }, [isLogado, id]);


    function logout() {
        localStorage.clear();
        window.location.href = "/";
    }

    function perfil(){
        window.location.href = "/perfilParceiro"
    }

    const handlePerfilClick = () => {
        let rota = '/';
        switch (tipoUsuario) {
            case 'admin':
                setRota('/adminSolicitacoes');
                break;
            case 'empreendedor':
                setRota('/perfilParceiro');
                break;
            case 'usuario':
                setRota('/perfilUsuario');
                break;
            default:
                setRota('/');
        }
        navigate(rota);
    };

    const handleComponentLogin = () => {
        ToggleModal();
    };

    const [expandir, setExpandir] = useState(false);

    const toggleExpanded = () => {
        setExpandir(!expandir);
    };

    return (
        <>
        <header id="headerUpperEHr"> 

            <div id='headerUpper'>

                <div id="headerSiteName">
                    <Link
                        to='/'>
                        <img id='logoHeaderSiteName' src={LogoDescritivaIcon} alt="Logo do Impulsione Ai, onde a letra i é no formato de uma mola" />
                    </Link>
                </div>

                <div id='align'>

                    <Link
                        id='headerHome'
                        className="headerScreenLinks"
                        to='/'
                    >Home</Link>

                    <Link
                        id='headerSobre'
                        className="headerScreenLinks"
                        to='/sobre'
                    >Sobre</Link>

                    <div
                        className='centralizeItems' id="headerSearch">
                        <input
                            type="text"
                            placeholder='Inicie aqui sua busca'
                            onChange={handleInputChange}
                            onKeyDown={handleKeyPress}
                        />

                        <img src={SearchIconSvg} onClick={() => {
                            console.log(itemPesquisa) 
                            if (itemPesquisa === undefined) {
                                window.location.href = `/pesquisa`
                            }
                            window.location.href = `/pesquisa/${itemPesquisa}`
                        }}
                            style={{ cursor: 'pointer' }}
                            alt="Icone de Lupa, com o sentido de buscar informações" />


                    </div>

                    {/* Botão de login */}
                    {!isLogado && (
                        <button
                            id='headerLogin'
                            className='centralizeItems headerScreenButtons'
                            onClick={handleComponentLogin}>
                            <img src={UserIconSvg} alt="Icone, para informar login" className='headerIcon' />
                            <span>Login</span>
                        </button>)}
                    {!isLogado && <Login />}

                    <div id='loginPerfilSair'>
                        {isLogado && (
                            // <button 
                            // id='headerLogin'
                            // className='centralizeItems, headerScreenButtons'
                            // onClick={logout}>
                            //     <img src={UserIconSvg} alt="Icone, para informar login" className='headerIcon'/>
                            //     <span>{"Olá, " + usuarioLogado.nomeExibicao}</span>  
                            // </button>

                            <button 
                                id='headerLogin'
                                className='centralizeItems headerScreenButtons'
                                onClick={toggleExpanded}
                            >
                                <img src={UserIconSvg} alt="Icone, para informar login" className='headerIcon'/>
                                <span>{"Olá, " + usuarioLogado.nomeExibicao}</span>  
                            </button>
                        )}
                        {expandir && (
                            <div id='perfilSairHeader'>
                                <Link 
                                    to={rota}
                                    className='itemPerfilSairHeader'
                                    onClick={handlePerfilClick}
                                >Perfil</Link>
                                <Link 
                                    onClick={logout}
                                    className='itemPerfilSairHeader'
                                    to='/'
                                >Sair
                                </Link>
                            </div>
                        )}
                    </div>

                    <Link
                        id='headerParceiros'
                        className='centralizeItems headerScreenLinks'
                        to='/areaParceiro'>
                        <img src={HandshakeIconSvg} alt="Icon da área de parceria, duas mãos se apertando." className='headerIcon' id="headerIconParceiros" />
                        <span>Área Parceiros</span>
                    </Link>

                </div>

            </div>

            <hr id='headerHR'
                style={{
                    width: '100%', // Largura da linha horizontal
                    height: '5px', // Espessura da linha horizontal
                    backgroundColor: '#7900c3', // Cor de fundo da linha horizontal
                    margin: 0
                }} />
            
        </header>
            
            
        
        </>
    );
}

export default Header;