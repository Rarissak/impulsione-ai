import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
// import '././././index.css';
import './vitrine.css';
import Header from '../../../components/header/header';
import Footer from '../../../components/footer/footer';
import Carrossel from '../../../components/carrossel/carrossel';
import BarraLinkExterno from '../../../components/barraLinkExterno/BarraLinkExterno';
import BoxInfo from '../../../components/boxInfo/boxInfo';

import Produto from '../../../components/produto/produto';
import Trufa from './image 1.jpg';
import SendMensage from '../../../assets/sendMensageIcon.svg';
import HeartLine from '../../../assets/heratLineIcon.svg';
import FacebookRoxo from '../../../assets/facebookRoxo.svg';
import InstagramRoxo from '../../../assets/instagramRoxo.svg';
import Favoritar from '../../../utils/favoritar';
import CopiarTexto from '../../../utils/copiarTexto';
import UserIcon from '../../../assets/userIcon.svg';

//Imagens do carrossel
import Artesanado from '../../../assets/artesanato.png'
import Educacao from '../../../assets/educacaoAula.png'
import Gastronomia from '../../../assets/gastronomiaTrufa.png'
import Saude01 from '../../../assets/saudeFisio.png'
import Saude02 from '../../../assets/saudeEstetica.png'
import Tecnologia from '../../../assets/tecnologia.png'
import Propaganda from '../../../assets/propagandaImpulsioneAi.png'
import MenuLateral from '../../../components/menuLateral/menuLateral';

function Vitrine(){

    
    return (
        <>
        <Header></Header>
        <MenuLateral></MenuLateral>
        <body>
            <div className='blocoRoxo'>

                <nav className='linksExternos' id='barraLinks'>
                    <BarraLinkExterno id='fundoRoxoClaro' name={'GASTRONOMIA'} link={'/pesquisa'}></BarraLinkExterno>
                    <BarraLinkExterno id='fundoRoxoClaro' name={'MODA'} link={''}></BarraLinkExterno>
                    <BarraLinkExterno id='fundoRoxoClaro' name={'ARTESANATO'} link={''}></BarraLinkExterno>
                    <BarraLinkExterno id='fundoRoxoClaro' name={'TECNOLOGIA'} link={''}></BarraLinkExterno>
                    <BarraLinkExterno id='fundoRoxoClaro' name={'EDUCAÇÃO'} link={''}></BarraLinkExterno>
                    <BarraLinkExterno id='fundoRoxoClaro' name={'SAÚDE'} link={''}></BarraLinkExterno>
                    <BarraLinkExterno id='fundoRoxoClaro' name={'ESTÉTICA'} link={''}></BarraLinkExterno>
                    <BarraLinkExterno id='fundoRoxoClaro' name={'DIVERSOS'} link={''}></BarraLinkExterno>
                </nav>

                <section className="bloco1">
                    <div id="infoBloco1">
                        <button id='favoritos' onClick={Favoritar}>
                            <img id='botaoFavoritar' src={HeartLine}/>
                        </button>
                        <h1 className='title'>Trufas do Sim</h1>
                        <p>Nosso propósito é juntar todos os recursos para nosso casamento, então além de você comer uma trufa deliciosa e feita com muito amor & oração, você ainda vai tá ajudando a investir no nosso dia do sim!!!</p>
                        <a href='#bloco2' className='buttonInfo'>VER PRODUTOS</a>
                    </div>
                    <Carrossel
                        img1={Artesanado}
                        img2={Saude01}
                        img3={Gastronomia}
                        img4={Tecnologia}
                        img5={Saude02}
                        img6={Educacao}
                        img7={Propaganda}
                    />
                </section>

                <section className="bloco2">
                    <div id="titleText">
                        <h2 id="textBranco">Nossos Produtos</h2>
                    </div>
                    <div id="gradeProdutos">
                        <Produto img={Trufa} name='Crocante' price={'5,00'}></Produto>
                        <Produto img={Trufa} name='Oreo' price={'5,00'}></Produto>
                        <Produto img={Trufa} name='Ninho' price={'5,00'}></Produto>
                        <Produto img={Trufa} name='Bem-Casado' price={'5,00'}></Produto>
                        <Produto img={Trufa} name='Maracuja' price={'5,00'}></Produto>
                        <Produto img={Trufa} name='Limão' price={'5,00'}></Produto>
                    </div>
                </section>
            </div>

            <section id="bloco3">
                <BoxInfo title={"Avaliações"} idBox={'titleBoxLaranja'} idDivisor={'divisorLaranja'}></BoxInfo>
                <div className='avaliacoes' id="boxLaranja">
                    <div className='boxAvaliacoes'>
                        <div className='caixaAvaliacao'>
                            <h3>Keylane Cardoso</h3>
                            <p>Fusce nibh nibh, scelerisque vitae libero in, fermentum condimentum ligula. Nullam lobortis ullamcorper sapien, quis euismod tellus porta non.</p>
                        </div>
                        <div className='caixaAvaliacao'>
                            <h3>Nome da Pessoa</h3>
                            <p>Fusce nibh nibh, scelerisque vitae libero in, fermentum condimentum ligula. Nullam lobortis ullamcorper sapien, quis euismod tellus porta non.</p>
                        </div>
                        <div className='caixaAvaliacao'>
                            <h3>Nome da Pessoa</h3>
                            <p>Fusce nibh nibh, scelerisque vitae libero in, fermentum condimentum ligula. Nullam lobortis ullamcorper sapien, quis euismod tellus porta non.</p>
                        </div>
                        <div className='caixaAvaliacao'>
                            <h3>Nome da Pessoa</h3>
                            <p>Fusce nibh nibh, scelerisque vitae libero in, fermentum condimentum ligula. Nullam lobortis ullamcorper sapien, quis euismod tellus porta non.</p>
                        </div>
                    </div>
                    <form id='inputAvaliacao'>
                        <input type='text'
                                placeholder="Insira sua avaliação"
                                placeholderTextColor="#8b9cb5"
                                maxLength={100}>        
                        </input>
                        <button type="submit">
                            <img src={SendMensage} alt='icon de enviar mensagem' />
                        </button>                    
                    </form>
                </div>
            </section>
            <section id='bloco4'>
                <div id='conteudoBloco'>
                    <h1 className='title' id='tituloBloco4'>INFORMAÇÕES</h1>
                    <div id='colunas'>
                        <div className='coluna' id='fotoNome'>
                            <img id='fotoPerfil' src={UserIcon} alt='Iconde de perfil'/>
                            <div id='fotoTexto'>
                                <h1>Trusfas do Sim</h1>
                                <div id='colunaTexto'>
                                    <h5>Por:</h5>
                                    <h4>Rarissa</h4>
                                </div>
                            </div>
                        </div>
                        
                        <div className='coluna'>
                            <div>
                                <h2>MODALIDADE DO SERVIÇO</h2>
                                <h4>Presencial</h4>
                            </div>
                            <h3>Recife e Região Metropolitana</h3>
                        </div>
                        <div className='coluna'>
                            <div className='contatos'>
                                <h4>EMAIL DE CONTATO</h4>
                                <div className='contato'>
                                    <CopiarTexto texto='atrufasdosism@gmail.com'/>
                                    <p>atrufasdosism@gmail.com</p>
                                </div>
                            </div>
                            <div className='contatos'>
                                <h4>NÚMERO DE CONTATO</h4>
                                <div className='contato'>
                                    <CopiarTexto texto='+55 81 4002-8922'/>
                                    <p>+55 81 4002-8922</p>
                                </div>
                            </div>
                            <a className='redeSocial' href='https://www.instagram.com/trufasdosim_/' target="_blank">
                                <img src={InstagramRoxo} alt='icon do instagram'/>
                                <p>Perfil Do Instagram</p>
                            </a>
                            <a className='redeSocial' href='https://www.instagram.com/trufasdosim_/' target="_blank">
                                <img src={FacebookRoxo} alt='icon do facebook'/>
                                <p>Perfil Do Facebook</p>
                            </a>
                        </div>
                    </div>
                    

                </div>
            </section>
        </body>
        <Footer></Footer>
        </>
    )
}

export default Vitrine;