import InfoPlanos from '../../../components/infoPlanos/infoPlanos'
import axiosInstance from '../../../helper/axiosInstance';
import useAxios from '../../../hook/useAxios';
import '../adminSolicitacoes/admin.css'
import React, { useState } from 'react'; // Importe o useState
import BarraLinkExterno from '../../../components/barraLinkExterno/BarraLinkExterno';


function AdminPlanos(){


    const [planos,planosLoading, planosError] = useAxios({
        axiosInstance: axiosInstance,
        method:"GET",
        url:"assinaturas"
    }) 

    const listaBeneficios = ["Deus Pai", "Filho", "Espirito Santo"];

    return(
        <body id='pageAdmin'>
            <h1 className='title' id='tituloPaginaAdmin'>PÁGINA DO ADMINISTRADOR</h1>
            <div id='barraLinks'>
                <BarraLinkExterno name={"SOLICITAÇÕES DE CADASTRO"} id={'fundoRoxoClaro'} link={'/adminSolicitacoes'}></BarraLinkExterno>
                <BarraLinkExterno name={"ALTERAR PLANOS"} id={'fundoRoxoClaro'} link={'/adminPlanos'}></BarraLinkExterno>
            </div>
            <div className='centroAdm'>
                <h1 className='title'>Informações dos Planos</h1>
                <div>
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

                
                

            </div>
        </body>
    )
}
export default AdminPlanos