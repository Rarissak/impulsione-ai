import React, { useState, useEffect } from "react";
import './userProfile.css';
import Heart from '../../assets/fullHeartIcon.svg';
import EmptyHeart from "../../assets/emptyHeartIcon.svg";
import FotoExemplo from "../../assets/fotoExemplo.jpg";
import TitleBorda from '../featured/titleBorda.jsx'
import Gato from '../../assets/gato.webp';
import Trufa from '../../assets/trufasDoSim.png'
// função principal do arquivo


// Tornando os subcompenentes exportáveis solo
export function UserData()
{
    return(
        // {/*Contém todo o formulário e seus campos*/}
         <div id="formContainer">
                            
                            
                            
         <div id="fieldSetFoto">
             <div id="formTitle1">
                 <h1>MEUS DADOS</h1>
             </div>
             {/*NOME COMPLETO*/}
             <div className="fieldType1">
                 <span className="nameField">Nome Completo</span>
                 <span className="conteudo">Nome Completo iodvncoicnoincncncncnnnnl</span>
             </div>
         
             <div id="duploField">
                 {/*DATA DE NASCIMENTO*/}
                 <div className="fieldType1">
                 <span className="nameField">Data de Nascimento</span>
                 <span className="conteudo">00/00/0000</span>
             </div> 
                     {/*CPF*/}
             <div className="fieldType1">
                     <span className="nameField">CPF</span>
                     <span className="conteudo">000.000.000-00</span>
             </div>
             </div>
             
             {/*Endereço completo*/}
             <div className="fieldType1">
                 <span className="nameField">Email Cadastrado</span>
                 <span className="conteudo">algumacoisa@gmail.com</span>    
             </div>
         </div>
         <div className="buttonsFormEdit">  
             <button id="editButton">EDITAR DADOS</button>
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
    return(
        <div id="recomendacoes">
                {/*Limitando o tamanho do titulo*/}
            <div id="recomTitle">
                <TitleBorda title={'RECOMENDAÇÕES'}></TitleBorda>
            </div>

            <div id="recomendados">
                <Recomendado imgReco={FotoExemplo} recoTitle={'Tapiocária'} recoTipoEstabe={'Barraca'} recoDesc={'Uma pequena loja em busca de novas vendas'} recoIcon={EmptyHeart}/>
                <Recomendado imgReco={Gato} recoTitle={'Tapiocária'} recoTipoEstabe={'Barraca'} recoDesc={'Uma pequena loja em busca de novas vendas, asdmasdaksd asjdkajsdkjasdk asjdkajsdkasd'} recoIcon={EmptyHeart}/>
                <Recomendado imgReco={Trufa} recoTitle={'Trufária'} recoTipoEstabe={'Barraca'} recoDesc={'Uma pequena loja em busca de novas vendas'} recoIcon={EmptyHeart}/>
                <Recomendado imgReco={FotoExemplo} recoTitle={'Tapiocária'} recoTipoEstabe={'Barraca'} recoDesc={'Uma pequena loja em busca de novas vendas'} recoIcon={EmptyHeart}/>
          
            </div>
        </div>
    );
    
}

// Componente Principal
function UserProfile()
{

    return(
            <div id="componente">
               <div id="corFundo">
                <div id="form">
                    
                    <div id="boxForm">

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