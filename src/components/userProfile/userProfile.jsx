import React, { useState, useEffect } from "react";
import './userProfile.css';
import Heart from '../../assets/fullHeartIcon.svg';
import EmptyHeart from "../../assets/emptyHeartIcon.svg";
import FotoExemplo from "../../assets/fotoExemplo.jpg";
import TitleBorda from '../featured/titleBorda.jsx'
// função principal do arquivo
import axiosInstance from '../../helper/axiosInstance.js';
import useAxios from '../../hook/useAxios.js';

// Tornando os subcompenentes exportáveis solo
export function UserData()
{

    const [userId, setUserId] = useState(null);
   

    useEffect(() => {
        const idUser = localStorage.getItem('id'); 
       
        setUserId(idUser);
       
      }, []);
     
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
       
              <div id="formContainer">           
                <div id="fieldSetFoto">
                  <div id="formTitle1">
                      <h1>MEUS DADOS</h1>
                  </div>
                  {/*NOME COMPLETO*/}
                   {usuario ? (
                         <div id="fieldSetFoto">
                          <div className="fieldType1">
                      <span className="nameField">Nome Completo</span>
                      <span className="conteudo">{usuario.nome}</span>
                  </div>
              
                  <div id="duploField">
                      {/*DATA DE NASCIMENTO*/}
                      <div className="fieldType1">
                      <span className="nameField">Data de Nascimento</span>
                      <span className="conteudo">{formatDate(usuario.dataNascimento)}</span>
                  </div> 
                          {/*CPF*/}
                  <div className="fieldType1">
                          <span className="nameField">CPF</span>
                          <span className="conteudo">{usuario.cpf}</span>
                  </div>
                  </div>
                  
                  {/*Endereço completo*/}
                  <div className="fieldType1">
                      <span className="nameField">Email Cadastrado</span>
                      <span className="conteudo">{usuario.email}</span>    
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
                            recoTitle={empreendedor?.nomeEmpreendimento}
                            recoTipoEstabe={empreendedor?.nicho.nicho}
                            recoDesc={empreendedor?.biografia}
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

    // Código de teste ¬¬ -> pega o primeiro usuário da lista retornada e coloca o id dele no localStorage
         // Para Ent o id ser usado.
     const [usuarios, loading1, error1] = useAxios({
        axiosInstance: axiosInstance,
        method: 'GET',
        url:`/usuarios`
    })
    
    console.log(usuarios);

    // Se o array retornado for nulo, retornar.
    if(usuarios.length === 0)
    {
        return null;
    }
    
    // descompactando o id. e transformando em string.
    localStorage.setItem('id', JSON.stringify(usuarios[0].idUsuario)); 

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