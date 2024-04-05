import React, {useState} from "react";
import './forgotPassword.css';
import {BoxInfoModal} from '../../../components/boxInfo/boxInfo';
import ModalChangePassworld from '../changePassword/changePassword'
import FundoSenha from '../../../assets/fundoSenha.svg';

function EsqueciSenha()
{
    const [showModalChange, setModalChange] = useState(false);
    function AbrirModalChange(event)
    {
     event.preventDefault(); // impedindo o form de rederecionar a página
      setModalChange(true);
      
    }
    return(
        <body id="bodyDiferente">
            <div id='boxEsqueciSenha'>
                <div>
                <BoxInfoModal title={'Esqueci minha senha'} idBox='titleBoxBranco' idModal='esqueciBox' idDivisor='divisorBranco'></BoxInfoModal>
                <form id="forgotBody" onSubmit={AbrirModalChange}>

                    {/*Input de email*/}
                    <div className="forgotInput" >
                        <span className="nameInput">Insira o email cadastrado</span>
                        <input type="email" required/>
                        </div>

                        {/*Botões de logar e ir para cadastro*/}
                        <div id="forgotButton">
                        <button id="forgotButtonSubmit" type="submit" >ENVIAR</button>

                    </div>
                </form>
                {showModalChange &&  <ModalChangePassworld/>}
                </div>
                <div>
                    <img id='imagemFundo' src={FundoSenha} alt='uma imagem com uma chave numa ponta e traços com asteristico representando o campo de senha e um cadeado na outra ponta'/>
                </div>
            </div>
        </body>
    );
}

export default EsqueciSenha;
