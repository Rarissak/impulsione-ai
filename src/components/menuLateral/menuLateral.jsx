import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Login, { ToggleModal } from '../../pages/UsuarioComum/login/login';
import IconFechar from '../../assets/iconLoginModalClose.svg';
import LogoResponsivo from '../../assets/logoResponsivo.svg';
import IconHome from '../../assets/iconHome.svg';
import IconSobre from '../../assets/iconSobre.svg';
import IconMenu from '../../assets/iconMenu.svg';
import '../menuLateral/menuLateral.css';
import SearchIconSvg from '../../assets/searchIcon.svg';
import Seta from '../../assets/setaBaixo.svg';
import IconParceiro from '../../assets/IconParceiroBranco.svg';
import IconPerfil from '../../assets/iconPerfilBranco.svg';
import axios  from 'axios';
import useAxios, { useAxiosWithDependecies } from '../../hook/useAxios';

import axiosInstance from '../../helper/axiosInstance';

import LinkResponsivo from '../linksReponsivo/linkResponsivo';

function MenuLateral(LoginPerfil, linkPerfil){

    const [expandir, setExpandir] = useState(false);
    const token = localStorage.getItem('token')
    const id = localStorage.getItem('id')
    const uri = localStorage.getItem('uri')
    const [itemPesquisa, setItemPesquisa] = useState("")
    const [tipoUsuario, setTipoUsuario] = useState('');
    const [rota, setRota] = useState('');


    const toggleExpanded = () => {
        setExpandir(!expandir);
    };

    const [menuAberto, setMenuAberto] = useState(false);

    const toggleMenu = () => {
        setMenuAberto(true);
    };
    const fecharModal = () => {
        setMenuAberto(false);
    };

    const handleComponentLogin = () => {
        ToggleModal();
    };

    const [nichos, nichosloading, nichoError] = useAxios({
        axiosInstance: axiosInstance,
        method: 'GET',
        url: 'nichos'
    })

    //CÓDIGO DA INTEGRAÇÃO IGUAL AO HEADER
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

        // function perfil(){
        //     window.location.href = "/perfilParceiro"
        // }

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


    //-------------------------------------

    return(
        <nav class="navResponsivo" id='espacar'>
            
            <ul className={`menuLateral ${menuAberto ? 'aberto' : ''}`}>
                <ul>
                    <li id='botaoSair'>
                        <button onClick={fecharModal}>
                            <img src={IconFechar} alt='botão para fechar menu'/>
                        </button>
                    </li>
                    <li>
                        <Link className='itemLista'
                        to='/'>
                            <img className='iconResponsivo' src={IconHome} alt='Icone home'/>
                            <a id='linkMenu' className='title'>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link className='itemLista'
                        to='/sobre'>
                            <img className='iconResponsivo' src={IconSobre} alt='Icone sobre'/>
                            <a id='linkMenu' className='title'>Sobre</a>
                        </Link>
                    </li>
                    <li>
                        <Link className='itemLista'
                        to='/areaParceiro'>
                            <img className='iconResponsivo' src ={IconParceiro} alt='Icon parceiro'/>
                            <a id='linkMenu' className='title'>Área Parceiros</a>
                        </Link>
                    </li>
                    <li>
                    {!isLogado && (
                        <button
                            id='headerLogin'
                            className='centralizeItems headerScreenButtons'
                            onClick={handleComponentLogin}>
                            <img className='iconResponsivo' src={IconPerfil} alt='icon perfil'/>
                            <a id='linkMenu' className='title'>Login</a>
                        </button>)}
                    {!isLogado && <Login />}

                    {isLogado && (
                        <button 
                            id='headerLogin'
                            className='botaoLogin'
                            onClick={toggleExpanded}
                        >
                            <div className='itemLista'>
                                <img className='iconResponsivo' src={IconPerfil} alt='icon perfil'/>
                                {/* <a id='linkMenu' className='title'>Login</a> */}
                                <span id='linkMenu'>{"Olá, " + usuarioLogado.nomeExibicao}</span> 
                            </div>
                            <img id='setaVerMais' src={Seta} alt='seta para ver mais'/> 
                        </button>)}
                        
                        {expandir && (
                            <div id='loginExpandido'>
                                {/* <button className='title' onClick={handleComponentLogin}>Perfil</button> */}
                                {/* A FUNÇÃO ONCLICK NÃO ESTÁ PEGANDO */}
                                {/* <Link 
                                    className='title' 
                                    onClick={handleComponentLogin}
                                >Perfil</Link>
                                {<Login />} */}
                                <Link 
                                    className='title' 
                                    onClick={handlePerfilClick}
                                    to={rota}
                                >Perfil</Link>
                                <Link 
                                    className='title'
                                    onClick={logout}
                                >Sair</Link>
                            </div>

                        )}
                        
                    </li>
                </ul>

                <div id='barraLinksResponsivo'>
                    {nichos.map((nicho, index) => (
                        <LinkResponsivo
                            key={nicho.id} // Usando o índice como chave, mas tenha cuidado com isso se os dados forem dinâmicos e mutáveis
                            name={nicho?.nicho.toUpperCase()}
                            link={`/pesquisa/nicho/${nicho.nicho}`}
                        />
                    ))}
                </div>
            </ul>


            <div id='barraResponsivo'>
                <button id='abrirMenu'>
                    <img  onClick={toggleMenu} src={IconMenu} alt='icon para abrir o menu responsivo'/>
                </button>

                <section>
                    <Link
                    to='/'>
                        <img id='logoResponsivo' src={LogoResponsivo}/>
                    </Link>

                    <div className='searchResponsivo' id="headerSearch">
                        {/* // className='centralizeItems' id="headerSearch" */}
                        <input id='pesquisa'
                        type="text"
                        placeholder='Inicie aqui sua busca'
                        />            
                        <img id='lupa' src={SearchIconSvg} alt="Icone de Lupa, com o sentido de buscar informações" />
                    </div>
                </section>
                

            </div>
        </nav>

    )
}

export default MenuLateral