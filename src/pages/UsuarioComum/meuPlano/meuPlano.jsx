import React from "react";
import './meuPlano.css';
import BoxInfo from "../../../components/boxInfo/boxInfo.jsx";
import { Link } from "react-router-dom";
import Header from '../../../components/header/header.jsx';
import MenuLateral from '../../../components/menuLateral/menuLateral.jsx';
import BarraLinkExterno from '../../../components/barraLinkExterno/BarraLinkExterno.jsx';
import Footer from '../../../components/footer/footer.jsx';

function MeuPlano() {
    return (
        <>
            <Header />
            <MenuLateral />

            <body id="body">

                <nav className='linksExternos' id='barraLinks'>
                    <BarraLinkExterno
                        id='fundoLaranja'
                        name={'MEUS CARTÕES'}
                        link={'/meusCartoes'} />

                    <BarraLinkExterno
                        id='fundoRoxoClaro'
                        name={'MEU PLANO'}
                        link={'/meuPlano'} />
                </nav>

                <div id="loginCentralize">

                    <div id="meuPlanoContainer">

                        <BoxInfo title={'Meu Plano'} idBox='titleBoxBranco' idModal='meuPlanoBox' idDivisor='divisorBranco'></BoxInfo>
                        <form id="meuPlanoBody">

                            <div id="centralizeSides">
                                <div id="leftSide">
                                    {/* PLANO ESCOLHIDO */}
                                    <div className="selectField">
                                        <label htmlFor="membership" required>Plano Escolhido</label>
                                        <select id="membership" required>
                                            <option value="">Selecione</option>
                                            <option value="free">Gratuito</option>
                                            <option value="bronze">Bronze</option>
                                            <option value="silver">Silver</option>
                                            <option value="diamond">Diamante</option>
                                        </select>
                                        <div id="planoValor">Valor: R$ 0,00</div>
                                    </div>
                                </div>
                            </div>

                            <div id="meuPlanoButtons">
                                <button type="submit">ALTERAR PLANO</button>
                            </div>

                        </form>

                    </div>

                </div>
            </body>
            <Footer />
        </>
    );
}

export default MeuPlano;
