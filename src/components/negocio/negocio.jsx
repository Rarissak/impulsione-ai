import React from 'react';
import './negocio.css';
import '../../index.css';
import {Link} from "react-router-dom";
import Favoritar from '../../utils/favoritar';
import HeartLine from '../../assets/heratLineIcon.svg';

function Negocio({link, img, name, nicho, descricao}){
    return (
        <div id='negocio'>
            <Link to={link}>
                <img alt='negocio'src={img}></img>
                <div id='infoNegocio'>
                    <h3 id='name'>{name}</h3>
                    <p>{nicho}</p>
                    <p>{descricao}</p>
                </div>
            </Link>
            {/* <div id='botao-coracao'>
                <button id='favoritos' onClick={Favoritar}>
                    <img id='botaoFavoritar' src={HeartLine}/>
                </button>
            </div> */}
        </div> 
    )
}

export default Negocio