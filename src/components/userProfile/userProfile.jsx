import React, { useState, useEffect } from "react";
import './userProfile.css';
import Heart from '../../assets/fullHeartIcon.svg';
import EmptyHeart from "../../assets/emptyHeartIcon.svg";
import FotoExemplo from "../../assets/fotoExemplo.jpg";
import TitleBorda from '../featured/titleBorda.jsx'
import Gato from '../../assets/gato.webp';
import Trufa from '../../assets/trufasDoSim.png'
// função principal do arquivo
import axiosInstance from '../../helper/axiosInstance.js';
import useAxios from '../../hook/useAxios.js';
import axios from "axios";

// Tornando os subcompenentes exportáveis solo
export function UserData()
{
    //Simulando como este subcomponente iria pegar as informações do usuário apartir do localStorage
    const [userInfo, setUserInfo] = useState(null);
   
     
    useEffect(() => {
         // Recuperando as informações do localStorage
         const storedUserInfo = localStorage.getItem('loginInfo'); 
         setUserInfo(JSON.parse(storedUserInfo));
         //.log(userInfo); // verificando se está sendo obtido
        
       }, []);

    return(
        // {/*Contém todo o formulário e seus campos*/}
         <div id="formContainer">
                            
                            
                            
         <div id="fieldSetFoto">
             <div id="formTitle1">
                 <h1>MEUS DADOS</h1>
             </div>
             {/*NOME COMPLETO*/}
              {userInfo ? (
                    <div id="fieldSetFoto">
                     <div className="fieldType1">
                 <span className="nameField">Nome Completo</span>
                 <span className="conteudo">{userInfo.nomeCompleto}</span>
             </div>
         
             <div id="duploField">
                 {/*DATA DE NASCIMENTO*/}
                 <div className="fieldType1">
                 <span className="nameField">Data de Nascimento</span>
                 <span className="conteudo">{userInfo.dataNascimento}</span>
             </div> 
                     {/*CPF*/}
             <div className="fieldType1">
                     <span className="nameField">CPF</span>
                     <span className="conteudo">{userInfo.cpf}</span>
             </div>
             </div>
             
             {/*Endereço completo*/}
             <div className="fieldType1">
                 <span className="nameField">Email Cadastrado</span>
                 <span className="conteudo">{userInfo.email}</span>    
             </div>
         </div>
                   
                ) : (
                    <p>Nenhuma informação do usuário encontrada.</p>
                )}
            
         <div className="buttonsFormEdit">  
             <button id="editButton">EDITAR DADOS</button>
         </div>
      </div>
     </div>
    );
}

export function Favoritado({imgHeart, favTitle, favContent})
{
    return(
        <div className="fieldType2">

            <img src={imgHeart} className="iconCoracao"/>

            <div className="favContainer">
                <span className="nameField">{favTitle}</span>
                <span className="conteudo">{favContent}</span>   
            </div> 

        </div>
    );
}
// Tornando os subcompenentes exportáveis solo
export function Vitrine()
{
    return(
        <div id="vitrineContainer">
            <div id="formTitle1">
                <h1>VITRINES FAVORITAS</h1>
            </div>

            {/*Função como tag favoritado*/}
            <Favoritado imgHeart={Heart} favTitle={'Trufas do Sim'} favContent={'GASTRONOMIA'}/>
            <Favoritado imgHeart={Heart} favTitle={'Nome do negócio'} favContent={'NICHO'}/>
            <Favoritado imgHeart={Heart} favTitle={'Trufas do Sim'} favContent={'GASTRONOMIA'}/>
            <Favoritado imgHeart={Heart} favTitle={'Trufas do Sim'} favContent={'GASTRONOMIA'}/>
            <Favoritado imgHeart={Heart} favTitle={'Trufas do Sim'} favContent={'GASTRONOMIA'}/>
        </div>
    );
}


export function Recomendado({imgReco, recoTitle, recoTipoEstabe, recoDesc, recoIcon})
{
        
    return(
      
            <div className="recomendado">
                 <img src={imgReco} className="recomendadoImg"/>
                 <div className="recomendadoText">
                     <span className="recomendadoTitle">{recoTitle}</span>
                     <span className="recomendadoTipoEstab">{recoTipoEstabe}</span>
                     <span className="recomendadoDesc">{recoDesc}</span>
                 </div>
                 <div className="recomendadoIcon">
                     <button>
                         <img src={recoIcon} />
                     </button>
                 </div>
                 
             </div>
          
       

        );
    

}
// Tornando os subcompenentes exportáveis solo
export function Recomendacoes()
{

    const [empreendimentoRecomendado, loading, error] = useAxios({
        axiosInstance: axiosInstance,
        method: 'GET',
        url:'verificaPlanosEmpreendedores'
    })

    
    // não mostrar nada 
    if(empreendimentoRecomendado === undefined)
    {
        return null;
    }

    return(
        <div>
            {/*Verificando se tem algo para ser mostrado*/}
        {empreendimentoRecomendado ? (
             <div id="recomendacoes">
             {/*Limitando o tamanho do titulo*/}
                <div id="recomTitle">
                    <TitleBorda title={'RECOMENDAÇÕES'}></TitleBorda>
                </div>

                <div id="recomendados">
                    {/* Mapeando os empreendedores recomendados para criar os componentes Recomendado */}
                    {empreendimentoRecomendado.length > 0 ? (
                        empreendimentoRecomendado.map((empreendedor, index) => (
                            <Recomendado
                            key={index}
                            imgReco={FotoExemplo}
                            recoTitle={empreendedor.nomeEmpreendimento}
                            recoTipoEstabe={empreendedor.nicho.nicho}
                            recoDesc={empreendedor.biografia}
                            recoIcon={EmptyHeart}
                            />
                        ))
                        ) : (
                            // tá com uma animaçãozinha de mudar a cor do texto para um pouco azulado
                            <div id="mensagemCarregamento">
                            
                                <h1 id="recomTitle">Contéudo está sendo carregado!</h1>
                            </div>
                        )}

                    </div>
                </div>
        )  : (
            <p>Nenhuma informação do usuário encontrada.</p>
        )}
    </div>
       
    );
    
}

// Componente Principal
function UserProfile()
{

    // Simulação de dados recebidos ao 'longar'
    const login = {
        nomeCompleto: "Fulano de Tal",
        dataNascimento: "12/11/1990",
        cpf: "123.456.783-00",
        email: "fulano@example.com"
      };

      
      localStorage.setItem('loginInfo', JSON.stringify(login));
    

    return(
            <div id="componente">
               <div id="corFundo">
                <div id="formUserPro">
                    
                    <div id="boxFormUserPro">

                         <UserData/>

                         <Vitrine/>

                    </div>

                </div>

                    {/*Recomendados */}
                    <Recomendacoes/>
               </div>   
            </div>
    );
}

export default UserProfile;