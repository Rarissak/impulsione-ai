import React, {useState} from "react";
import './forgotPassword.css';
import BoxInfo from '../../../components/boxInfo/boxInfo';
import ModalChangePassworld from '../changePassword/changePassword'
import FundoSenha from '../../../assets/fundoSenha.svg';

import axios from "axios";
    

function gerarCodigoAleatorio(tamanho) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let codigo = '';

    for (let i = 0; i < tamanho; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        codigo += caracteres.charAt(indice);
    }

    return codigo;
}   

function EsqueciSenha()
{

    const [email, setEmail] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`http://localhost:8080/verificaUsuarios?email=${email}`);
            const dataText = await response.text();

            if (response.ok) {
                try {
                    const data = JSON.parse(dataText);
                    const nomeCompleto = data.nome;
                    const primeiroNome = nomeCompleto.split(' ')[0];
                    localStorage.setItem('nomeUsuario', primeiroNome);
                    alert("Código de verificação enviado ao seu e-mail. Digite-o para trocar sua senha!");

                    const codigoAleatorio = gerarCodigoAleatorio(7);
                    localStorage.setItem('codigoAcesso', codigoAleatorio);
                    localStorage.setItem('email', email);

                    console.log(localStorage.getItem('codigoAcesso'));

                    handleSubmitEmail({
                        ownerRef: "Suporte",
                        emailFrom: "impulsioneai@gmail.com",
                        emailTo: email,
                        subject: "Esqueceu a senha? Não se preocupe, estamos aqui para ajudar!",
                        text: `Olá ${primeiroNome}, Recebemos sua solicitação de recuperação de senha. Para redefinir sua senha e recuperar o acesso à sua conta, utilize o código de acesso: ${codigoAleatorio}. Se precisar de mais alguma assistência, não hesite em nos contatar!`
                    });

                    window.location.href = "/alterarSenha";

                } catch (error) {
                    console.error('Erro ao analisar JSON:', error);
                }
            } else {
                alert("E-mail não encontrado na nossa base de dados :( \nTente novamente!");
            }
        } catch (error) {
            console.error('Erro ao verificar usuário:', error);
        }
    };

    const handleSubmitEmail = async (dadosEmail) => {
        try {
            const resposta = await axios.post('http://localhost:8080/email', dadosEmail);
            console.log(resposta.data);
        } catch (erro) {
            console.error('Ocorreu um erro ao enviar o e-mail:', erro);
        }
    };

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };



    return(
        <body id="bodyDiferente">
            <div id='boxEsqueciSenha'>
                <div>
                <BoxInfo title={'Esqueci minha senha'} idBox='titleBoxBranco' idDivisor='divisorBranco'></BoxInfo>

                <form id="forgotBody" onSubmit={handleSubmit}>

                    <div className="forgotInput" >
                        <span className="nameInput">Insira o email cadastrado</span>
                        <input type="email" required value={email} onChange={(event) => setEmail(event.target.value)}/>
                        </div>

                        <div id="forgotButton">
                        <button id="forgotButtonSubmit" type="submit" >ENVIAR</button>
                    </div>
                </form>
                </div>
                <div>
                    <img id='imagemFundo' src={FundoSenha} alt='uma imagem com uma chave numa ponta e traços com asteristico representando o campo de senha e um cadeado na outra ponta'/>
                </div>
            </div>
        </body>
    );
}

export default EsqueciSenha;


// ESTÁ ABRINDO A TELA DE ALTERAR SENHA EM BAIXO

// import React, {useState} from "react";
// import './forgotPassword.css';
// import BoxInfo from '../../../components/boxInfo/boxInfo';
// import ModalChangePassworld from '../changePassword/changePassword'
// import FundoSenha from '../../../assets/fundoSenha.svg';

// function EsqueciSenha()
// {
//     const [showModalChange, setModalChange] = useState(false);
//     function AbrirModalChange(event)
//     {
//      event.preventDefault(); // impedindo o form de rederecionar a página
//       setModalChange(true);
      
//     }
//     return(
//         <body id="bodyDiferente">
//             <div id='boxEsqueciSenha'>
//                 <div>
//                 <BoxInfo title={'Esqueci minha senha'} idBox='titleBoxBranco' idModal='esqueciBox' idDivisor='divisorBranco'></BoxInfo>
//                 <form id="forgotBody" onSubmit={AbrirModalChange}>

//                     <div className="forgotInput" >
//                         <span className="nameInput">Insira o email cadastrado</span>
//                         <input type="email" required/>
//                         </div>

//                         <div id="forgotButton">
//                         <button id="forgotButtonSubmit" type="submit" >ENVIAR</button>

//                     </div>
//                 </form>
//                 {showModalChange &&  <ModalChangePassworld/>}
//                 </div>
//                 <div>
//                     <img id='imagemFundo' src={FundoSenha} alt='uma imagem com uma chave numa ponta e traços com asteristico representando o campo de senha e um cadeado na outra ponta'/>
//                 </div>
//             </div>
//         </body>
//     );
// }

// export default EsqueciSenha;
