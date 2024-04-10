import React, { useState, useEffect } from "react";
import './formUser.css';
import BoxInfo from '../../../../components/boxInfo/boxInfo';
import axios from "axios";

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
function FormUser()
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


    const [dados, setDadosUsuario] = useState({
        nome:'',
        dataNascimento: '',
        cpf: '',
        senha: '',
        email: '',
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const resposta = await axios.post('http://localhost:8080/usuarios', dados);
            console.log(resposta.data);

            
            localStorage.setItem('email', dados.email);

            
            handleSubmitEmail();

            CadastroRealizado();
        
        } catch (erro) {
            console.error('Ocorreu um erro ao enviar o formulário:', erro);
            alert("Desculpe, ocorreu um erro no cadastro :(  Tente novamente mais tarde.");
        }
    };

    const handleChange = (event) => {
        setDadosUsuario({ ...dados, [event.target.name]: event.target.value });
    };

    const [dadosEmail, setDadosEmail] = useState({
        ownerRef: "Suporte",
        emailFrom: "impulsioneai@gmail.com",
        emailTo: localStorage.getItem('email'),
        subject: "Bem-vindo (a) ao ImpulsioneAI",
        text: "Bem-vindo(a) ao ImpulsioneAi! Estamos muito felizes em tê-lo(a) conosco! A nossa plataforma foi criada para lhe ajudar na divulgação do seu trabalho. Qualquer dúvida é só entrar em contato!"
    });

    const handleSubmitEmail = async () => {
        event.preventDefault();

        try {
            const resposta = await axios.post('http://localhost:8080/email', dadosEmail);
            console.log(resposta.data);
            
        } catch (erro) {
            console.error('Ocorreu um erro ao enviar o e-mail:', erro);
        }
    };

    const handleChangeEmail = (event) => {
        setDadosEmail({ ...dadosEmail, [event.target.name]: event.target.value });
    };



    return(
            <div>
                <div id="form">
                    <BoxInfo title={'Cadastro'} idBox='titleBoxBranco' idDivisor='divisorBranco'></BoxInfo>

                    <div className="boxForm">

                        {/*Contém todo o formulário e seus campos*/}
                        <form id="formContainer" onSubmit={handleSubmit}>

                            {/*Campo das informações pessoais*/}
                            <fieldset className = "fieldSetConfig">
                                {/*NOME COMPLETO*/}
                                <div className="fieldType1">
                                    <span className="nameField">Nome Completo</span>
                                    <input 
                                        type="text" 
                                        size={43} 
                                        required
                                        name="nome"
                                        value={dados.nome}
                                        onChange={handleChange}/>
                                </div>

                                {/*DATA DE NASCIMENTO*/}
                                <div className="fieldType1">
                                    <span className="nameField">Data de Nascimento</span>
                                    <input 
                                        type="date"
                                        size={6}
                                        required
                                        name="dataNascimento"
                                        value={dados.dataNascimento}
                                        onChange={handleChange}/>
                                </div> 

                                {/*CPF*/}
                                <div className="fieldTypeEspecial, textCentralize">
                                    <div id="centralizeCpfField">
                                        <span className="nameField">CPF</span>
                                        <div className="especialCase">
                                            <input 
                                                type="text"
                                                pattern="^(\d{3}\.\d{3}\.\d{3}-\d{2}|\d{11})$"   
                                                maxLength="14" 
                                                required
                                                // value={cpf}
                                                // onChange={handleCpfChange}
                                                size={15}
                                                placeholder="123.123.123-12"
                                                onKeyDown={apenasNumeros}
                                                name="cpf"
                                                value={dados.cpf}
                                                onChange={handleChange}/> 
                                                    
                                            {/*Se o cpf for inválido está parte vai ser mostrada em baixo do input do campo cpf*/}
                                            <span className="invalidInput">
                                                {cpf !== '' && !cpfValido && <span className="error">CPF inválido</span>}
                                            </span>  
                                        </div>
                                    </div>  
                                </div>
                                    
                                {/*EMAIL*/}
                                <div className="fieldType2">
                                    <span className="nameField">Email</span>
                                    <div id="ajustandoMensagemInvalida"l>
                                        <input 
                                            type="email"
                                            required
                                            size={29}
                                            // value={email}
                                            // onChange={handleEmailChange}/>
                                            name="email"
                                            value={dados.email}
                                            onChange={handleChange}/>

                                        {/*Mensagem de error posicionada para aparecer...*/}
                                        <span className="invalidInput">
                                            {email !== '' && !emailValido && <span className="error">Email inválido</span>}
                                        </span>
                                    </div>
                                    
                                </div>
                                
                            </fieldset>
                            
                            {/*CAMPO DA SENHA*/}
                            <fieldset className="fieldSetConfig">

                                {/*SENHA*/}
                                <div className="fieldType1">
                                    <span className="nameField">Senha</span>
                                    <input 
                                    type="password"
                                    required
                                    size={27}
                                    // value={confirmarSenha} 
                                    // onChange={(e) => setConfirmarSenha(e.target.value)} 
                                    minLength={8}
                                    name="senha"
                                    value={dados.senha}
                                    onChange={handleChange}/>
                                </div>

                                {/*CONFIRMAR SENHA*/}
                                <div className="fieldType1">
                                    <span className="nameField">Reescreva a Senha</span>
                                    <input 
                                    type="password"
                                    required
                                    size={28}
                                    value={senha} 
                                    onChange={(e) =>{ setSenha(e.target.value);}}
                                    minLength={8}/>

                                    {/*Se ambas as senhas forem compatíveis, vai ser mostrado que os campos são válidos*/}
                                    <span>
                                        {/* Exibir mensagem de sucesso se as senhas forem compatíveis */}
                                        {(senha !== '' && confirmarSenha !== '') && senha === confirmarSenha && (
                                        <span className="validInput">As senhas são compatíveis!</span>
                                        )}
                                    </span>
                                    
                                </div>

                                {/*Orientação de preenchimento de senha*/}
                                <div id="passwordRequery">
                                    <span>*Mínimo de 8 caracteres</span>
                                    <span>*Letras minusculas</span>
                                    <span>*Letras Maiúsculas</span>
                                    <span>*Números</span>
                                    <span>*Caracteres especiais</span>
                                </div>
                                
                                {/*Botões do cadastro*/}
                                <div id="buttonsForm">
                                    <button id="cadastradoButton">JÁ POSSUO CADASTRO</button>
                                    <button id="cadastrarButton" type="submit" >CADASTRAR</button>
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

export default FormUser;