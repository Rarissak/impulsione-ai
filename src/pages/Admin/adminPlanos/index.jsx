import InfoPlanos from '../../../components/infoPlanos/infoPlanos'
import axiosInstance from '../../../helper/axiosInstance';
import useAxios from '../../../hook/useAxios';
import '../adminSolicitacoes/admin.css'
import React, { useState } from 'react'; // Importe o useState



function AdminPlanos(){


    const [planos,planosLoading, planosError] = useAxios({
        axiosInstance: axiosInstance,
        method:"GET",
        url:"assinaturas"
    }) 

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
                {!planosLoading && (
                    planos?.map((plano) => (
                        <InfoPlanos
                            nomePlano={plano.nome}
                            valorPlano={plano.preco}
                            beneficios={plano.beneficios.split(",")}
                            idPLano={plano.idPlanoAssinatura}
                        />
                    ))
                )}
                

            </div>
        </body>
    )
}
export default AdminPlanos