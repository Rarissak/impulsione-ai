import React, { useState } from "react";
import './meuPlano.css';
import BoxInfo from "../../../components/boxInfo/boxInfo.jsx";
import { Link } from "react-router-dom";
import Header from '../../../components/header/header.jsx';
import MenuLateral from '../../../components/menuLateral/menuLateral.jsx';
import Footer from '../../../components/footer/footer.jsx';
import SelecionarCartao from '../../../components/selecionarCartao/selecionarCartao.jsx';

function MeuPlano() {
    const [valorPlano, setValorPlano] = useState(0);

    const handleSelectPlano = (event) => {
        const selectedPlano = event.target.value;
        // Definir o valor do plano baseado na opção selecionada
        switch (selectedPlano) {
            case "free":
                setValorPlano(0);
                break;
            case "bronze":
                setValorPlano(25.50);
                break;
            case "silver":
                setValorPlano(49.99);
                break;
            case "diamond":
                setValorPlano(99.99);
                break;
            default:
                setValorPlano(0);
                break;
        }
    };

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

                        <form id="meuPlanoBody">
                            
                            <div id="meuPlanoC">

                                <div id="escolherPlano">
                                        <div className="selectField">
                                            <label htmlFor="membership" required>Plano Escolhido</label>
                                            <select id="membership" onChange={handleSelectPlano} required>
                                                <option value="">Selecione</option>
                                                <option value="free">Gratuito</option>
                                                <option value="bronze">Bronze</option>
                                                <option value="silver">Silver</option>
                                                <option value="diamond">Diamante</option>
                                            </select>
                                            <div id="planoValor">Valor: R$ {valorPlano.toFixed(2)}</div>
                                        </div>
                                </div>

                                <div id="selecionarCartao">
                                    <h1 id="titleLaranja">SELECIONE O CARTÃO</h1>
                                    {/* aqui deve vir o codigo da seleção dos cartões */}
                                </div>
                                
                            </div>

                            <div id="secaoBeneficios">
                                <h1 id="titleLaranja">SEUS BENEFÍCIOS SERÃO:</h1>
                                <p>Acesso completo à Área do Parceiro;</p>
                                <p>Exposição dos seus produtos na Vitrine;</p>
                                <p>Anúncios do seu negócio na plataforma;</p>
                                <p>Seus produtos serão priorizados nas pesquisas dos usuários;</p>
                                <p>Seu negócio será exposto nos destaques;</p>
                                <p>Seu negócio será exposto nos destaques;</p>
                            </div>

                            <div id="meuPlanoButtons">
                                <button type="submit">ALTERAR PLANO</button>
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