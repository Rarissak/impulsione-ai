import React from 'react';
import './depoimentos.css';
import StarIcon from '../../assets/starIcon.svg'

function Depoimentos({imagemSrc, nome , nicho , review}) {
    return (
        <>
            <div className='caixa'>
                <div className='caixa_top'>
                    {/* Não precisa de uma div só pra imagem */}
                    <img src={imagemSrc} alt="Imagem" />
                    <div className='caixa_top-info'>
                        {/* É bom diferenciar e dizer que um é um h3 e o outro um p */}
                        <h3>{nome}</h3>
                        <p>{nicho}</p>
                    </div>
                </div>
                {/* Sugestão: aqui poderia ser só uma tag <p></p> */}
                <p className='caixa_bottom'>
                    {review}
                </p>
                <div id='estrelas'>
                    <img src={StarIcon}/>
                    <img src={StarIcon}/>
                    <img src={StarIcon}/>
                    <img src={StarIcon}/>
                    <img src={StarIcon}/>
                </div>
            </div>
        </>
    );
  }

export default Depoimentos;