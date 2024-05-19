import axios from 'axios';
import React, { useState, useEffect } from "react";
import './vitrine.css';
import Header from '../../../components/header/header';
import Footer from '../../../components/footer/footer';
import Carrossel from '../../../components/carrossel/carrossel';
import BarraLinkExterno from '../../../components/barraLinkExterno/BarraLinkExterno';
import BoxInfo from '../../../components/boxInfo/boxInfo';
import Produto from '../../../components/produto/produto';
import SendMensage from '../../../assets/sendMensageIcon.svg';
import HeartLine from '../../../assets/heratLineIcon.svg';
import FacebookRoxo from '../../../assets/facebookRoxo.svg';
import InstagramRoxo from '../../../assets/instagramRoxo.svg';
import Favoritar from '../../../utils/favoritar';
import CopiarTexto from '../../../utils/copiarTexto';
import UserIcon from '../../../assets/userIcon.svg';

// Imagens do carrossel
import Artesanado from '../../../assets/artesanato.png';
import Educacao from '../../../assets/educacaoAula.png';
import Gastronomia from '../../../assets/gastronomiaTrufa.png';
import Saude01 from '../../../assets/saudeFisio.png';
import Saude02 from '../../../assets/saudeEstetica.png';
import Tecnologia from '../../../assets/tecnologia.png';
import Propaganda from '../../../assets/propagandaImpulsioneAi.png';
import MenuLateral from '../../../components/menuLateral/menuLateral';
import useAxios, { useAxiosWithDependecies } from '../../../hook/useAxios';
import axiosInstance from '../../../helper/axiosInstance';
import { useParams } from 'react-router-dom';

function Vitrine() {

    const {idEmpreendedor} = useParams();
    const usuarioLogado = {
        token: localStorage.getItem("token"),
        id: localStorage.getItem('id'),
        uri: localStorage.getItem('uri')
    }
 
    const [nichos, nichosloading, nichoError] = useAxios({
        axiosInstance: axiosInstance,
        method: 'GET',
        url: 'nichos'
    })
    const [empreendedor, empreendedoresLoading, empreendedorError] = useAxiosWithDependecies({
        axiosInstance:axiosInstance,
        method:"GET",
        url:"/empreendedores/" + idEmpreendedor
    },[idEmpreendedor])

    if (idEmpreendedor === undefined && usuarioLogado.uri == "empreendedores") {
        window.location.href = "/vitrine/" + usuarioLogado.id
    }else if(idEmpreendedor === undefined)
    {
        window.location.href ="/"
    }
   

    if (empreendedoresLoading) {
        return <div>Loading...</div>;
    }

    if (empreendedorError) {
        return <div>Error: {empreendedorError.menssage}</div>;
    }

    return (
        <>
            <Header />
            <MenuLateral />
            <div className='blocoRoxo'>
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

                <section className="bloco1">
                    <div id="infoBloco1">
                        <div>
                            <button id='favoritos' onClick={Favoritar}>
                                <img id='botaoFavoritar' src={HeartLine} alt="Favoritar" />
                            </button>
                            <h1 className='title'>{empreendedor.nomeEmpreendimento}</h1>
                            <p>{empreendedor.biografia}</p>
                        </div>
                        <a href='#bloco2' className='buttonInfo'>VER PRODUTOS</a>
                    </div>
                    <div id='carrosselCentralizado'>
                        <Carrossel
                            img1={Artesanado}
                            img2={Saude01}
                            img3={Gastronomia}
                            img4={Tecnologia}
                            img5={Saude02}
                            img6={Educacao}
                            img7={Propaganda}
                        />
                    </div>
                    
                </section>

                <section className="bloco2" id="bloco2">
                    <div id="titleText">
                        <h2 id="textBranco">Nossos Produtos</h2>
                    </div>
                    <div id="gradeProdutos">
                        {empreendedor.produtos.length > 0? (
                            empreendedor.produtos.map(produto => (
                                <Produto
                                    key={produto.idProduto}
                                    img={produto.urlFoto}
                                    name={produto.nome}
                                    price={produto.preco.toFixed(2)}
                                />
                            ))
                        ) : (
                            <div id="produtos-nao-carregados">
                                <p>Produtos não adicionados ou não lidos</p>
                            </div>
                        )}
                    </div>
                </section>

            </div>
            
            <section id="bloco3">
                    <BoxInfo title={"Avaliações"} idBox={'titleBoxLaranja'} idDivisor={'divisorLaranja'} />
                    <div className='avaliacoes' id="boxLaranja">
                        <div className='boxAvaliacoes'>
                            {empreendedor? (
                                empreendedor.avaliacoes.map(avaliacao => (
                                    <div className='caixaAvaliacao' key={avaliacao.id}>
                                        <h3>{avaliacao.usuario.nome}</h3>
                                        <p>{avaliacao.avaliacao}</p>
                                    </div>
                                ))
                            ) : (
                                <div className='caixaAvaliacao'>
                                    <p>Avaliações não disponíveis</p>
                                </div>
                            )}
                        </div>
                        <form id='inputAvaliacao'>
                            <input type='text' placeholder="Insira sua avaliação" maxLength={100} />
                            <button type="submit">
                                <img src={SendMensage} alt='Enviar avaliação' />
                            </button>
                        </form>
                    </div>
                </section>

            <section id='bloco4'>
                <div id='conteudoBloco'>
                    <h1 className='title' id='tituloBloco4'>INFORMAÇÕES</h1>
                    <div id='colunas' className='colunaInformacoes'>
                        <div className='coluna' id='fotoNome'>
                            <img id='fotoPerfil' src={UserIcon} alt='Icon de perfil' />
                            <div id='fotoTexto'>
                                <h1>{empreendedor.nomeEmpreendimento}</h1>
                                <div id='colunaTexto'>
                                    <h5>Por:</h5>
                                    <h4>{empreendedor.nomeExibicao}</h4>
                                </div>
                            </div>
                        </div>
                        
                        <div className='coluna' id='retirarPadding'>
                            <div>
                                <h2>MODALIDADE DO SERVIÇO</h2>
                                <h4>{empreendedor.modalidade}</h4>
                            </div>
                            <h3>Recife e Região Metropolitana</h3>
                        </div>
                        <div className='coluna' id='retirarPadding'>
                            <div className='contatos'>
                                <h4>EMAIL DE CONTATO</h4>
                                <div className='contato'>
                                    <CopiarTexto texto={empreendedor.email} />
                                    <p>{empreendedor.email}</p>
                                </div>
                            </div>
                            <div className='contatos'>
                                <h4>NÚMERO DE CONTATO</h4>
                                <div className='contato'>
                                    <CopiarTexto texto={empreendedor.telefone} />
                                    <p>{empreendedor.telefone}</p>
                                </div>
                            </div>
                            <a className='redeSocial' href={"https://" + empreendedor.instagram} target="_blank" rel="noopener noreferrer">
                                <img src={InstagramRoxo} alt='icon do instagram' />
                                <p>Perfil Do Instagram</p>
                            </a>
                            <a className='redeSocial' href={"https://" + empreendedor.facebook} target="_blank" rel="noopener noreferrer">
                                <img src={FacebookRoxo} alt='icon do facebook' />
                                <p>Perfil Do Facebook</p>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Vitrine;
