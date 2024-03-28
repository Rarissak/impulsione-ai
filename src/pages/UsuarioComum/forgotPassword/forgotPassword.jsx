
import React from "react";
import './forgotPassword.css';
// Importando o icon do botão de fechar o modal.
import iconModalClose from '../../../assets/iconLoginModalClose.svg';
import BoxInfo from '../../../components/boxInfo/boxInfo';

 {/*Função de fechar o modal. Ele vai adicionar a classe hide na div loginCentralize, 
que vai fazer a div sumir e aparecer, quando o botão escolhido for clicado.*/}
export function ToggleModalForgot()
{
    const forgotCentralize = document.querySelector("#forgotCentralize");
    forgotCentralize.classList.toggle("hide");
    const back = document.querySelector("#back");
    back.classList.toggle("hide");
}


function Login()
{
   
    return(
        // Fundo do componente, que será responsável por fixar o componente na tela.
        <div id="back">
             {/*Botão responsável por abrir o modal, Por a função ToggleModal no botão que for desajável mais tarde.*/}
           {/*  <button id="openModal" onClick={ToggleModal}>Abrir Modal</button>.*/}
             {/*Div responsável pela centralização do container do login e adição da cor do fundo*/}
            <div id="forgotCentralize">

                 {/*Div que vai conter todos os elementos principais do login. Ex: inputs de email e senha*/}
                <div id="forgotContainer">

                    {/*Botão de fechar o modal*/}
                    <div>
                         {/*Já está com a função de fechar o modal*/}
                        <button id = "closeModal" onClick={ToggleModalForgot}>
                            <img src={iconModalClose} alt="icone para fechar o modal, tem formato de X"/>
                        </button>
                    </div>
                    <BoxInfo title={'Esqueci minha senha'} idBox='titleBoxBranco' idDivisor='divisorBranco'></BoxInfo>
                     {/*Div contendo os elementos do login*/}
                    <div id="forgotBody">

                         {/*Input de email*/}
                        <div className="forgotInput">
                            <span className="nameInput">Insira o email cadastrado</span>
                            <input type="email"/>
                        </div>

                         {/*Botões de logar e ir para cadastro*/}
                        <div id="forgotButton">
                            <button id="forgotButtonSubmit">ENVIAR</button>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
        
      

    );
}






export default Login;