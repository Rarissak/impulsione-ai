import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './filtroPesquisa.css';
import '../../index.css';
import imgFiltro from '../../assets/filtro.svg';

const FiltroPesquisa = ({ nicho, tempoAtuacao, distanciaMin, distanciaMax, faixaPrecoMin, faixaPrecoMax }) => {
    const [selectedButtons, setSelectedButtons] = useState({
        nicho: null,
        tempoAtuacao: null
    });

    const [distancia, setDistancia] = useState(50);
    const [faixaPreco, setFaixaPreco] = useState(50);

    useEffect(() => {
        setDistancia(distanciaMin || 0);
    }, [distanciaMin]);

    useEffect(() => {
        setFaixaPreco(faixaPrecoMin || 0);
    }, [faixaPrecoMin]);

    const handleButtonClick = (category, buttonIndex) => {
        setSelectedButtons(prevState => ({
            ...prevState,
            [category]: prevState[category] === buttonIndex ? null : buttonIndex
        }));
    };

    const renderButtons = (category, buttonLabels) => (
        buttonLabels.map((label, index) => (
            <button
                key={index}
                className={selectedButtons[category] === index ? 'selected' : ''}
                onClick={() => handleButtonClick(category, index)}
            >
                {label}
            </button>
        ))
    );

    const handleDistanciaChange = (event) => setDistancia(parseInt(event.target.value));
    const handleFaixaPrecoChange = (event) => setFaixaPreco(parseInt(event.target.value));

    return (
        <div id='filtroPesquisa'>
            <div id='titulo'>
                <img src={imgFiltro} alt="Ícone" />
                <h2>FILTRO</h2>
            </div>
            <div id='nicho'>
                <h2>NICHO</h2>
                <div id='selecaoNicho'>
                    {renderButtons('nicho', nicho)}
                </div>
            </div>
            <div id='tempoAtuacao'>
                <h2>TEMPO DE ATUAÇÃO</h2>
                <div id='selecaoTempo'>
                    {renderButtons('tempoAtuacao', tempoAtuacao)}
                </div>
            </div>
            <div id='localizacao'>
                <h2>Localização por Raio KM</h2>
                <div className="inputWithSlider">
                    <input
                        type="range"
                        min={distanciaMin}
                        max={distanciaMax}
                        value={distancia}
                        onChange={handleDistanciaChange}
                    />
                    <p>{distancia}km</p>
                </div>
            </div>
            <div id='faixaPreco'>
                <h2>Faixa de preço</h2>
                <div className="inputWithSlider">
                    <input
                        type="range"
                        min={faixaPrecoMin}
                        max={faixaPrecoMax}
                        value={faixaPreco}
                        onChange={handleFaixaPrecoChange}
                    />
                    <p>R${faixaPreco}</p>
                </div>
            </div>
        </div>
    );
}

FiltroPesquisa.propTypes = {
    nicho: PropTypes.array.isRequired,
    tempoAtuacao: PropTypes.array.isRequired,
    distanciaMin: PropTypes.number,
    distanciaMax: PropTypes.number,
    faixaPrecoMin: PropTypes.number,
    faixaPrecoMax: PropTypes.number
};

export default FiltroPesquisa;
