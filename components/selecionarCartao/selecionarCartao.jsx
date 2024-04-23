import React from 'react';
import './selecionarCartao.css';
import lixeiraDeReciclagem from '../../assets/lixeiraDeReciclagem.svg';

const SelecionarCartao = ({ textoBotao, selecionado, onClick, onTrashIconClick }) => {
  const handleSelecionar = () => {
    onClick();
  };

  const handleExcluir = () => {
    onTrashIconClick();
  };

  return (
    <div className="cartao">
      <button className={`botao ${selecionado ? 'selecionado' : ''}`} onClick={handleSelecionar}>
        <p>{textoBotao}</p>
        <input type="checkbox" checked={selecionado} readOnly />
      </button>
      <img src={lixeiraDeReciclagem} alt="Ícone de lixeira" className="icone-lixo" onClick={handleExcluir} />
    </div>
  );
};

export default SelecionarCartao;
