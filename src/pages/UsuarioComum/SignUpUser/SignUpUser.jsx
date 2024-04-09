import React from "react";
import Header from '../../../components/header/header.jsx';
import FormUser from '../SignUpUser/formUser/formUser.jsx';
// import Footer from '../../Parceiro/SignUpPartner/ComponenteAlteradosParaPagina/footer/footer.jsx';
import Buttons from "../../Parceiro/SignUpPartner/ComponenteAlteradosParaPagina/buttonsPartnerUser/buttons.jsx"
import Footer from '../../../components/footer/footer.jsx';
import MenuLateral from "../../../components/menuLateral/menuLateral.jsx";

function SignUpUser()
{
    return(
        <div>
            <Header/>
            <MenuLateral></MenuLateral>
            <body style={{ margin: 0, padding: 0, backgroundColor: '#F6E8FF',
                            display: "flex", flexDirection:"column", justifyContent:"center"}}>
                <Buttons idParceiro=' ' idUsuario='buttonSelecionado'/>
                <FormUser/>
            </body>
            <Footer/>
        </div>
    );
}

export default SignUpUser;