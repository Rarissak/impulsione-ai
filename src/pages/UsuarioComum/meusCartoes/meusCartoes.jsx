import React from "react";
import './meusCartoes.css';
// import ModalForgetPassword, {ToggleModalForgot} from "../forgotPassword/forgotPassword";
// Importando o icon do botão de fechar o modal.
import iconModalClose from '../../../assets/iconLoginModalClose.svg';
import {BoxInfoModal} from "../../../components/boxInfo/boxInfo/boxInfo";
//import { Link } from "react-router-dom";

 {/*Função de fechar o modal. Ele vai adicionar a classe hide na div loginCentralize, 
que vai fazer a div sumir e aparecer, quando o botão escolhido for clicado.*/}
export function ToggleModal()
{
    const loginCentralize = document.querySelector("#meusCartoesCentralize");
    loginCentralize.classList.toggle("hide");
    const back = document.querySelector("#back");
    back.classList.toggle("hide");
}

// Função que impede o inserimento de letras nos campos: cpf e mei
function apenasNumeros(evt) {
    // Obtém o código ASCII do caractere digitado
    var charCode = (evt.which) ? evt.which : evt.keyCode;

    // Verifica se o caractere digitado é uma letra
    if (charCode >= 65 && charCode <= 90 || charCode >= 97 && charCode <= 122) {
        // Cancela o evento de digitação (não insere o caractere no campo)
        evt.preventDefault();
    }
}

function MeusCartoes()
{

    return(
        <div id="back" >
            
            <div id="meusCartoesCentralize" >

                <div id="meusCartoesContainer">

                    <div>
                        <button id="closeModal" onClick={ToggleModal}>
                            <img src={iconModalClose} alt="icone para fechar o modal, tem formato de X"/>
                        </button>
                    </div>
                                       
                    <BoxInfoModal title={'Meus Cartões'} idBox='titleBoxBranco' idModal='meusCartoesBox' idDivisor='divisorBranco'></BoxInfoModal>
                    <form id="meusCartoesBody">
                    
                        <div id="centralizeSides">
                                {/*Separando o lado esquerdo do direito no modal*/}
                           
                            <div id="rightSide">
                                <span className="meuPlanoTitulo">INSIRA DADOS DO CARTÃO</span>   

                                <div id="inputs">
                                    <div className="meuPlanoInputs">
                                        <span className="nameInput">Número</span>
                                        <input 
                                            type="text" 
                                            onKeyDown={apenasNumeros}
                                            required
                                            size={38} id="inputNumero"/> 
                                    </div>

                                    <div className="meuPlanoInputs">
                                        <span className="nameInput">Nome</span>
                                        <input type="text" size={40} required id="inputNome"/> 
                                    </div>

                                    <div className="meuPlanoInputs">
                                        <span className="nameInput">Data</span>
                                        <input 
                                            type="text" 
                                            id="mesAno" 
                                            name="mesAno" 
                                            pattern="\d{2}/\d{2}" 
                                            title="Digite o formato MM/AA (mês/ano)"
                                            required
                                            size={2}/>
                                    </div>

                                    <div className="meuPlanoInputs">
                                        <span className="nameInput">CVV</span>
                                        <input 
                                            type="number" 
                                            min={0} 
                                            max={999} 
                                            required
                                            /> 
                                    </div>
                                    
                                    <div className="selectField2">
                                        <label htmlfor="bandeira">Bandeira</label>
                                            <select id="bandeira" name="bandeira" className="meuPlanoInputs" required>
                                                <option value="Visa">Visa</option>
                                                <option value="Mastercard">Mastercard</option>
                                                <option value="American Express">American Express</option>
                                                <option value="Discover">Discover</option>
                                                <option value="Diners Club">Diners Club</option>
                                            </select>
                                        </div>
                                    </div>
                                
                              
                            </div>
                            
                        </div>

                        <div id="meusCartoesButtons">
                            <button type="button" id="cancel">Cancelar</button>
                            <button type="submit">Salvar</button>
                        </div>
                        
                    </form>
                    
                </div>

            </div>
        </div>
    );
}

export default MeusCartoes;