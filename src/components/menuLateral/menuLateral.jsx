import { Link } from 'react-router-dom';
import Login, { ToggleModal } from '../../pages/UsuarioComum/login/login';
import IconFechar from '../../assets/iconLoginModalClose.svg';


function MenuLateral(LoginPerfil, linkPerfil){
    return(
        <nav class="navResponsivo">
            <ul class="lista_dashboard-responsivo">
                <li id="icon_fechar-responsivo">
                    <img src={IconFechar} alt='icone para fechar o menu'/>
                    
                </li>
                <li>
                    <Link>
                        <img src="../static/img/logo-responsivo.png"/>
                    </Link>
                </li>
                <li class="active-responsivo">
                    <Link
                    to=''>
                        <img class="iconMenuResponsivo" src={IconFechar}/>
                        <p>Home</p>
                    </Link>         
                </li>
                <li>
                    <Link
                    to=''>
                        <img class="iconMenuResponsivo" src={IconFechar}/>
                        <p>Sobre</p>
                    </Link>                
                </li>
                <li>
                    <Link
                    to=''>
                        <img class="iconMenuResponsivo" src={IconFechar}/>
                        <p>Area do Parceiro</p>
                    </Link> 
                </li>
                <li>
                    <Link
                    to=''>
                        <img class="iconMenuResponsivo" src={IconFechar}/>
                        <p>{LoginPerfil}</p>
                    </Link>
                </li>
            </ul>
            <ul>
                <li>
                    
                </li>
            </ul>
        </nav>

    )
}

export default MenuLateral