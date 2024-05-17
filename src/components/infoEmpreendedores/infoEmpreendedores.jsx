import React, {useState} from 'react';
import "../infoEmpreendedores/InfoEmpreendedores.css"
import axiosInstance, { axiosInstanceToken } from '../../helper/axiosInstance';

function InfoEmpreendedores({idEmpreendedor, nicho,nomeEmpreendedor, nomeNegocio, data, horario, endereco, mei, modalidade, plano, insta, email, numContato, face}){
    
    const [motivosDispensar, setMotivosDispensar] = useState(false);

    const [expandir, setExpandir] = useState(false);

    const toggleDispensar = () => {
        setMotivosDispensar(!motivosDispensar);
    };

    const toggleVerMais = () => {
        setExpandir(!expandir);
    };

    const aceitarSolicitacao = () =>{
        
        axiosInstanceToken().put("/admin/solicitacoes/" + idEmpreendedor)
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) =>{
            console.log(err)
        })
        .finally(() => {
            window.location.reload()
        })

    }
    const recusarSolicitacao = () =>{
        axiosInstanceToken().delete("/admin/solicitacoes/" + idEmpreendedor)
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) =>{
            console.log(err)
        })
        .finally(() => {
            window.location.reload()
        })

    }

    return(
        <section id='blocoInfoNegocio'>
            <div id='topoBloco'>
                <h3 className="title">{nicho}</h3>
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
                        <button onClick={toggleDispensar} id='dispensar' className="title">Dispensar</button>
                        <button id='aceitar' className="title" onClick={aceitarSolicitacao}>Aceitar</button>
                    </div>
                    {motivosDispensar && (
                        <section id='motivosDispensa'>
                            <h3>Por qual motivo esse perfil será dispensado?</h3>
                            <form>
                                <div id='motivos'>
                                    <div className="colunaForm">
                                        <label className="campoForm">
                                            <input type="radio" name='motivo1' value='1'/>
                                            <span>Não é um microempreendedor</span>
                                        </label>
                                        <label className="campoForm">
                                            <input type="radio" name='motivo2' value='2'/>
                                            <span>Contém dados falsos</span>
                                        </label>
                                    </div>
                                    <div className="colunaForm">
                                        <label className="campoForm">
                                            <input type="radio" name='motivo3' value='3'/>
                                            <span>O Négocio não existe</span>
                                        </label>
                                        <label className="campoForm">
                                            <input type="radio" name='motivo4' value='4'/>
                                            <span>Não é um microempreendedor</span>
                                        </label>
                                    </div> 
                                </div>
                                <button type='submit' className="title" onClick={recusarSolicitacao}>CONFIRMAR MOTIVO</button>
                            </form>
                        </section>
                    )}
                    
                </div>
            )}
            
            <h4 id='infoSolicitacao'>Solicitação realizada dia {data} às {horario}</h4>
        </section>
    )
}
export default InfoEmpreendedores