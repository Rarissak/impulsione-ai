import React from 'react';
import './produto.css';
import '../../index.css';

function Produto({img, name, price}){
    return (
        <div id='produto'>
            <img alt='produto'src={img}></img>
            <div id='infoProduto'>
                <h3>{name}</h3>
                <p>R$ {price}</p>
            </div>
        </div> 
    )
}

export default Produto