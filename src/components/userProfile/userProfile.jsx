import React, { useState, useEffect } from "react";
import './userProfile.css';
import Heart from '../../assets/fullHeartIcon.svg';
import EmptyHeart from "../../assets/emptyHeartIcon.svg";
import NegocioLaranja from "../../assets/negocioLaranja.png";
import TitleBorda from '../featured/titleBorda.jsx'
// função principal do arquivo
import axiosInstance from '../../helper/axiosInstance.js';
import useAxios from '../../hook/useAxios.js';
import Destaque from '../../components/featured/destaque.jsx';

    const userId = localStorage.getItem('id'); 

    

// Tornando os subcompenentes exportáveis solo
export function UserData()
{

    const [usuario, loading, error] = useAxios({
        axiosInstance: axiosInstance,
        method: 'GET',
        url:`/usuarios/${userId}`
    })

    
    
    // não mostrar nada 
    if(usuario === undefined)
    {
        return null;
    }
    
    const formatDate = (isoString) => {
        const date = new Date(isoString);
        const day = String(date.getUTCDate()).padStart(2, '0');
        const month = String(date.getUTCMonth() + 1).padStart(2, '0');
        const year = date.getUTCFullYear();
        return `${day}/${month}/${year}`;
    };

    return(
        <div>
            {/*Verificando se tem algo para ser mostrado*/}
       
              <div id="formContainerDataUser">           
                <div id="fieldSetFoto">
                  <div id="formTitle1">
                      <h1>MEUS DADOS</h1>
                  </div>
                  {/*NOME COMPLETO*/}
                   {usuario ? (
                         <div id="fieldSetFoto">
                          <div className="fieldType1">
                      <span className="nameField">Nome Completo</span>
                      <span className="conteudo">{usuario?.nome}</span>
                  </div>
              
                  <div id="duploField">
                      {/*DATA DE NASCIMENTO*/}
                      <div className="fieldType1">
                      <span className="nameField">Data de Nascimento</span>
                      <span className="conteudo">{formatDate(usuario?.dataNascimento)}</span>
                  </div> 
                          {/*CPF*/}
                  <div className="fieldType1">
                          <span className="nameField">CPF</span>
                          <span className="conteudo">{usuario?.cpf}</span>
                  </div>
                  </div>
                  
                  {/*Endereço completo*/}
                  <div className="fieldType1">
                      <span className="nameField">Email Cadastrado</span>
                      <span className="conteudo">{usuario?.email}</span>    
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
     
    </div>
       
    );
}

function Favoritado({imgHeart, favTitle, favContent})
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
function Vitrine() {
    const [usuario, loading, error] = useAxios({
        axiosInstance: axiosInstance,
        method: 'GET',
        url: `/usuarios/${userId}`
    });

    if (usuario === undefined) {
        return null;
    }

    const empFavoritados = usuario.empreendedoresFavoritos;

    return (
        <div id="vitrineContainer">
            <div id="formTitle1">
                <h1>VITRINES FAVORITAS</h1>
            </div>

            <div id="Favoritados">
                {empFavoritados ? (
                    empFavoritados.length > 0 ? (
                        empFavoritados.map((empreendedor, index) => (
                            <Favoritado
                                key={index}
                                imgHeart={Heart}
                                favTitle={empreendedor?.nomeEmpreendimento}
                                favContent={empreendedor?.nicho?.nicho}
                            />
                        ))
                    ) : (
                        <div id="mensagemCarregamento">
                            <h1 id="recomTitle">Contéudo está sendo carregado!</h1>
                        </div>
                    )
                ) : (
                    <p>Nenhuma informação do usuário encontrada.</p>
                )}
            </div>
           
        </div>
    );
}



function Recomendado({imgReco, recoTitle, recoTipoEstabe, recoDesc, recoIcon})
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
function Recomendacoes()
{

    // const [empreendimentoRecomendado, loading, error] = useAxios({
    //     axiosInstance: axiosInstance,
    //     method: 'GET',
    //     url:'verificaPlanosEmpreendedores'
    // })

    const [empreendedoresDestaque, loading, error] = useAxios({
        axiosInstance: axiosInstance,
        method: 'GET',
        url: 'verificaPlanosEmpreendedores'
    })

    
    // não mostrar nada 
    if(empreendedoresDestaque === undefined)
    {
        return null;
    }
    
    console.log(empreendedoresDestaque);

    return(
        <div>
            {/*Verificando se tem algo para ser mostrado*/}
        {empreendedoresDestaque ? (
             <div id="recomendacoes">
             {/*Limitando o tamanho do titulo*/}
   
                <div id='destaques'>
                <TitleBorda title={'RECOMENDAÇÕES'}></TitleBorda>
                    <div id='linhaDestaques'>
                        {empreendedoresDestaque.slice(0, 5).map((empreendedor, index) => (
                            <Destaque
                                key={empreendedor.idEmpreededor}
                                idBox={'quadradoLaranja'}
                                path={'/vitrine/' + empreendedor.idEmpreededor}
                                foto={NegocioLaranja}
                                nome={empreendedor?.nomeEmpreendimento}
                                nicho={empreendedor?.nicho.nicho} 
                            />
                        ))}
                    </div>
                </div>
                </div>
        )  : (
            
            <p className="vitrineErro">Nenhuma informação do usuário encontrada.</p>
        )}
    </div>
       
    );
    
}

// Componente Principal
function UserProfile()
{

    return(
            <div id="componenteUserPro">
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