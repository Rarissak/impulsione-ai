import TituloBorda from '../../../components/featured/titleBorda';
import Footer from '../../../components/footer/footer';
import Header from '../../../components/header/header';
import MenuLateral from '../../../components/menuLateral/menuLateral';
import UserProfile from '../../../components/userProfile/userProfile';
import '../PerfilUsuario/perfilUsuario.css';

export default function TelaPerfilUsuario()
{
    return(
        <>
        <Header/>
        <MenuLateral/>
        <body id='bodyPerfilUsuario'>
            <UserProfile/> 
        </body>
        <Footer/>
        </>
    );
}