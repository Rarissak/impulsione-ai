import React, { useState, useEffect } from "react";
import './editarDadosUser.css';
// import ModalForgetPassword, {ToggleModalForgot} from "../forgotPassword/forgotPassword";
// Importando o icon do botão de fechar o modal.
import iconModalClose from '../../assets/iconLoginModalClose.svg';
import BoxInfo from "../boxInfo/boxInfo";

import axiosInstance from '../../helper/axiosInstance.js';
import useAxios from '../../hook/useAxios.js';
import { PegandoDados } from "../userProfile/userProfile.jsx";
//Função de fechar o modal. Ele vai adicionar a classe hide na div editarDadosUserCentralize, 
//que vai fazer a div sumir e aparecer, quando o botão escolhido for clicado.*/}

let usuario = {};
let loading, error;
let dadosVindosBack = false;

export function ToggleModalEditDataUser()
{

    const editarDadosUserCentralize = document.querySelector("#editarDadosUserCentralize");
    editarDadosUserCentralize.classList.toggle("hideEditarDadosUser");

    const back = document.querySelector("#backEditarDadosUser");
    back.classList.toggle("hideEditarDadosUser");
}


// Função que faz com que o campo recuse o input de letras no input. A função é colocada no evento onKeyDown -> ao pressionar a tecla.
function apenasNumeros(evt) {
    // Obtém o código ASCII do caractere digitado
    var charCode = (evt.which) ? evt.which : evt.keyCode;

    // Verifica se o caractere digitado é uma letra
    let letrasMaiusculas = charCode >= 65 && charCode <= 90;
    let letrasMinusculas = charCode >= 97 && charCode <= 122;
    if ( letrasMinusculas|| letrasMaiusculas) {
        // Cancela o evento de digitação (não insere o caractere no campo)
        evt.preventDefault();
    }
}


function EditarDadosUser() {


    const [usuario, loading, error] = useAxios({
        axiosInstance: axiosInstance,
        method: 'GET',
        url:`/usuarios/${localStorage.getItem("id")}`
        
    })
     
    const formatDate = (isoString) => {
        const date = new Date(isoString);
        const day = String(date.getUTCDate()).padStart(2, '0');
        const month = String(date.getUTCMonth() + 1).padStart(2, '0');
        const year = date.getUTCFullYear();
        return `${year}-${month}-${day}`;
    };

  

    return (
        <div id="backEditarDadosUser" className="hideEditarDadosUser">
            <div id="editarDadosUserCentralize" className="hideEditarDadosUser">
                <div id="editarDadosUserContainer">
                    <div>
                        <button id="closeModalDadosUser" onClick={ToggleModalEditDataUser}>
                            <img src={iconModalClose} alt="icone para fechar o modal, tem formato de X" />
                        </button>
                    </div>
                    <BoxInfo title={'Editar Dados'} idBox='titleBoxBranco' idDivisor='divisorBranco'></BoxInfo>
                    <div id="editarDadosUserBody">
                        <form id="formContainerModalEdit" onSubmit={ToggleModalEditDataUser}>
                            <div id="centerModalUser">
                                <div className="fieldType1">
                                    <span className="nameField">Nome Completo</span>
                                    <input className="conteudo" type="text" required id="inputNome" placeholder="insira novo nome" value={usuario?.nome} />
                                </div>
                                <div className="fieldType1">
                                    <span className="nameField">Data de Nascimento</span>
                                    <input className="conteudo" required type="date" pattern="\d{2}/\d{2}/\d{4}" id="inputDataNascimento" value={formatDate(usuario?.dataNascimento)} />
                                </div>
                                <div className="fieldType1">
                                    <span className="nameField">CPF</span>
                                    <input className="conteudo" required type="text" id="inputCPF" onKeyDown={apenasNumeros} pattern="^(\d{3}\.\d{3}\.\d{3}-\d{2}|\d{11})$" maxLength="14" placeholder="123.123.123-12" value={usuario?.cpf} />
                                </div>
                                <div className="fieldType1">
                                    <span className="nameField">Email Cadastrado</span>
                                    <input className="conteudo" type="email" id="inputEmail" required placeholder="insira novo email" value={usuario?.email}/>
                                </div>
                                <div className="buttonsFormEdit">
                                    <button id="editButton" type="submit">SALVAR DADOS</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditarDadosUser;