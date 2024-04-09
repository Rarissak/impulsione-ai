import React, {useState} from "react";
import './forgotPassword.css';
import BoxInfo from '../../../components/boxInfo/boxInfo';
import ModalChangePassworld from '../changePassword/changePassword'
import FundoSenha from '../../../assets/fundoSenha.svg';

function EsqueciSenha()
{
    return(
        <body id="bodyDiferente">
            <div id='boxEsqueciSenha'>
                <div>
                <BoxInfo title={'Esqueci minha senha'} idBox='titleBoxBranco' idDivisor='divisorBranco'></BoxInfo>

                <form id="forgotBody">

                    <div className="forgotInput" >
                        <span className="nameInput">Insira o email cadastrado</span>
                        <input type="email" required/>
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