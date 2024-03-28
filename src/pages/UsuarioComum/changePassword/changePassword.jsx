
import React,{useState} from "react";
import './changePassword.css';
// Importando o icon do botão de fechar o modal.
import iconModalClose from '../../../assets/iconLoginModalClose.svg';
import BoxInfo from "../../../components/boxInfo/boxInfo";

 {/*Função de fechar o modal. Ele vai adicionar a classe hide na div loginCentralize, 
que vai fazer a div sumir e aparecer, quando o botão escolhido for clicado.*/}
export function ToggleModalChange()
{
    const loginCentralize = document.querySelector("#changeCentralize");
    loginCentralize.classList.toggle("hide");
    const back = document.querySelector("#back");
    back.classList.toggle("hide");
}

function apenasNumeros(evt) {
    // Obtém o código ASCII do caractere digitado
    var charCode = (evt.which) ? evt.which : evt.keyCode;

    // Verifica se o caractere digitado é uma letra
    if (charCode >= 65 && charCode <= 90 || charCode >= 97 && charCode <= 122) {
        // Cancela o evento de digitação (não insere o caractere no campo)
        evt.preventDefault();
    }
}

function ChangePassword()
{
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    return(
        // Fundo do componente, que será responsável por fixar o componente na tela.
        <div id="back" > 
            {/*Div responsável pela centralização do container do login e adição da cor do fundo*/}
            <div id="changeCentralize" >

                 {/*Div que vai conter todos os elementos principais do login. Ex: inputs de email e senha*/}
                <div id="changeContainer">

                    {/*Botão de fechar o modal*/}
                    <div>
                         {/*Já está com a função de fechar o modal*/}
                        <button id = "closeModal" onClick={ToggleModalChange}>
                            <img src={iconModalClose} alt="icone para fechar o modal, tem formato de X"/>
                        </button>
                    </div>
                    
                     {/*Titulo do componente login*/}
                    <BoxInfo title={'Alterar Senha'} idBox={'titleBoxBranco'} idDivisor={'divisorBranco'}></BoxInfo>

                     {/*Div contendo os elementos do login*/}
                    <div id="changeBody">

                         {/*Input de email*/}
                        <div className="changeInput">
                            <span className="nameInput">Digite o código de verificação</span>
                            <div id="codCentralize">
                                <div className="codInput">
                                    <input
                                    type="text"
                                    pattern="[0-9]*"
                                    maxLength={6}
                                    onKeyDown={apenasNumeros}
                                    />
                                </div>   
                            </div>
                           
                        </div>
                        <div className="changeInput">
                            <span className="nameInput">Digite a Nova Senha</span>
                            <input 
                                type="password"
                                value={confirmarSenha} 
                                onChange={(e) => setConfirmarSenha(e.target.value)} />
                        </div>
                        <div className="changeInput">
                            <span className="nameInput">Reescreva a Senha</span>
                            <input 
                                type="password"
                                value={senha} 
                                onChange={(e) => setSenha(e.target.value)} />
                            <span>
                                {/* Exibir mensagem de sucesso se as senhas forem compatíveis */}
                                {(senha !== '' && confirmarSenha !== '') && senha === confirmarSenha && (
                                    <span className="validInput">As senhas são compatíveis!</span>
                                )}
                            </span>
                        </div>

                         {/*Botões de logar e ir para cadastro*/}
                        <div id="changeButton">
                            <button id="changeButtonSubmit">SALVAR</button>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    
    );
}

export default ChangePassword;