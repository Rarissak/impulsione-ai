import './home.css';
import '../../../index.css'
import Carrossel from '../../../components/carrossel/carrossel.jsx';
import Header from '../../../components/header/header.jsx';
import BarraLinkExterno from '../../../components/barraLinkExterno/BarraLinkExterno.jsx';
import Footer from '../../../components/footer/footer.jsx'
import BoxInfo from '../../../components/boxInfo/boxInfo.jsx'
import GrowIcon from '../../../assets/growIcon.svg';
import StoreIcon from '../../../assets/storeIcon.svg';
import PuzzleIcon from '../../../assets/puzzleIcon.svg';
import Informations from '../../../components/informations/informations.jsx';
import TitleBorda from '../../../components/featured/titleBorda.jsx'
import LogoColorida from '../../../assets/logoColorida.svg'
import Depoimentos from '../../../components/depoimentos/depoimentos.jsx'
import PerfilIcon from '../../../assets/profileIcon.svg'

import Destaque from '../../../components/featured/destaque.jsx';
import { Link } from 'react-router-dom';
import MenuLateral from '../../../components/menuLateral/menuLateral.jsx';

import axiosInstance from '../../../helper/axiosInstance.js';
import { useEffect, useState } from 'react';
import useAxios from '../../../hook/useAxios.js';

//Imagens do carrossel
import Artesanado from '../../../assets/artesanato.png'
import Educacao from '../../../assets/educacaoAula.png'
import Gastronomia from '../../../assets/gastronomiaTrufa.png'
import Saude01 from '../../../assets/saudeFisio.png'
import Saude02 from '../../../assets/saudeEstetica.png'
import Tecnologia from '../../../assets/tecnologia.png'
import Propaganda from '../../../assets/propagandaImpulsioneAi.png'

//Imagens detaques
import TrufasDoSim from '../../../assets/trufasDoSim.png';
import NegocioLaranja from '../../../assets/negocioLaranja.png';
import Artelane from '../../../assets/artelane.png';
import pitagoras from '../../../assets/pitagoras.png';
import Fisio from '../../../assets/fisioEmcasa.png';
import vintageVibe from '../../../assets/vintageVibe.png';
// import Destaque from '../../../components/featured/destaque.jsx';
// import { Link } from 'react-router-dom';
// import MenuLateral from '../../../components/menuLateral/menuLateral.jsx';
// import MeusDados from '../../../components/meusDados/MeusDados.jsx';

const id = localStorage.getItem('id');
const userUri = localStorage.getItem('uri');

;

function Home() {


    const [empreendedoresDestaque, loading, error] = useAxios({
        axiosInstance: axiosInstance,
        method: 'GET',
        url: 'empreendedores'
    })
    const [nichos, nichosloading, nichoError] = useAxios({
        axiosInstance: axiosInstance,
        method: 'GET',
        url: 'nichos'
    })
    const [depoimentos, depoimentosLoading, depoimentosError] = useAxios({
        axiosInstance: axiosInstance,
        method: 'GET',
        url: 'depoimento'
    })
    
    return (
        <>
            <Header></Header>
            <MenuLateral></MenuLateral>
            <body>
                <nav className='linksExternos' id='barraLinks'>
                    {nichos.map((nicho, index) => (
                        <BarraLinkExterno
                            key={nicho.id} // Usando o índice como chave, mas tenha cuidado com isso se os dados forem dinâmicos e mutáveis
                            id='fundoLaranja'
                            name={nicho?.nicho.toUpperCase()}
                            link={`/pesquisa/nicho/${nicho.nicho}`}
                        />
                    ))}
                </nav>

                <div className="carrossel">
                    <Carrossel
                        img1={Artesanado}
                        img2={Saude01}
                        img3={Gastronomia}
                        img4={Tecnologia}
                        img5={Saude02}
                        img6={Educacao}
                        img7={Propaganda}
                    // idDegrade={degardeClaro}
                    />
                    <div className='carrossel_texto'>
                        <img src={LogoColorida} alt="Logo" />
                        <p>Uma plataforma que busca criar o ambiente perfeito para impulsionar seu negócio aí onde você está. E ajuda a conectar empreendedores e compradores.</p>
                    </div>
                </div>

                <div id='boxInfosHome'>
                    <BoxInfo title={"NOSSO OBJETIVO"} idBox={'titleBoxRoxo'} idDivisor={'divisorRoxo'}></BoxInfo>
                    <div>
                        <div className="boxInformations">
                            <Informations icon={GrowIcon}
                                titulo={"Alavancar a carreira dos pequenos empreendedores"}
                                texto={"Oferecemos uma plataforma que ajuda os pequenos e microempreendedores a aumentar sua visibilidade no mercado, alcançando mais clientes e impulsionando suas vendas."}
                            ></Informations>
                            <Informations icon={StoreIcon}
                                titulo={"Promover o comércio local"}
                                texto={"Facilitando a conexão entre os empreendedores locais e os consumidores que desejam produtos e serviços de qualidade a preços acessíveis, incentivando o apoio ao comércio local e fortalecendo a economia da comunidade."}
                            ></Informations>
                            <Informations icon={PuzzleIcon}
                                titulo={"Fomentar parcerias e colaborações"}
                                texto={"Estabelecendo parcerias estratégicas, como a colaboração com o Sebrae para capacitar novos empreendedores, a fim de oferecer suporte adicional e recursos educacionais para o crescimento e desenvolvimento dos negócios."}
                            ></Informations>
                        </div>
                    </div>
                    <Link id='chamada' to='/areaParceiro'>
                        <p>Torne-se um parceiro! <strong>Conheça nossas vantagens</strong></p>
                    </Link>
                </div>

                <div id='destaques'>
                    <TitleBorda title={'Destaques'}></TitleBorda>
                    <div id='linhaDestaques'>
                        {empreendedoresDestaque.slice(0, 5).map((empreendedor, index) => (
                            <Destaque
                                key={empreendedor.idEmpreededor}
                                idBox={'quadradoLaranja'}
                                path={'/vitrine/' + empreendedor.idEmpreededor}
                                foto={NegocioLaranja}
                                nome={empreendedor?.nomeEmpreendimento}
                                nicho={empreendedor?.nicho.nicho} 
                            />
                        ))}
                    </div>
                </div>

                <div id='tituloDepoimentos'>
                    <h2>DEPOIMENTOS DOS PARCEIROS</h2>
                </div>
                <div id='depoimentos'>
                    {depoimentos.slice(0, 4).map((depoimento, index) => (
                        
                        <Depoimentos
                            key={index}
                            imagemSrc={PerfilIcon}
                            nome={depoimento?.empreendedor.nomeExibicao}
                            nicho={depoimento?.empreendedor.nicho.nicho}
                            review={depoimento?.depoimento}
                            qtdEstrelas={depoimento?.qtdEstrelas}
                        />
                    ))}
                </div>
            </body>
            <Footer></Footer>
        </>
    )
}

export default Home