import React from "react";
import Header from '../../../components/header/header.jsx';
import FormParceiro from '../SignUpPartner/ComponenteAlteradosParaPagina/formParceiro/formParceiro.jsx';
import Buttons from "../SignUpPartner/ComponenteAlteradosParaPagina/buttonsPartnerUser/buttons.jsx"
import Footer from '../../../components/footer/footer.jsx';

function SignUpPartner()
{
    return(
        <div>
            <Header/>
            <body style={{ margin: 0, padding: 0, backgroundColor: '#F6E8FF',
                            display: "flex", flexDirection:"column", justifyContent:"center"}}>
                <Buttons idParceiro='buttonSelecionado' idUsuario=' '/>
                <FormParceiro/>
            </body>
            <Footer/>
        </div>
    );
}

export default SignUpPartner;