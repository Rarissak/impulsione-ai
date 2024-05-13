import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './meusCartoes.css';
import Header from '../../../components/header/header.jsx';
import MenuLateral from '../../../components/menuLateral/menuLateral.jsx';
import Footer from '../../../components/footer/footer.jsx';
import BoxInfo from '../../../components/boxInfo/boxInfo.jsx';
import SelecionarCartao from '../../../components/selecionarCartao/selecionarCartao.jsx';
import axios from 'axios';

// >>>>>>> tela-meuPlano
function apenasNumeros(evt) {
    const charCode = evt.which ? evt.which : evt.keyCode;
    if (charCode >= 65 && charCode <= 90 || charCode >= 97 && charCode <= 122) {
        evt.preventDefault();
    }
}

const MeusCartoes = () => {
    const [cartoes, setCartoes] = useState([]);
    const [contadorCartoes, setContadorCartoes] = useState(0);
    const [numero, setNumero] = "**** **** **** ****";
    const [nome, setNome] = localStorage.getItem("nomeCartao");
    const [mesAno, setMesAno] = localStorage.getItem("dataValidade");
    const [cvv, setCvv] = "***";
    const [bandeira, setBandeira] = localStorage.getItem("bandeira");
    const [botaoSelecionado, setBotaoSelecionado] = useState(null);
    const [exibirAreaInput, setExibirAreaInput] = useState(false); // Estado para controlar a exibição da área de input dos cartões


    const handleSelecionarBotao = (id) => {
        setBotaoSelecionado(id);
    };
// >>>>>>> tela-meuPlano

    const handleAdicionarCartao = () => {
        if (cartoes.length >= 3) {
            alert('Limite máximo de 3 cartões atingido. Remova um cartão existente para adicionar um novo.');
            return;
        }


        if (!numero || !nome || !mesAno || !cvv || !bandeira) {
            alert('Preencha todos os campos para adicionar um novo cartão.');
            return;
        }
// >>>>>>> tela-meuPlano

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
        // // Limpar os campos ao cancelar
        // setNumero('');
        // setNome('');
        // setMesAno('');
        // setCvv('');
        // setBandeira('');
        // // Ocultar a área de input dos cartões ao cancelar
        setExibirAreaInput(false);
    };

    //Integração com o Back-End 


    //Listar cartões

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/cartao/' + localStorage.getItem('id'));
            setData(response.data);

            
            localStorage.setItem('dataValidade', response.data.dataValidade);
            localStorage.setItem('nomeCartao', response.data.nomeCartao);
            localStorage.setItem('bandeira', response.data.bandeira);
            handleAdicionarCartao();
        } catch (error) {
            setError(error);
        }
        setIsLoading(false);
        };

        fetchData();
    }, []);

    const [dadosCartao, setDadosCartao] = useState({
        numeroCartao:'',
        nomeCartao: '',
        dataValidade: '',
        cvv: '',
        bandeira: '',
        idEmpreendedor: localStorage.getItem("id")
    });

    const handleChange = (event) => {
        setDadosCartao({ ...dadosCartao, [event.target.name]: event.target.value });
    };

    const handleSubmitCartao = async (event) => {
        event.preventDefault();
        console.log(dadosCartao);
        try {
            const token = localStorage.getItem('token'); 
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            };
            const resposta = await axios.post('http://localhost:8080/cartao', dadosCartao, config);
            console.log(resposta.data);
            alert("Cartão cadastrado com sucesso!");
            
        } catch (erro) {
            console.error('Ocorreu um erro ao enviar o formulário:', erro);
            alert("Desculpe, ocorreu um erro no cadastro :(  Tente novamente mais tarde.");
        }
    };

    return (
        <>
            <Header />
            <MenuLateral></MenuLateral>

            <body id='body'>

                <div id="buttonCentralize">
                    <Link
                    to='/meusCartoes'>
                        <button className="buttons" id='buttonSelecionado'>Meus Cartões</button>
                    </Link>
                    <Link
                    to='/meuPlano'>
                        <button className="buttons" id=''>Meu Plano</button>
                    </Link>
                </div>

                

                <section id='boxInfos'>
                <div id="meusCartoesContainer">

                        <BoxInfo
                            title={"Meus Cartões"}
                            idBox={'titleBoxBranco'}
                            idDivisor={'divisorBranco'} 
                        />


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
                                <form id="meusCartoesBody" onSubmit={handleSubmitCartao}>
                                    <div id='meusCartoes'>
                                        <h1 id='titleCartao'>CADASTRE UM NOVO CARTÃO</h1>
                                        <div id="inputs_cartoes">
                                            <div className="meusCartoesInputs">
                                                <span className="nameInput">Número</span>
                                                <input type="text" name='numeroCartao' value={dadosCartao.numeroCartao} onChange={handleChange} onKeyDown={apenasNumeros} required size={38} id="inputNumero" />
                                            </div>
                                            <div className="meusCartoesInputs">
                                                <span className="nameInput">Nome</span>
                                                <input type="text" name='nomeCartao' value={dadosCartao.nomeCartao} onChange={handleChange} size={40} required id="inputNome" />
                                            </div>
                                            <div className="meusCartoesInputs">
                                                <span className="nameInput">Data</span>
                                                <input type="text" value={dadosCartao.dataValidade} onChange={handleChange} id="mesAno" name="dataValidade" placeholder="MM/YY" pattern="\d{2}/\d{2}" title="Digite o formato MM/AA (mês/ano)" required size={2} />
                                            </div>
                                            <div className="meusCartoesInputs">
                                                <span className="nameInput">CVV</span>
                                                <input type="number" name='cvv' value={dadosCartao.cvv} onChange={handleChange} min={0} max={999} required />
                                            </div>
                                            <div className="selectField2">
                                                <label htmlFor="bandeira">Bandeira</label>
                                                <select id="bandeira" value={dadosCartao.bandeira} onChange={handleChange} name="bandeira" className="meuPlanoInputs" required>
                                                    <option value="">Selecione</option>
                                                    <option value="Visa">Visa</option>
                                                    <option value="Mastercard">Mastercard</option>
                                                    <option value="American Express">American Express</option>
                                                    <option value="Discover">Discover</option>
                                                    <option value="Diners Club">Diners Club</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="meusCartoesButtons">
                                        <button type="button" onClick={handleCancelar} id="cancel">Cancelar</button>
                                        {/* <button type="submit" onClick={handleAdicionarCartao}>Salvar</button> Alterado para type="button" */}
                                        <button type="submit">Salvar</button> {/* Alterado para type="button" */}
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </section>
            </body>
            <Footer />
        </>
    );
}

export default MeusCartoes;
