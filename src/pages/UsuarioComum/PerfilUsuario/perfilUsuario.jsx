import TituloBorda from '../../../components/featured/titleBorda';
import Footer from '../../../components/footer/footer';
import Header from '../../../components/header/header';
import UserProfile from '../../../components/userProfile/userProfile';
import './perfilUsuario.css';

export default function TelaPerfilUsuario()
{
    return(
        <div>
           <Header/>
            <UserProfile/>
            <Footer/>
        </div>
    );
}