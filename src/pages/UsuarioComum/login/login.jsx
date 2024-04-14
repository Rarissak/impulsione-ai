import React,{useState} from "react";
import './login.css';
import { axiosInstanceLogin } from "../../../helper/axiosInstance"; 
import ModalForgetPassword, {ToggleModalForgot} from "../forgotPassword/forgotPassword";
// Importando o icon do botão de fechar o modal.
import iconModalClose from '../../../assets/iconLoginModalClose.svg';
import BoxInfo from "../../../components/boxInfo/boxInfo";
import { Link } from "react-router-dom";






 {/*Função de fechar o modal. Ele vai adicionar a classe hide na div loginCentralize, 
que vai fazer a div sumir e aparecer, quando o botão escolhido for clicado.*/}
export function ToggleModal()
{
    const loginCentralize = document.querySelector("#loginCentralize");
    loginCentralize.classList.toggle("hide");
    const back = document.querySelector("#back");
    back.classList.toggle("hide");
}


function Login()
{   
    
    
    async function handleLogin(){
        await axiosInstanceLogin.post("/login",{
             email: email,
            senha: senha
            
        }).then((res) =>{
            localStorage.setItem('id',res.data.idUsuario)
            localStorage.setItem('token',res.data.token)
            localStorage.setItem('uri', res.data.tipoUsuarioUri)
            
        }).catch((error) => {
           
            console.log(error);
        })
    }
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
   

    return(
        <div id="back" className="hide">
            
            <div id="loginCentralize" className="hide" >

                <div id="loginContainer">

                    <div>
                        <button id = "closeModal" onClick={ToggleModal}>
                            <img src={iconModalClose} alt="icone para fechar o modal, tem formato de X"/>
                        </button>
                    </div>
                                       
                    {/* <BoxInfo title={'Login'} idBox='titleBoxBranco' idModal='loginBox' idDivisor='divisorBranco'></BoxInfo> */}
                    <BoxInfo title={'Login'} idBox='titleBoxBranco' idDivisor='divisorBranco'></BoxInfo>
                    <div id="loginBody">

                        <div className="loginInputs">
                            <span className="nameInput">Usuário</span>
                            <input type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}/>
                        </div>

                        <div className="loginInputs">
                            <span className="nameInput">Senha</span>
                            <input type="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}/>
                            <span className="forgotPassword" onClick={handleComponentForgetPassword}>Esqueci minha senha</span> 
                        </div>
                        
                        <div id="loginButtons">
                            <button id="loginButtonSignIn" onClick={handleLogin}>ENTRAR</button>
                            <Link id="loginButtonSignUp" to='/cadastroUsuario'
                                >Não possuo cadastro
                            </Link>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    );
}

export default Login;