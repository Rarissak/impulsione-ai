import React, { useState } from 'react';
import './meusCartoes.css';
import Header from '../../../components/header/header.jsx';
import MenuLateral from '../../../components/menuLateral/menuLateral.jsx';
import BarraLinkExterno from '../../../components/barraLinkExterno/BarraLinkExterno.jsx';
import Footer from '../../../components/footer/footer.jsx';
import BoxInfo from '../../../components/boxInfo/boxInfo.jsx';
import SelecionarCartao from '../../../components/selecionarCartao/selecionarCartao.jsx';

function apenasNumeros(evt) {
    const charCode = evt.which ? evt.which : evt.keyCode;
    if (charCode >= 65 && charCode <= 90 || charCode >= 97 && charCode <= 122) {
        evt.preventDefault();
    }
}

const MeusCartoes = () => {
    const [cartoes, setCartoes] = useState([]);
    const [contadorCartoes, setContadorCartoes] = useState(0);
    const [numero, setNumero] = useState('');
    const [nome, setNome] = useState('');
    const [mesAno, setMesAno] = useState('');
    const [cvv, setCvv] = useState('');
    const [bandeira, setBandeira] = useState('');
    const [botaoSelecionado, setBotaoSelecionado] = useState(null);
    const [exibirAreaInput, setExibirAreaInput] = useState(false); // Estado para controlar a exibição da área de input dos cartões

    const handleSelecionarBotao = (id) => {
        setBotaoSelecionado(id);
    };

    const handleAdicionarCartao = () => {
        if (cartoes.length >= 3) {
            alert('Limite máximo de 3 cartões atingido. Remova um cartão existente para adicionar um novo.');
            return;
        }

        if (!numero || !nome || !mesAno || !cvv || !bandeira) {
            alert('Preencha todos os campos para adicionar um novo cartão.');
            return;
        }

        const novoCartao = {
            id: contadorCartoes + 1,
            texto: numero, // Usando o número como texto para representar o cartão
            nome: nome,
            mesAno: mesAno,
            cvv: cvv,
            bandeira: bandeira,
        };

        setContadorCartoes(contadorCartoes + 1);
        setCartoes([...cartoes, novoCartao]);
        // Limpar os campos após adicionar o cartão
        setNumero('');
        setNome('');
        setMesAno('');
        setCvv('');
        setBandeira('');
        // Ocultar a área de input dos cartões após adicionar com sucesso
        setExibirAreaInput(false);
    };

    const handleExcluirCartao = (id) => {
        const novosCartoes = cartoes.filter((cartao) => cartao.id !== id);
        setCartoes(novosCartoes);

        // Desselecionar o botão se o cartão excluído for o botão selecionado
        if (id === botaoSelecionado) {
            setBotaoSelecionado(null);
        }
    };

    const handleExibirAreaInput = () => {
        setExibirAreaInput(true);
    };

    const handleCancelar = () => {
        // Limpar os campos ao cancelar
        setNumero('');
        setNome('');
        setMesAno('');
        setCvv('');
        setBandeira('');
        // Ocultar a área de input dos cartões ao cancelar
        setExibirAreaInput(false);
    };

    return (
        <>
            <Header />
            <MenuLateral></MenuLateral>

            <body id='body'>
                <nav className='linksExternos' id='barraLinks'>
                    <BarraLinkExterno
                        id='fundoRoxoClaro'
                        name={'MEUS CARTÕES'}
                        link={'/meusCartoes'} />

                    <BarraLinkExterno
                        id='fundoLaranja'
                        name={'MEU PLANO'}
                        link={'/meuPlano'} />
                </nav>

                <section id='boxInfos'>
                    <BoxInfo
                        title={"Meus Cartões"}
                        idBox={'titleBoxBranco'}
                        idDivisor={'divisorBranco'} />


                    <div className="boxInformationsC">
                        <div id="meusCartoesSelecao">
                            {cartoes.map((cartao) => (
                                <SelecionarCartao
                                    key={cartao.id}
                                    id={cartao.id}
                                    textoBotao={`${cartao.texto.substring(0, 4)} - ${cartao.nome}`}
                                    selecionado={botaoSelecionado === cartao.id}
                                    onClick={() => handleSelecionarBotao(cartao.id)}
                                    onTrashIconClick={() => handleExcluirCartao(cartao.id)}
                                />
                            ))}

                        </div>

                        <div className='novoCartao'>
                            {/* Botão "Cadastre um novo cartão" */}
                            {!exibirAreaInput && cartoes.length < 3 && (
                                <button type="button" className="novoCartaoButton" onClick={handleExibirAreaInput}>Cadastre um novo cartão</button>
                            )}
                        </div>

                        {/* Área de input dos cartões */}
                        {exibirAreaInput && (
                            <form id="meusCartoesBody">
                                <div id="centralizeSides">
                                    <div id="rightSide">
                                        <span className="meuPlanoTitulo">INSIRA DADOS DO CARTÃO</span>
                                        <div id="inputs">
                                            <div className="meuPlanoInputs">
                                                <span className="nameInput">Número</span>
                                                <input type="text" value={numero} onChange={(e) => setNumero(e.target.value)} onKeyDown={apenasNumeros} required size={38} id="inputNumero" />
                                            </div>
                                            <div className="meuPlanoInputs">
                                                <span className="nameInput">Nome</span>
                                                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} size={40} required id="inputNome" />
                                            </div>
                                            <div className="meuPlanoInputs">
                                                <span className="nameInput">Data</span>
                                                <input type="text" value={mesAno} onChange={(e) => setMesAno(e.target.value)} id="mesAno" name="mesAno" pattern="\d{2}/\d{2}" title="Digite o formato MM/AA (mês/ano)" required size={2} />
                                            </div>
                                            <div className="meuPlanoInputs">
                                                <span className="nameInput">CVV</span>
                                                <input type="number" value={cvv} onChange={(e) => setCvv(e.target.value)} min={0} max={999} required />
                                            </div>
                                            <div className="selectField2">
                                                <label htmlFor="bandeira">Bandeira</label>
                                                <select id="bandeira" value={bandeira} onChange={(e) => setBandeira(e.target.value)} name="bandeira" className="meuPlanoInputs" required>
                                                    <option value="Visa">Visa</option>
                                                    <option value="Mastercard">Mastercard</option>
                                                    <option value="American Express">American Express</option>
                                                    <option value="Discover">Discover</option>
                                                    <option value="Diners Club">Diners Club</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="meusCartoesButtons">
                                    <button type="button" onClick={handleCancelar} id="cancel">Cancelar</button>
                                    <button type="button" onClick={handleAdicionarCartao}>Salvar</button> {/* Alterado para type="button" */}
                                </div>
                            </form>
                        )}
                    </div>
                </section>
            </body>
            <Footer />
        </>
    );
}

export default MeusCartoes;
