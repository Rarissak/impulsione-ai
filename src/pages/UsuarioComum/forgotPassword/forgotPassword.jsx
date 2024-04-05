import React from "react";
import './forgotPassword.css';
import BoxInfo from "../../../components/boxInfo/boxInfo";
import FundoSenha from '../../../assets/fundoSenha.svg';

function EsqueciSenha()
{
   
    return(
        <body id="bodyDiferente">
            <div id='boxEsqueciSenha'>
                <div>
                   <BoxInfo title={'Esqueci minha senha'} idBox='titleBoxBranco' idDivisor='divisorBranco'></BoxInfo>
                    <div id="forgotBody">
                        <div className="forgotInput">
                            <span className="nameInput">Insira o email cadastrado</span>
                            <input type="email"/>
                        </div>
                        <div id="forgotButton">
                            <button id="forgotButtonSubmit">ENVIAR</button>
                        </div>
                    </div> 
                </div>
                <div>
                    <img id='imagemFundo' src={FundoSenha} alt='uma imagem com uma chave numa ponta e traços com asteristico representando o campo de senha e um cadeado na outra ponta'/>
                </div>
            </div>
        </body>
    );
}

export default EsqueciSenha;