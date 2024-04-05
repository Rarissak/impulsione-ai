import React from 'react';
import './header.css';
import '../../index.css';
import HandshakeIconSvg from '../../assets/handshakeIcon.svg';
import SearchIconSvg from '../../assets/searchIcon.svg';
import UserIconSvg from '../../assets/userIcon.svg';
import LogoDescritivaIcon from '../../assets/logoDescritivaIcon.svg';
import { Link } from 'react-router-dom';
import Login, { ToggleModal } from '../../pages/UsuarioComum/login/login';

function Header()
{
    const handleComponentLogin = () => {
        ToggleModal();
     };

    return (
        <header>

            <div id='headerUpper'>

                <div id="headerSiteName">
                    <Link
                    to='/'>
                        <img id='logo' src={LogoDescritivaIcon} alt="Logo do Impulsione Ai, onde a letra i é no formato de uma mola" /> 
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
                        />
                        
                        <img src={SearchIconSvg} alt="Icone de Lupa, com o sentido de buscar informações" />
                    </div>
                    
                    {/* Botão de login */}
                    <button 
                    id='headerLogin'
                    className='centralizeItems, headerScreenButtons'
                    onClick={handleComponentLogin}>
                        <img src={UserIconSvg} alt="Icone, para informar login" className='headerIcon'/>
                        <span>Login</span>  
                    </button>
                    {<Login />}


                    <Link
                    id='headerParceiros'
                    className='centralizeItems, headerScreenLinks'
                    to='/areaParceiro'> 
                        <img src={HandshakeIconSvg} alt="Icon da área de parceria, duas mãos se apertando." className='headerIcon' id="headerIconParceiros"/>
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
    );
}

export default Header;