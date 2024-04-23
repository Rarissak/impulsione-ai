import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Login from '../../pages/UsuarioComum/login/login';
import { ToggleModal } from '../../pages/UsuarioComum/login/login';
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


function MenuLateral(LoginPerfil, linkPerfil){

    const [expandir, setExpandir] = useState(false);

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
                        <button className='botaoLogin' onClick={toggleExpanded}>
                            <div className='itemLista'>
                                <img className='iconResponsivo' src={IconPerfil} alt='icon perfil'/>
                                <a id='linkMenu' className='title'>Login</a>
                            </div>
                            <img id='setaVerMais' src={Seta} alt='seta para ver mais'/>
                        </button>
                        {expandir && (
                            <div id='loginExpandido'>
                                {/* <button className='title' onClick={handleComponentLogin}>Perfil</button> */}
                                {/* A FUNÇÃO ONCLICK NÃO ESTÁ PEGANDO */}
                                <Link className='title' onClick={handleComponentLogin}>Perfil</Link>
                                {<Login />}
                                <Link className='title'>Sair</Link>
                            </div>

                        )}
                        
                    </li>
                </ul>

                <ul id='barraLinksResponsivo'>
                    <li>
                        <Link to='/pesquisa' className='linksResponsivo'>GASTRONOMIA</Link>
                    </li>
                    <li>
                        <Link to='/pesquisa' className='linksResponsivo'>MODA</Link>
                    </li>
                    <li>
                        <Link to='/pesquisa' className='linksResponsivo'>ARTESANATO</Link>
                    </li>
                    <li>
                        <Link to='/pesquisa' className='linksResponsivo'>TECNOLOGIA</Link>
                    </li>
                    <li>
                        <Link to='/pesquisa' className='linksResponsivo'>EDUCAÇÃO</Link>
                    </li>
                    <li>
                        <Link to='/pesquisa' className='linksResponsivo'>SAÚDE</Link>
                    </li>
                    <li>
                        <Link to='/pesquisa' className='linksResponsivo'>ESTÉTICA</Link>
                    </li>
                    <li>
                        <Link to='/pesquisa' className='linksResponsivo'>DIVERSOS</Link>
                    </li>
                </ul>
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