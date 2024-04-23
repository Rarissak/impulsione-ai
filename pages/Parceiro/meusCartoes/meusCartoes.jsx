import React, { useState } from 'react';
import './meusCartoes.css';
import '../../../index.css';
import SelecionarCartao from '../../../components/selecionarCartao/selecionarCartao.jsx';

const MeusCartoes = () => {
  const [cartoes, setCartoes] = useState([]);
  const [contadorCartoes, setContadorCartoes] = useState(0);
  const [botaoSelecionado, setBotaoSelecionado] = useState(null);

  const handleSelecionarBotao = (id) => {
    // Verifica se o botão atualmente clicado já está selecionado
    if (id === botaoSelecionado) {
      return;
    }

    // Atualiza o estado de seleção do botão atual
    setBotaoSelecionado(id);
  };

  const handleAdicionarCartao = () => {
    const novoCartao = {
      id: contadorCartoes + 1,
      texto: `Novo Cartão ${contadorCartoes + 1}`,
    };

    setContadorCartoes(contadorCartoes + 1);
    setCartoes([...cartoes, novoCartao]);
  };

  const handleExcluirCartao = (id) => {
    const novosCartoes = cartoes.filter((cartao) => cartao.id !== id);
    setCartoes(novosCartoes);

    // Desselecionar o botão se o cartão excluído for o botão selecionado
    if (id === botaoSelecionado) {
      setBotaoSelecionado(null);
    }
  };

  return (
    <>
      <div id="caixaPrincipal">
        <div id="titulo">
          <h1>Meus Cartões</h1>
        </div>
        {cartoes.map((cartao) => (
          <SelecionarCartao
            key={cartao.id}
            id={cartao.id}
            textoBotao={cartao.texto}
            selecionado={botaoSelecionado === cartao.id}
            onClick={() => handleSelecionarBotao(cartao.id)}
            onTrashIconClick={() => handleExcluirCartao(cartao.id)}
          />
        ))}
        <button onClick={handleAdicionarCartao}>Adicionar Cartão</button>
      </div>
    </>
  );
};

export default MeusCartoes;
