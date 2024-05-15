import React, { useState, useEffect } from "react";
import './meuPlano.css';
import BoxInfo from "../../../components/boxInfo/boxInfo.jsx";
import { Link } from "react-router-dom";
import Header from '../../../components/header/header.jsx';
import MenuLateral from '../../../components/menuLateral/menuLateral.jsx';
import Footer from '../../../components/footer/footer.jsx';
import SelecionarCartao from '../../../components/selecionarCartao/selecionarCartao.jsx';
import axios from "axios";

function MeuPlano() {
    // const [valorPlano, setValorPlano] = useState(0);

    // const handleSelectPlano = (event) => {
    //     const selectedPlano = event.target.value;
    //     // Definir o valor do plano baseado na opção selecionada
    //     switch (selectedPlano) {
    //         case "free":
    //             setValorPlano(0);
    //             break;
    //         case "bronze":
    //             setValorPlano(25.50);
    //             break;
    //         case "silver":
    //             setValorPlano(49.99);
    //             break;
    //         case "diamond":
    //             setValorPlano(99.99);
    //             break;
    //         default:
    //             setValorPlano(0);
    //             break;
    //     }
    // };

    //Listando o plano do usuário

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [planoAssinatura, setPlanoAssinatura] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/empreendedores/' + localStorage.getItem('id'));

                const planoAtual = response.data.planoAssinatura;
                setPlanoAssinatura(planoAtual);
                console.log(planoAtual);
                
            } catch (error) {
                setError(error);
            }
            setIsLoading(false);
        };
    
        fetchData();
    }, []);

     //Fim listando o plano do usuário

     //Listando planos do banco de dados


     const [planos, setPlanos] = useState([]);
     const [selectedPlano, setSelectedPlano] = useState(null);
     const [valorPlano, setValorPlano] = useState(0);
     const [descricaoPlano, setDescricaoPlano] = useState('');
     const [idPlano, setIdPlano] = useState(null);
 
     useEffect(() => {
         const fetchData = async () => {
             try {
                 const response = await axios.get('http://localhost:8080/assinaturas');
                 const planos = response.data;
                 setPlanos(planos);
             } catch (error) {
                 console.log(error);
             }
         };
 
         fetchData();
     }, []);

    //Fim listando planos do banco de dados


    //Atualizando dados no banco

    const handleSelectPlano = (event) => {
        const planoSelecionado = planos.find(plano => plano.nome === event.target.value);
        if (planoSelecionado) {
            setSelectedPlano(planoSelecionado);
            setValorPlano(planoSelecionado.preco);
            setDescricaoPlano(planoSelecionado.descricao);
            setIdPlano(planoSelecionado.id); // Captura o ID do plano
        } else {
            setSelectedPlano(null);
            setValorPlano(0);
            setDescricaoPlano('');
            setIdPlano(null);
        }
    };

    const handleUpdatePlano = async () => {
        
            try {
                const planoAssinaturaRecordDto = {
                    nome: selectedPlano.nome
                };

                const response = await axios.put('http://localhost:8080/empreendedoresPlano/' + localStorage.getItem('id'), planoAssinaturaRecordDto);
                
                if (response.ok){
                    alert('Plano atualizado com sucesso!');
                }
                
            } catch (error) {
                console.error('Erro ao atualizar o plano:', error);
                alert('Erro ao atualizar o plano.');
            }
        
    }

    // Fim atualizando dados no banco

    return (
        <>
            <Header />
            <MenuLateral />

            <body id="body">

                <div id="buttonCentralize">
                    <Link
                    to='/meusCartoes'>
                        <button className="buttons" id=''>Meus Cartões</button>
                    </Link>
                    <Link
                    to='/meuPlano'>
                        <button className="buttons" id='buttonSelecionado'>Meu Plano</button>
                    </Link>
                </div>

                <section id='boxInfos'>
                    <div id="meuPlanoContainer">

                        <BoxInfo title={'Meu Plano'} idBox='titleBoxBranco' idModal='meuPlanoBox' idDivisor='divisorBranco'></BoxInfo>

                        <form id="meuPlanoBody" onSubmit={handleUpdatePlano}>
                            
                            <div id="meuPlanoC">

                            <div id="escolherPlano">
                                <div className="selectField">
                                    <label htmlFor="membership" required>Escolher Novo Plano:</label>
                                    <select id="membership" onChange={handleSelectPlano} required>
                                        <option value="">Selecione</option>
                                        {planos.map(plano => (
                                            <option key={plano.nome} value={plano.nome}>
                                                {plano.nome}
                                            </option>
                                        ))}
                                    </select>
                                    <div id="planoValor">Valor: R$ {valorPlano.toFixed(2)}</div>
                                </div>
                                
                            </div>

                            <div id="selecionarCartao">
                                <h1 id="titleLaranja">{"Atual: " + `${planoAssinatura}`} </h1>
                                    
                            </div>
                                
                            </div>

                            <div id="secaoBeneficios">
                                <h1 id="titleLaranja">SEUS BENEFÍCIOS SERÃO:</h1>
                                <p>{descricaoPlano}</p>
                            </div>

                            <div id="meuPlanoButtons">
                            <button type="submit">Atualizar Plano</button>
                            </div>



                        </form>

                    </div>
                </section>

            </body>
            <Footer />
        </>
    );
}

export default MeuPlano;