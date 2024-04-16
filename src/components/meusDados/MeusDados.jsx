import React, {useEffect} from "react";
import './meusDados.css';
import InstagramIcon from '../../assets/instagramRoxo.svg';
import FacebookIcon from '../../assets/facebookRoxo.svg';
import ProfileImg from '../../assets/trufasDoSim.png';
import EditarDadosEmp, {ToggleModal, PegandoDadosAtualizados} from '../../pages/UsuarioComum/editarDadosEmp/editarDadosEmp.jsx';

// Função que vai pegar todos os dados  dos 'campos' do componente meus dados
export function PegandoDados()
{
    
    try {
         // Pega dados
         const elementoNome = document.getElementById("campoNome");
         const elementoDataNascimento = document.getElementById("campoDataNascimento");
         // const elementoFotoPerfil = document.getElementById("fotoPerfil");
         const elementoCPF = document.getElementById("campoCPF");
         const elementoEndereco = document.getElementById("campoEndereco");
         const elementoNomeNegocio = document.getElementById("campoNomeNegocio");
         const elementoNicho = document.getElementById("campoNicho");
         const elementoModalidade = document.getElementById("campoModalidade");
         const elementoSite = document.getElementById("campoSite");
         const elementoMEI = document.getElementById("campoMEI");
         const elementoEmail = document.getElementById("campoEmail");
         const elementoTelefone = document.getElementById("campoTel");
         const elementoInstagram = document.getElementById("campoInsta");
         const elementoFacebook = document.getElementById("campoFace");
         const elementoImg = document.getElementById("campoFace");
         let nomeCompleto = null;
         let dataNascimento = null;
         // let imgPath = null;
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
         
         // Verifica se o elemento está presente antes de acessar a propriedade textContent
         if (elementoNome) {
             nomeCompleto = elementoNome.textContent;
         }
         
         if (elementoDataNascimento) {
             dataNascimento = elementoDataNascimento.textContent;
         }
         
         // Repita o mesmo para os outros elementos...
         
         // Exemplo:
         if (elementoCPF) {
             cpf = elementoCPF.textContent;
         }
         
         if (elementoEndereco) {
             enderecoCompleto = elementoEndereco.textContent;
         }
         if (elementoNomeNegocio) {
            nomeNegocio = elementoNomeNegocio.textContent;
        }
        
        if (elementoNicho) {
            nicho = elementoNicho.textContent;
        }
        
        if (elementoModalidade) {
            modalidade = elementoModalidade.textContent;
        }
        
        if (elementoSite) {
            site = elementoSite.textContent;
        }
        
        if (elementoMEI) {
            mei = elementoMEI.textContent;
        }
        
        if (elementoEmail) {
            email = elementoEmail.textContent;
        }
        
        if (elementoTelefone) {
            telefone = elementoTelefone.textContent;
        }
        
        if (elementoInstagram) {
            instagram = elementoInstagram.textContent;
        }
        
        if (elementoFacebook) {
            facebook = elementoFacebook.textContent;
        }

    // Bota no json
    const json = {
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
        "perfil-facebook": facebook
    }

   
    return json;
    // retorna o json
    } catch (error) {
        console.log(error);
        return null;
    }
    

} 

// Função que deixa a primeira letra da palavra em maiúsculo.
function capitalizarPrimeiraLetra(string) {
    return string.charAt(0).toUpperCase() + string.substring(1);
}

// Função que Vai atualizar os dados exibidos No componente MeusDados
export function MostrarDadosAtualizados() {
    try {
        const testeDados = PegandoDadosAtualizados();
        

        const elementoNome = document.getElementById("campoNome");
        const elementoDataNascimento = document.getElementById("campoDataNascimento");
        const elementoFotoPerfil = document.getElementById("fotoPerfil");
        const elementoCPF = document.getElementById("campoCPF");
        const elementoEndereco = document.getElementById("campoEndereco");
        const elementoNomeNegocio = document.getElementById("campoNomeNegocio");
        const elementoNicho = document.getElementById("campoNicho");
        const elementoModalidade = document.getElementById("campoModalidade");
        const elementoSite = document.getElementById("campoSite");
        const elementoMEI = document.getElementById("campoMEI");
        const elementoEmail = document.getElementById("campoEmail");
        const elementoTelefone = document.getElementById("campoTel");
        const elementoInstagram = document.getElementById("campoInsta");
        const elementoFacebook = document.getElementById("campoFace");
        
        if (elementoFotoPerfil !== null) {
            elementoFotoPerfil.src = testeDados["foto-perfil"];
        }
        if (elementoNome !== null) {
            elementoNome.textContent = testeDados["nome-completo"];
        }
        if (elementoDataNascimento !== null) {
            elementoDataNascimento.textContent = testeDados["data-nascimento"];
        }
        if (elementoCPF !== null) {
            elementoCPF.textContent = testeDados["cpf"];
        }
        if (elementoMEI !== null) {
            elementoMEI.textContent = testeDados.mei;
        }
        if (elementoEndereco !== null) {
            elementoEndereco.textContent = testeDados["endereco-completo"];
        }
        if (elementoEmail !== null) {
            elementoEmail.textContent = testeDados.email;
        }
        if (elementoNomeNegocio !== null) {
            elementoNomeNegocio.textContent = testeDados["nome-negocio"];
        }
        if (elementoNicho !== null) {
            elementoNicho.textContent = testeDados.nicho;
        }
        if (elementoModalidade !== null) 
        {
            elementoModalidade.textContent = capitalizarPrimeiraLetra(testeDados.modalidade); 
        }

        if (elementoSite !== null) {
            elementoSite.textContent = testeDados.site;
        }
        if (elementoInstagram !== null) {
            elementoInstagram.textContent = testeDados["perfil-instagram"];
        }
        if (elementoFacebook !== null) {
            elementoFacebook.textContent = testeDados["perfil-facebook"];
        }
        if (elementoTelefone !== null) {
            elementoTelefone.textContent = testeDados.telefone;
        }
        // Se necessário, adicione mais verificações para os outros campos

    } catch (error) {
        console.log(error);
    }
}


// função principal do arquivo
function MeusDados()
{

   

    return(
            <div>
                <div id="form">
                   
                    <div className="boxForm">

                        {/*Contém todo o formulário e seus campos*/}
                        <form id="formContainer">
                            <div id="formTitle1">
                                <h1>MEUS DADOS</h1>
                            </div>
                            <h1  id="formTitle">Meus Dados</h1>
                            
                            <fieldset id="fieldSetFoto">
                                <div id="separarCampos">
                                    {/*NOME COMPLETO*/}
                                    <div className="fieldType1">
                                        <span className="nameField">Nome Completo</span>
                                        <span className="conteudo" id="campoNome">Nome Completo ncncnnnnl</span>
                                    </div>

                                    {/*DATA DE NASCIMENTO*/}
                                    <div className="fieldType1">
                                        <span className="nameField">Data de Nascimento</span>
                                        <span className="conteudo" id="campoDataNascimento">00/00/0000</span>
                                    </div> 
                                   
                                </div>
                                 

                                <img src={ProfileImg} alt="Foto de perfil" id="fotoPerfil"/>
                            </fieldset>
                                
                            {/*Campo das informações pessoais*/}
                            <fieldset className = "fieldSetConfig">
                            

                                {/*CPF*/}
                                <div className="fieldType1">
                                        <span className="nameField">CPF</span>
                                        <span className="conteudo" id="campoCPF">000.000.000-00</span>
                                </div>

                                 {/*Endereço completo*/}
                                <div className="fieldType1">
                                        <span className="nameField">Endereço Completo</span>
                                        <span className="conteudo" id="campoEndereco">Rua/Avenida, nº 00 - Bairro, Cidade - UF</span>
                                </div>
   
                            </fieldset>
                            
                            {/*CAMPO DA SENHA*/}
                            <fieldset id="fieldSetNegocio" className=" corLaranja ">

                                {/*Nome do Negócio*/}
                                <div className="fieldType1">
                                    <span className="nameField">Nome do negócio</span>
                                    <span className="conteudo" id="campoNomeNegocio">Gastronomia</span>    
                                </div>

                                {/*Nicho*/}
                                <div className="fieldType1">
                                    <span className="nameField">Nicho do Trabalho</span>
                                    <span className="conteudo" id="campoNicho">Gastronomia</span>    
                                </div>
                                
                                {/*Modalidade de Serviço*/}
                                <div className="fieldType1">
                                    <span className="nameField">Modalidade de Serviço</span>
                                    <span className="conteudo" id="campoModalidade">Híbrido</span>    
                                </div>
                              
                                {/*Site do Negócio*/}
                                <div className="fieldType1">
                                    <span className="nameField">Site do Negócio</span>
                                    <span className="conteudo" id="campoSite">Não possui</span>    
                                </div>
                                
                                {/*MEI*/}
                                <div className="fieldType1">
                                    <span className="nameField">MEI</span>
                                    <span className="conteudo" id="campoMEI">000000000000000</span>    
                                </div>
                            </fieldset>

                            <fieldset id="fieldSetEmail">
                                 {/*Email Cadastrado*/}
                                 <div className="fieldType1">
                                    <span className="nameField">Email Cadastrado</span>
                                    <span className="conteudo" id="campoEmail">algumacoisa@gmail.com</span>    
                                </div>

                                 {/*Número de Contato*/}
                                 <div className="fieldType1">
                                    <span className="nameField">Número de Contato</span>
                                    <span className="conteudo" id="campoTel">(81) 40028922</span>    
                                </div>
                            </fieldset>
                            
                                <fieldset id="fieldSetIcon">
                                        
                                    {/*Instagram*/}
                                    <div className="fieldType2 iconCenter">
                                        <img src={InstagramIcon}  alt="Icone do instagram" />
                                        <span className="conteudo" id="campoInsta">@perfil do instagram</span>    
                                    </div>

                                        {/*Facebook*/}
                                    <div className="fieldType2 iconCenter">
                                        <img src={FacebookIcon}  alt="Icone do facebook"/>
                                        <span className="conteudo" id="campoFace">perfil do facebook</span>    
                                    </div>
                                    
                                </fieldset>

                                <div className="buttonsFormEdit">  
                                        <button id="editButton" type="button" onClick={() => {
                                         PegandoDados(); ToggleModal();
                                        }}>EDITAR DADOS</button>
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