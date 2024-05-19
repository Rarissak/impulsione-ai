import React, { useState } from 'react';
import "../infoEmpreendedores/InfoEmpreendedores.css";
import { axiosInstanceToken } from '../../helper/axiosInstance';
import axios from "axios";

function InfoEmpreendedores({
    idEmpreendedor, idNicho, nomeExibicao, nomeEmpreendedor, nomeNegocio, data, horario, endereco, mei, modalidade, plano, insta, email, numContato, face
}) {
    const [motivosDispensar, setMotivosDispensar] = useState(false);
    const [expandir, setExpandir] = useState(false);

    const toggleDispensar = () => {
        setMotivosDispensar(!motivosDispensar);
    };

    const toggleVerMais = () => {
        setExpandir(!expandir);
    };


    //Inicio sistema do e-mail

    const [dadosEmail, setDadosEmail] = useState({
        ownerRef: "Suporte",
        emailFrom: "impulsioneai@gmail.com",
        emailTo: email,
        subject: "Bem-vindo (a) ao Impulsione AI",
        text: "Bem-vindo(a) ao ImpulsioneAi! Estamos muito felizes em tê-lo(a) conosco! A nossa plataforma foi criada para lhe ajudar na divulgação do seu trabalho. Qualquer dúvida é só entrar em contato!"
   
    });

    const handleSubmitEmail = async (dadosEmail) => {
        

        try {
            const resposta = await axios.post('http://localhost:8080/email', dadosEmail);
            console.log(resposta.data);
            
        } catch (erro) {
            console.error('Ocorreu um erro ao enviar o e-mail:', erro);
        }
    };

    const handleChangeEmail = (event) => {
        setDadosEmail({ ...dadosEmail, [event.target.name]: event.target.value });
    };

    //Fim sistema do e-mail

    const aceitarSolicitacao = async () => {
        await axiosInstanceToken().put("/admin/solicitacoes/" + idEmpreendedor)
            .then((res) => {
                handleSubmitEmail({
                    ownerRef: "Suporte",
                    emailFrom: "impulsioneai@gmail.com",
                    emailTo: email,
                    subject: "Bem-vindo (a) ao Impulsione AI",
                    text: "Olá " + nomeExibicao + "," +"\n\nFicamos muito felizes em saber que você deseja ser um parceiro Impulsione aí. \n\nE hoje viemos com boas notícias, tá preparado(a)?\n\nVocê foi aceito na nossa plataforma e será nosso mais novo, empreendedor parceiro. \n\nEstamos com muitas expectativas para começar a impulsionar seu negócio. \n\nAcesse aqui a plataforma Impulsione aí através desse link:https://impulsione-ai.vercel.app \n\nAtenciosamente, equipe Impulsione aí."
                
                });
                alert("Solicitação aceita com sucesso!")
                console.log(res.data);
            })
            .catch((err) => {
                alert("Erro ao aceitar solicitação!")
                console.log(err);
            })
            .finally(() => {
                window.location.reload();
            });
    };

    const recusarSolicitacao = async () => {
        await axiosInstanceToken().delete("/admin/solicitacoes/" + idEmpreendedor)
            .then((res) => {
                handleSubmitEmail({
                    ownerRef: "Suporte",
                    emailFrom: "impulsioneai@gmail.com",
                    emailTo: email,
                    subject: "Ainda Queremos Você com a Impulsione aí",
                    text: "Olá " + nomeExibicao + "," + "\n\nFicamos muito felizes em saber que você deseja ser um parceiro Impulsione aí.\n\nInfelizmente você não foi aceito na nossa plataforma.\n\nDevido aos seguintes motivos:\n\n1- foi constatado que você não é um microempreendedor.\n2- Seus dados não foram encontrados.\n\nMas não fica triste, você pode ainda ser nosso usuário impulsione aí. Ajudando a impulsionar pequenos negócios a se tornarem grandes.\n\nEai, vamos firmar esse compromisso?\n\nVem navegar aqui conosco: https://impulsione-ai.vercel.app \n\nAtenciosamente, equipe impulsione aí."
                });
                alert("Solicitação deletada com sucesso!")
            })
            .catch((err) => {
                alert("Erro ao deletar solicitação!")
                console.log(err);
            })
            .finally(() => {
                window.location.reload();
            });
    };

    return (
        <section id='blocoInfoNegocio'>
            <div id='topoBloco'>
                <h3 className="title">{idNicho}</h3>
                <button onClick={toggleVerMais} className="title">{expandir ? "Ver menos" : "Ver mais"}</button>
            </div>
            <div className="infoNegocioRow">
                <h3>Empreendedor:</h3>
                <p>{nomeEmpreendedor}</p>
            </div>
            <div className="infoNegocioRow">
                <h3>Nome do Empreendimento:</h3>
                <p>{nomeNegocio}</p>
            </div>
            {expandir && (
                <div id='blocoVerMais'>
                    <div className="sessaoInfo">
                        <div className="infoNegocioColumn">
                            <h3>Endereço</h3>
                            <p>{endereco}</p>
                        </div>
                        <div className="infoNegocioColumn">
                            <h3>MEI</h3>
                            <p>{mei}</p>
                        </div>
                    </div>
                    <div className="sessaoInfo">
                        <div className="infoNegocioColumn">
                            <h3>Modalidade</h3>
                            <p>{modalidade}</p>
                        </div>
                        <div className="infoNegocioColumn">
                            <h3>Plano</h3>
                            <p>{plano}</p>
                        </div>
                        <div className="infoNegocioColumn">
                            <h3>Instagram</h3>
                            <p>{insta}</p>
                        </div>
                    </div>
                    <div className="sessaoInfo">
                        <div className="infoNegocioColumn">
                            <h3>Email</h3>
                            <p>{email}</p>
                        </div>
                        <div className="infoNegocioColumn">
                            <h3>Número de Contato</h3>
                            <p>{numContato}</p>
                        </div>
                        <div className="infoNegocioColumn">
                            <h3>Facebook</h3>
                            <p>{face}</p>
                        </div>
                    </div>
                    <div id='buttonsAceitarDispensar'>
                        <button onClick={recusarSolicitacao} id='dispensar' className="title">Dispensar</button>
                        <button id='aceitar' className="title" onClick={aceitarSolicitacao}>Aceitar</button>
                       
                    </div>
                    {/* {motivosDispensar && (
                        <section id='motivosDispensa'>
                            <h3>Por qual motivo esse perfil será dispensado?</h3>
                            
                                <div id='motivos'>
                                    <div className="colunaForm">
                                        <label className="campoForm">
                                            <input type="radio"/>
                                            <span>Não é um microempreendedor</span>
                                        </label>
                                        <label className="campoForm">
                                            <input type="radio"/>
                                            <span>Contém dados falsos</span>
                                        </label>
                                    </div>
                                    <div className="colunaForm">
                                        <label className="campoForm">
                                            <input type="radio"/>
                                            <span>O Negócio não existe</span>
                                        </label>
                                        <label className="campoForm">
                                            <input type="radio"/>
                                            <span>Não é um microempreendedor</span>
                                        </label>
                                    </div>
                                </div>
                                
                            
                            
                        </section>
                    )} */}
                </div>
            )}
            <h4 id='infoSolicitacao'>Solicitação realizada dia {data} às {horario}</h4>
        </section>
    );
}

export default InfoEmpreendedores;
