import React from 'react';
import './depoimentos.css';
import StarIcon from '../../assets/starIcon.svg'

function Depoimentos({imagemSrc, nome , nicho , review, qtdEstrelas}) {
    const renderStars = () => {
                const stars = [];
                // Adiciona uma estrela para cada valor em qtdEstrela
                for (let i = 0; i < qtdEstrelas; i++) {
                    stars.push(<img key={i} src={StarIcon} alt="Estrela" />);
                }
                return stars;
            };
    
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
                {qtdEstrelas = renderStars()}
                </div>
            </div>
        </>
    );
  }

export default Depoimentos;


// function Depoimentos({ imagemSrc, nome, nicho, review, qtdEstrelas }) {
//     // Função para renderizar estrelas com base no valor de qtdEstrela
//     const renderStars = () => {
//         const stars = [];
//         // Adiciona uma estrela para cada valor em qtdEstrela
//         for (let i = 0; i < qtdEstrelas; i++) {
//             stars.push(<img key={i} src={StarIcon} alt="Estrela" />);
//         }
//         return stars;
//     };

//     return (
//         <>
//             <div className='caixa'>
//                 <div className='caixa_top'>
//                     {/* Não precisa de uma div só pra imagem */}
//                     <img src={imagemSrc} alt="Imagem" />
//                     <div className='caixa_top-info'>
//                         {/* É bom diferenciar e dizer que um é um h3 e o outro um p */}
//                         <h3>{nome}</h3>
//                         <p>{nicho}</p>
//                     </div>
//                 </div>
//                 {/* Sugestão: aqui poderia ser só uma tag <p></p> */}
//                 <p className='caixa_bottom'>
//                     {review}
//                 </p>
//                 <div id='estrelas'>
//                     {renderStars()}
//                 </div>
//             </div>
//         </>
//     );