import React, { useState, useEffect } from "react";
import './meusDados.css';
import BoxInfo from '../../components/boxInfo/boxInfo';
import InstagramIcon from '../../assets/instagramRoxo.svg';
import FacebookIcon from '../../assets/facebookRoxo.svg';
import ProfileImg from '../../assets/gato.webp';
 /*Função de validação de formatação do contéudo do input CPF
 Vai verificar se o cpf segue o padrão: 123.123.123-12 ou vai ter apenas 11 numeros, tem retorno boleano*/
function isValidCPF(cpf) {
  
    const cpfRegex = /^(\d{3}\.\d{3}\.\d{3}-\d{2}|\d{11})$/;
    return cpfRegex.test(cpf);
}

// Função de validação de email, vai verificar a formatação do input do campo email, tem retorno boleano
function isValidEmail(email){
    // Expressão regular para validar e-mail simples
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Função responsável por mostrar a mensagem de cadastro realizado com sucesso.
function CadastroRealizado()
{
    return alert("Seu cadastro foi enviado com sucesso. Por favor aguarde a validação da conta via o e-mail cadastrado!");
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

// função principal do arquivo
function MeusDados()
{
     /*Gets e sets dos campos que necessitam de validão: CPF, EMAIL, Senha */
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [cpfValido, setCpfValido] = useState(true);
    const [emailValido, setEmailValido] = useState(true);
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');


    // Guardando resultado em uma variável bool para que possa ser usada para mostrar
    // a mensagem de error de digitação, caso seja false.
    
    useEffect(() => {
        setCpfValido(isValidCPF(cpf));
    }, [cpf]);

    useEffect(() => {
        setEmailValido(isValidEmail(email));
    }, [email]);

    // Funções colocando no evento Onchange para pegar os valores que estão sendo digitados em tempo real
    const handleCpfChange = (event) => {
        setCpf(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    return(
            <div>
                <div id="form">
                   
                 

                    <div className="boxForm">

                        {/*Contém todo o formulário e seus campos*/}
                        <form id="formContainer" onSubmit={CadastroRealizado}>
                            <div id="formTitle1">
                                <h1>MEUS DADOS</h1>
                            </div>
                            <h1  id="formTitle">Meus Dados</h1>
                            
                            <fieldset id="fieldSetFoto">
                                <div id="separarCampos">
                                    {/*NOME COMPLETO*/}
                                    <div className="fieldType1">
                                        <span className="nameField">Nome Completo</span>
                                        <span className="conteudo">Nome Completo iodvncoicnoincncncncnnnnl</span>
                                    </div>

                                    {/*DATA DE NASCIMENTO*/}
                                    <div className="fieldType1">
                                        <span className="nameField">Data de Nascimento</span>
                                        <span className="conteudo">00/00/0000</span>
                                    </div> 
                                </div>
                                 
                                    
                                    <img src={ProfileImg} alt="Foto de perfil" id="fotoPerfil"/>
                            </fieldset>
                                
                            {/*Campo das informações pessoais*/}
                            <fieldset className = "fieldSetConfig">
                            

                                {/*CPF*/}
                                <div className="fieldType1">
                                        <span className="nameField">CPF</span>
                                        <span className="conteudo">000.000.000-00</span>
                                </div>

                                 {/*Endereço completo*/}
                                <div className="fieldType1">
                                        <span className="nameField">Endereço Completo</span>
                                        <span className="conteudo">Rua/Avenida, nº 00 - Bairro, Cidade - UF</span>
                                </div>
   
                            </fieldset>
                            
                            {/*CAMPO DA SENHA*/}
                            <fieldset id="fieldSetNegocio" className=" corLaranja ">

                                {/*Nome do Negócio*/}
                                <div className="fieldType1">
                                    <span className="nameField">Nome do negócio</span>
                                    <span className="conteudo">Gastronomia</span>    
                                </div>

                                {/*Nicho*/}
                                <div className="fieldType1">
                                    <span className="nameField">Nicho do Trabalho</span>
                                    <span className="conteudo">Gastronomia</span>    
                                </div>
                                
                                {/*Modalidade de Serviço*/}
                                <div className="fieldType1">
                                    <span className="nameField">Modalidade de Serviço</span>
                                    <span className="conteudo">Híbrido</span>    
                                </div>
                              
                                {/*Site do Negócio*/}
                                <div className="fieldType1">
                                    <span className="nameField">Site do Negócio</span>
                                    <span className="conteudo">Não possui</span>    
                                </div>
                                
                                {/*MEI*/}
                                <div className="fieldType1">
                                    <span className="nameField">MEI</span>
                                    <span className="conteudo">000000000000000</span>    
                                </div>
                            </fieldset>

                            <fieldset id="fieldSetEmail">
                                 {/*Email Cadastrado*/}
                                 <div className="fieldType1">
                                    <span className="nameField">Email Cadastrado</span>
                                    <span className="conteudo">algumacoisa@gmail.com</span>    
                                </div>

                                 {/*Número de Contato*/}
                                 <div className="fieldType1">
                                    <span className="nameField">Número de Contato</span>
                                    <span className="conteudo">+55 (81) 40028922</span>    
                                </div>
                            </fieldset>
                            
                                <fieldset id="fieldSetIcon">
                                        
                                    {/*Instagram*/}
                                    <div className="fieldType2 iconCenter">
                                        <img src={InstagramIcon}  alt="Icone do instagram" />
                                        <span className="conteudo">@perfil do instagram</span>    
                                    </div>

                                        {/*Facebook*/}
                                    <div className="fieldType2 iconCenter">
                                        <img src={FacebookIcon}  alt="Icone do facebook"/>
                                        <span className="conteudo">perfil do facebook</span>    
                                    </div>
                                    
                                </fieldset>

                                <div className="buttonsFormEdit">  
                                        <button id="editButton">EDITAR DADOS</button>
                                </div>
                            
                           

                            <fieldset id="fieldSetConfigPlano" className=" corLaranja">
                                 {/*Plano Escolhido*/}
                                 <div className="fieldType1">
                                    <span className="nameField">Plano escolhido</span>
                                    <span className="conteudo">Silver</span>    
                                </div>

                                 {/*Cartão Cadastrado*/}
                                 <div className="fieldType1">
                                    <span className="nameField">Cartão cadastrado</span>
                                    <span className="conteudo">(Nome do cartão)</span>    
                                </div>

                                <div className="buttonsForm">  
                                    <button id="alterarButton">ALTERAR PLANO</button>
                                </div>
                            </fieldset>
                        </form>
                    </div>

                </div>

                {/*Abrindo um espaço entre o footer e o formulário.*/}
                <div id="beforeFooter"></div>

            </div>
    );
}

export default MeusDados;