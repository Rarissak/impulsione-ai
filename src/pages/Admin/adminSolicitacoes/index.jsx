import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../adminSolicitacoes/admin.css'
import InfoEmpreendedores from '../../../components/infoEmpreendedores/infoEmpreendedores.jsx'
import BarraLinkExterno from '../../../components/barraLinkExterno/BarraLinkExterno.jsx'

import axiosInstance from '../../../helper/axiosInstance.js';
import useAxios from '../../../hook/useAxios.js';

function Admin(){

    const [empreendedores, empreendedoresLoading, empreendedoresError] = useAxios({
        axiosInstance: axiosInstance,
        method: 'GET',
        url: 'admin/solicitacoes'
    })


    // const [empreendedores, setEmpreendedores] = useState([]);

    // useEffect(() => {
    //     // Função para obter empreendedores não verificados do servidor
    //     const getEmpreendedoresNaoVerificados = async () => {
    //         try {
    //             const response = await axios.get('http://localhost:8080/admin/solicitacoes');
    //             setEmpreendedores(response.data);
    //             console.log('Empreendedores:', response.data); // Verifica se os dados estão sendo recebidos corretamente

    //         } catch (error) {
    //             console.error('Erro ao obter os empreendedores:', error.response.data);
    //         }
    //     };

    //     // Chama a função para obter os empreendedores não verificados ao montar o componente
    //     getEmpreendedoresNaoVerificados();
    // }, []);


    return (
        <div id='pageAdmin'>
            <h1 className='title' id='tituloPaginaAdmin'>PÁGINA DO ADMINISTRADOR</h1>
            <div id='barraLinks'>
                <BarraLinkExterno name={"SOLICITAÇÕES DE CADASTRO"} id={'fundoRoxoClaro'} link={'/adminSolicitacoes'}></BarraLinkExterno>
                <BarraLinkExterno name={"ALTERAR PLANOS"} id={'fundoRoxoClaro'} link={'/adminPlanos'}></BarraLinkExterno>
            </div>
            <div className='centroAdm'>
                <h1 className='title'>SOLICITAÇÕES DE CADASTRO</h1>
                <div>
                    {empreendedoresLoading && <p>Carregando empreendedores...</p>}
                    {empreendedoresError && <p>Erro ao carregar empreendedores: {empreendedoresError}</p>}
                    {empreendedores && empreendedores.map((empreendedor, index) =>
                        <InfoEmpreendedores
                            key={index}
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
                        >
                        </InfoEmpreendedores>
                    )}
                    
                </div>
            </div>

        </div>
        
        
    )
}

export default Admin