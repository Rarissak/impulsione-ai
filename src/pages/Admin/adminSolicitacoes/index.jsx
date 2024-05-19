import React, { useEffect } from 'react';
import axios from 'axios';
import '../adminSolicitacoes/admin.css';
import InfoEmpreendedores from '../../../components/infoEmpreendedores/infoEmpreendedores.jsx';
import BarraLinkExterno from '../../../components/barraLinkExterno/BarraLinkExterno.jsx';
import useAxios from '../../../hook/useAxios.js';
import axiosInstance, { axiosInstanceToken } from '../../../helper/axiosInstance.js';

function Admin() {
    const [empreendedoresInativos, InfoEmpreendedoresInativosLoading, empreendedoresInativosError] = useAxios({
        axiosInstance: axiosInstanceToken(),
        method: "GET",
        url: "admin/solicitacoes"
    });

    useEffect(() => {
        if (empreendedoresInativos) {
            empreendedoresInativos.forEach(empreendedor => {
                console.log(empreendedor.idEmpreededor);  // Acessar o id de cada empreendedor
            });
        }
    }, [empreendedoresInativos]);

    return (
        <div id='pageAdmin'>
            <h1 className='title' id='tituloPaginaAdmin'>PÁGINA DO ADMINISTRADOR</h1>
            <div id='barraLinks'>
                <BarraLinkExterno name={"SOLICITAÇÕES DE CADASTRO"} id={'fundoRoxoClaro'} link={'/adminSolicitacoes'} />
                <BarraLinkExterno name={"ALTERAR PLANOS"} id={'fundoRoxoClaro'} link={'/adminPlanos'} />
            </div>
            <div className='centroAdm'>
                <h1 className='title'>SOLICITAÇÕES DE CADASTRO</h1>
                <div>
                    {InfoEmpreendedoresInativosLoading && <p>Carregando empreendedores...</p>}
                    {empreendedoresInativosError && <p>Erro ao carregar empreendedores: {empreendedoresInativosError}</p>}
                    {empreendedoresInativos && empreendedoresInativos.map((empreendedor, index) => (
    <InfoEmpreendedores
        key={index}
        nomeExibicao={empreendedor.nomeExibicao}
        idEmpreendedor={empreendedor.idEmpreededor}
        nicho={empreendedor.nicho}
        nomeEmpreendedor={empreendedor.nomeCompleto}
        nomeNegocio={empreendedor.nomeEmpreendimento}
        data={'teste'}
        horario={'teste'}
        endereco={'teste'}
        mei={empreendedor.teste}
        modalidade={empreendedor.modalidade}
        plano={empreendedor.planoAssinatura}
        insta={empreendedor.instagram}
        email={empreendedor.email}
        numContato={empreendedor.telefone}
        face={empreendedor.facebook}
    />
))}

                </div>
            </div>
        </div>
    );
}

export default Admin;
