
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
    
    
    async function postLogin(){
        await axiosInstanceLogin.post("/login",{
             email: email,
            senha: senha
            
        }).then((res) =>{
            localStorage.setItem('id',res.data.idUsuario)
            localStorage.setItem('token',res.data.token)
            
        }).catch((error) => {
           
            console.log(error);
        })
    }
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
   

    // Mostrando O modal de esqueci a senha
    const [mostrar, setMostrar] = useState(false);
    // Ativando modal
    const handleComponentForgetPassword = () => {
        setMostrar(true);
       if (mostrar) {
        setMostrar(false)
       }
    };

    return(
        // Fundo do componente, que será responsável por fixar o componente na tela.
        <div id="back" className="hide">
            
            {/*Div responsável pela centralização do container do login e adição da cor do fundo*/}
            <div id="loginCentralize" className="hide" >

                 {/*Div que vai conter todos os elementos principais do login. Ex: inputs de email e senha*/}
                <div id="loginContainer">

                    {/*Botão de fechar o modal*/}
                    <div>
                         {/*Já está com a função de fechar o modal*/}
                        <button id = "closeModal" onClick={ToggleModal}>
                            <img src={iconModalClose} alt="icone para fechar o modal, tem formato de X"/>
                        </button>
                    </div>
                    
                     {/*Titulo do componente login*/}
                   
                    <BoxInfo title={'Login'} idBox='titleBoxBranco' idDivisor='divisorBranco'></BoxInfo>

                     {/*Div contendo os elementos do login*/}
                    <div id="loginBody">

                         {/*Input de email*/}
                        <div className="loginInputs">
                            <span className="nameInput">Usuário</span>
                            <input type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}/>
                        </div>

                         {/*Input Senha*/}
                        <div className="loginInputs">
                            <span className="nameInput">Senha</span>
                            <input type="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}/>
                            <span className="forgotPassword" onClick={handleComponentForgetPassword}>Esqueci minha senha</span> 
                        </div>
                        { mostrar && <ModalForgetPassword/>}

                         {/*Botões de logar e ir para cadastro*/}
                        <div id="loginButtons">
                            <button id="loginButtonSignIn" onClick={postLogin}>ENTRAR</button>
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