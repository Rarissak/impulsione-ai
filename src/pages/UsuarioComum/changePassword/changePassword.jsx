import React,{useState} from "react";
import './changePassword.css';
import BoxInfo from "../../../components/boxInfo/boxInfo";


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
        <body id="bodyDiferente"> 
            <div id="changeCentralize" >

                <div id="changeContainer">
                    
                    <BoxInfo title={'Alterar Senha'} idBox={'titleBoxBranco'} idDivisor={'divisorBranco'}></BoxInfo>

                    <div id="changeBody">

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
                                {(senha !== '' && confirmarSenha !== '') && senha === confirmarSenha && (
                                    <span className="validInput">As senhas são compatíveis!</span>
                                )}
                            </span>
                        </div>

                        <div id="changeButton">
                            <button id="changeButtonSubmit">SALVAR</button>
                        </div>
                    </div>
                    
                </div>

            </div>
        </body>
    
    );
}

export default ChangePassword;


// ESTAVA COM PROBLEMAS

// import React,{useState} from "react";
// import './changePassword.css';
// import BoxInfoModal from "../../../components/boxInfo/boxInfo";


// function apenasNumeros(evt) {
//     // Obtém o código ASCII do caractere digitado
//     var charCode = (evt.which) ? evt.which : evt.keyCode;

//     // Verifica se o caractere digitado é uma letra
//     if (charCode >= 65 && charCode <= 90 || charCode >= 97 && charCode <= 122) {
//         // Cancela o evento de digitação (não insere o caractere no campo)
//         evt.preventDefault();
//     }
// }

// function ChangePassword()
// {
//     const [senha, setSenha] = useState('');
//     const [confirmarSenha, setConfirmarSenha] = useState('');

//     return(
//         <body id="bodyDiferente"> 
//             <div id="changeCentralize" >

//                 <div id="changeContainer">

                    
//                      {/*Titulo do componente login*/}
//                      <BoxInfoModal title={'Alterar Senha'} idBox={'titleBoxBranco'} idModal={'changeBox'} idDivisor={'divisorBranco'}></BoxInfoModal>

//                     <div id="changeBody">

//                         <div className="changeInput">
//                             <span className="nameInput">Digite o código de verificação</span>
//                             <div id="codCentralize">
//                                 <div className="codInput">
//                                     <input
//                                     type="text"
//                                     pattern="[0-9]*"
//                                     maxLength={6}
//                                     onKeyDown={apenasNumeros}
//                                     />
//                                 </div>   
//                             </div>
                           
//                         </div>
//                         <div className="changeInput">
//                             <span className="nameInput">Digite a Nova Senha</span>
//                             <input 
//                                 type="password"
//                                 value={confirmarSenha} 
//                                 onChange={(e) => setConfirmarSenha(e.target.value)} />
//                         </div>
//                         <div className="changeInput">
//                             <span className="nameInput">Reescreva a Senha</span>
//                             <input 
//                                 type="password"
//                                 value={senha} 
//                                 onChange={(e) => setSenha(e.target.value)} />
//                             <span>
//                                 {(senha !== '' && confirmarSenha !== '') && senha === confirmarSenha && (
//                                     <span className="validInput">As senhas são compatíveis!</span>
//                                 )}
//                             </span>
//                         </div>

//                         <div id="changeButton">
//                             <button id="changeButtonSubmit">SALVAR</button>
//                         </div>
//                     </div>
                    
//                 </div>

//             </div>
//         </body>
    
//     );
// }

// export default ChangePassword;
