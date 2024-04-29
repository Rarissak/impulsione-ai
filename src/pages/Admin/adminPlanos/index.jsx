import InfoPlanos from '../../../components/infoPlanos/infoPlanos'
import '../adminSolicitacoes/admin.css'
import React, { useState } from 'react'; // Importe o useState



function AdminPlanos(){

    const listaBeneficios = ["Deus Pai", "Filho", "Espirito Santo"];

    return(
        <body id='pageAdmin'>
            <h2>TESTE</h2>
            <h1 className='title' id='tituloPagina'>PÁGINA DO ADMINISTRADOR</h1>
            <div id='barraLinks'>
                <h3>Solicitações de Cadastro</h3>
                <h3>Alterar Planos</h3>
            </div>
            <div className='centroAdm'>
                <InfoPlanos nomePlano={'Teste'} valorPlano={'0,00'} beneficio={'teste'} beneficios={listaBeneficios}></InfoPlanos>

            </div>
        </body>
    )
}
export default AdminPlanos