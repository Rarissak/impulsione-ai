import React, { useEffect } from "react";
import './editarDadosEmp.css';
// import ModalForgetPassword, {ToggleModalForgot} from "../forgotPassword/forgotPassword";
// Importando o icon do botão de fechar o modal.
import iconModalClose from '../../../assets/iconLoginModalClose.svg';
import BoxInfo from "../../../components/boxInfo/boxInfo";
import InstagramIcon from '../../../assets/instagramRoxo.svg';
import FacebookIcon from '../../../assets/facebookRoxo.svg';
import ProfileImg from '../../../assets/trufasDoSim.png';
import FotoExemplo from "../../../assets/trufasDoSim.png";
import { PegandoDados, MostrarDadosAtualizados } from "../../../components/meusDados/MeusDados";

//Função de fechar o modal. Ele vai adicionar a classe hide na div loginCentralize, 
//que vai fazer a div sumir e aparecer, quando o botão escolhido for clicado.*/}

export function ToggleModal()
{
    const loginCentralize = document.querySelector("#loginCentralize");
    loginCentralize.classList.toggle("hide");
    const back = document.querySelector("#back");
    back.classList.toggle("hide");
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


// Fimção que vai pegar todos os dados obtidos do componente MeusDados e mostrar dentro do input dentro do form.
function MostrarDados() {
    try {
        const testeDados = PegandoDados();
        

        const inputNomeCompleto = document.querySelector("#inputNome");
        const inputDataNascimento = document.querySelector("#inputDataNascimento");
        const inputCPF = document.querySelector("#inputCPF");
        const inputMEI = document.querySelector("#inputMEI");
        const inputEndereco = document.querySelector("#inputEndereco");
        const inputEmail = document.querySelector("#inputEmail");
        const inputNomeNegocio = document.querySelector("#inputNomeNegocio");
        const inputNicho = document.querySelector("#inputNicho");
        const inputModalidade = document.querySelector("#inputModalidade");
        const inputSite = document.querySelector("#inputSite");
        const inputInsta = document.querySelector("#inputInsta");
        const inputFace = document.querySelector("#inputFace");
        const inputTelefone = document.querySelector("#inputTel");
        const inputImg = document.querySelector("#inputImg");


        // Teste do uso de imagem
        

        // Suponha que 'file' seja o arquivo que você deseja enviar
       
        console.log(inputImg.value);
       








        if (inputNomeCompleto !== null) {
            inputNomeCompleto.value = testeDados["nome-completo"];
        }
        if (inputDataNascimento !== null) {
            inputDataNascimento.value = testeDados["data-nascimento"];
        }
        if (inputCPF !== null) {
            inputCPF.value = testeDados["cpf"];
        }
        if (inputMEI !== null) {
            inputMEI.value = testeDados.mei;
        }
        if (inputEndereco !== null) {
            inputEndereco.value = testeDados["endereco-completo"];
        }
        if (inputEmail !== null) {
            inputEmail.value = testeDados.email;
        }
        if (inputNomeNegocio !== null) {
            inputNomeNegocio.value = testeDados["nome-negocio"];
        }
        if (inputNicho !== null) {
            inputNicho.value = testeDados.nicho;
        }
        if (inputModalidade !== null) 
        {
            if (testeDados.modalidade.toLowerCase() === "híbrido") {
                inputModalidade.value = "hibrido";
            }
            else{
                inputModalidade.value = testeDados.modalidade.toLowerCase();
            }
           
            
        }

        if (inputSite !== null) {
            inputSite.value = testeDados.site;
        }
        if (inputInsta !== null) {
            inputInsta.value = testeDados["perfil-instagram"];
        }
        if (inputFace !== null) {
            inputFace.value = testeDados["perfil-facebook"];
        }
        if (inputTelefone !== null) {
            inputTelefone.value = testeDados.telefone;
        }
        if (inputImg !== null) {
            inputImg.value = testeDados.imagem;
        }
        // Se necessário, adicione mais verificações para os outros campos

    } catch (error) {
        console.log(error);
    }
}

// Função que pega todos os dados editados nos inputs e manda para o componente MeusDados para exibição.
export function PegandoDadosAtualizados()
{
    try {
        
        const elementoNome = document.querySelector("#inputNome");
        const elementoDataNascimento = document.querySelector("#inputDataNascimento");
        const elementoCPF = document.querySelector("#inputCPF");
        const elementoMEI = document.querySelector("#inputMEI");
        const elementoEndereco = document.querySelector("#inputEndereco");
        const elementoEmail = document.querySelector("#inputEmail");
        const elementoNomeNegocio = document.querySelector("#inputNomeNegocio");
        const elementoNicho = document.querySelector("#inputNicho");
        const elementoModalidade = document.querySelector("#inputModalidade");
        const elementoSite = document.querySelector("#inputSite");
        const elementoInstagram = document.querySelector("#inputInsta");
        const elementoFacebook = document.querySelector("#inputFace");
        const elementoTelefone = document.querySelector("#inputTel");
        let elementoImagem = document.querySelector("#inputImg");
        
        let nomeCompleto = null;
        let dataNascimento = null;
         let imgPath = null;
        let cpf = null;
        let enderecoCompleto = null;
        let nomeNegocio = null;
        let nicho = null;
        let modalidade = null;
        let site = null;
        let mei = null;
        let email = null;
        let telefone = null;
        let instagram = null;
        let facebook = null;
        
       
        if (elementoImagem) {
            imgPath = elementoImagem.src;
        }
        
        // Verifica se o elemento está presente antes de acessar a propriedade textContent
        if (elementoNome) {
            nomeCompleto = elementoNome.value;
        }
        
        if (elementoDataNascimento) {
            dataNascimento = elementoDataNascimento.value;
        }
        
        // Repita o mesmo para os outros elementos...
        
        // Exemplo:
        if (elementoCPF) {
            cpf = elementoCPF.value;
        }
        
        if (elementoEndereco) {
            enderecoCompleto = elementoEndereco.value;
        }
        if (elementoNomeNegocio) {
        nomeNegocio = elementoNomeNegocio.value;
        }
        
        if (elementoNicho) {
            nicho = elementoNicho.value;
        }
        
        if (elementoModalidade) {
            modalidade = elementoModalidade.value;
        }
        
        if (elementoSite) {
            site = elementoSite.value;
        }
        
        if (elementoMEI) {
            mei = elementoMEI.value;
        }
        
        if (elementoEmail) {
            email = elementoEmail.value;
        }
        
        if (elementoTelefone) {
            telefone = elementoTelefone.value;
        }
        
        if (elementoInstagram) {
            instagram = elementoInstagram.value;
        }
        
        if (elementoFacebook) {
            facebook = elementoFacebook.value;
        }

        // Bota no json
        const jsonAtualizado = {
        "nome-completo": nomeCompleto,
        "data-nascimento": dataNascimento,
        //  "img-path": imgPath,
        "cpf": cpf,
        "mei": mei,
        "endereco-completo": enderecoCompleto,
        "nome-negocio": nomeNegocio,
        "nicho": nicho,
        "modalidade": modalidade,
        "site": site,
        "email": email,
        "telefone": telefone,
        "perfil-instagram": instagram,
        "perfil-facebook": facebook,
        "foto-perfil": imgPath
        }

        console.log(JSON.stringify(jsonAtualizado));
        return jsonAtualizado;
    } catch (error) {
        console.log("Error: " + error);
    }
        
    return null;
    
}

// Editar os dados e mandar devolta

function EditarDadosEmp()
{
  
    useEffect(() => {

        MostrarDados();
    }, []);
    // Guardando resultado em uma variável bool para que possa ser usada para mostrar
    // a mensagem de error de digitação, caso seja false.
 
    return(
        <div id="back" className="hide">
            
            <div id="loginCentralize" className="hide">

                <div id="loginContainer">

                    <div>
                        <button id = "closeModal" onClick={ToggleModal}>
                            <img src={iconModalClose} alt="icone para fechar o modal, tem formato de X"/>
                        </button>
                    </div>
                    {/* <BoxInfo title={'Editar Dados'} idBox='titleBoxBranco' idModal='loginBox' idDivisor='divisorBranco'></BoxInfo> */}
                   
                    <BoxInfo title={'Editar Dados'} idBox='titleBoxBranco' idDivisor='divisorBranco'></BoxInfo>
                    <div id="loginBody">

                        <div id="scroll">
                            {/*Contém todo o formulário e seus campos*/}
                            <form 
                                id="formContainerModal" 
                                onSubmit={(event)=>{ event.preventDefault(); MostrarDadosAtualizados(); ToggleModal();}}
                                onReset={ToggleModal}>
                                <div id="formTitle1">
                                    <h1>MEUS DADOS</h1>
                                </div>
                                <h1  id="formTitle">Meus Dados</h1>
                                
                                <fieldset id="fieldSetFoto">
                                    <div id="separarCampos">
                                        {/*NOME COMPLETO*/}
                                        <div className="fieldType1">
                                            <span className="nameField">Nome Completo</span>
                                            <input className="conteudo" type="text"  required  id="inputNome" size={36}/>
                                        </div>

                                        {/*DATA DE NASCIMENTO*/}
                                        <div className="fieldType1">
                                            <span className="nameField">Data de Nascimento</span>
                                            <input className="conteudo"  required  type="date" size={12} id="inputDataNascimento"/>
                                        </div> 
                                    </div>
                                    
                                        
                                        <img src={ProfileImg} alt="Foto de perfil" id="fotoPerfil2"/>
                                        <div className="fieldType1" style={{marginBottom: '15px', marginTop: '15px'}}>
                                        <span className="nameField">Escolhar uma foto</span>
                                        <input type="file" id="inputImg" src={FotoExemplo}/>
                                        </div>
                                </fieldset>
                                    
                                {/*Campo das informações pessoais*/}
                                <fieldset className = "fieldSetConfig">
                                

                                    {/*CPF*/}
                                    <div className="fieldType1">
                                            <span className="nameField">CPF</span>
                                            <input 
                                                className="conteudo" 
                                                required 
                                                type="text" 
                                                id="inputCPF" 
                                                onKeyDown={apenasNumeros}
                                                pattern="^(\d{3}\.\d{3}\.\d{3}-\d{2}|\d{11})$" 
                                                maxLength="14" 
                                                placeholder="123.123.123-12"/>
                                    </div>

                                    {/*Endereço completo*/}
                                    <div className="fieldType1">
                                            <span className="nameField">Endereço Completo</span>
                                            <input className="conteudo" required type="text" id="inputEndereco"/>
                                    </div>
    
                                </fieldset>
                                
                                {/*CAMPO DA SENHA*/}
                                <fieldset id="fieldSetNegocio" className=" corLaranja ">

                                    {/*Nome do Negócio*/}
                                    <div className="fieldType1">
                                        <span className="nameField">Nome do negócio</span>
                                        <input className="conteudo" type="text" required id="inputNomeNegocio"/>  
                                    </div>

                                    {/*Nicho*/}
                                    <div className="fieldType1">
                                        <span className="nameField">Nicho do Trabalho</span>
                                        <input className="conteudo" type="text" required id="inputNicho"/>     
                                    </div>
                                    
                                    {/*Modalidade de Serviço*/}
                                    <div className="fieldType1">
                                        <span className="nameField">Modalidade de Serviço</span>
                                        <select className="conteudo" id="inputModalidade">
                                            <option value="">Selecione uma modalidade</option>
                                            <option value="presencial">Presencial</option>
                                            <option value="online">Online</option>
                                            <option value="hibrido">Híbrido</option>
                                        </select>  
                                    </div>
                                
                                    {/*Site do Negócio*/}
                                    <div className="fieldType1">
                                        <span className="nameField">Site do Negócio</span>
                                        <input className="conteudo" type="url" required id="inputSite"/>      
                                    </div>
                                    
                                    {/*MEI*/}
                                    <div className="fieldType1">
                                        <span className="nameField">MEI</span>
                                        <input 
                                            className="conteudo" 
                                            type="text" 
                                            id="inputMEI"
                                            onKeyDown={apenasNumeros}
                                            pattern="^(\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}|\d{14})$" 
                                            maxLength="18"
                                            placeholder="12.345.678/0001-90"
                                            required/>      
                                    </div>
                                </fieldset>

                                <fieldset id="fieldSetEmail">
                                    {/*Email Cadastrado*/}
                                    <div className="fieldType1">
                                        <span className="nameField">Email Cadastrado</span>
                                        <input className="conteudo" type="email" id="inputEmail"/>      
                                    </div>

                                    {/*Número de Contato*/}
                                    <div className="fieldType1">
                                        <span className="nameField">Número de Contato</span>
                                        <input 
                                            className="conteudo" 
                                            type="tel"  
                                            onKeyDown={apenasNumeros}
                                            required
                                            pattern="(?:\(\d{2}\) \d{5}-\d{4}|\d{11})"
                                            placeholder="(11) 92222-3333 ou só números"
                                            title="(11) 92222-3333 ou apenas números"
                                            id="inputTel"/>      
                                    </div>
                                </fieldset>
                                
                                    <fieldset id="fieldSetIcon">
                                            
                                        {/*Instagram*/}
                                        <div className="fieldType2 iconCenter">
                                            <img src={InstagramIcon}  alt="Icone do instagram" />
                                            <input className="conteudo" type="text" id="inputInsta" placeholder="@"/>     
                                        </div>

                                            {/*Facebook*/}
                                        <div className="fieldType2 iconCenter">
                                            <img src={FacebookIcon}  alt="Icone do facebook"/>
                                            <input className="conteudo" type="url" id="inputFace"/>      
                                        </div>
                                        
                                    </fieldset>

                                    <div className="buttonsFormEdit">  
                                            <button id="editButton" type="submit">SALVAR DADOS</button>
                                           
                                    </div>
                            </form>
                        </div>
                        
                    </div>
                    
                </div>

            </div>
        </div>
    );
}

export default EditarDadosEmp;