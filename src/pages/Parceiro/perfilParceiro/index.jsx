import BarraLinkInterno from "../../../components/barraLinkInterno/barraLinkInterno"
import BoxInfo from "../../../components/boxInfo/boxInfo"
import Footer from "../../../components/footer/footer"
import Header from "../../../components/header/header"
import MenuLateral from "../../../components/menuLateral/menuLateral"
import MeusDados from "../../../components/meusDados/MeusDados"

import '../perfilParceiro/perfilParceiro.css'

import React, { useState } from 'react';
import ImagePreview from './imagePreview'; // Importe o componente ImagePreview

import IconEditar from '../../../assets/iconEditar.svg'
import IconExcluir from '../../../assets/iconLoginModalClose.svg';
import ImgTeste from '../../../assets/imgTeste.png';
import ImgCarrossel from '../../../assets/gastronomiaTrufa.png';
import BoxVideo from "../../../components/boxVideo/boxVideo";

function PerfilParceiro(){
    const nomeParceiro = 'Keyalne';
    const numVisitas = '10';
    
    const [selectedImage, setSelectedImage] = useState(null);

    const loadImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
        setSelectedImage(reader.result);
        };

        reader.readAsDataURL(file);
    };

    const [selectedProduto, setSelectedProduto] = useState(null);

    const loadProduto = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
        setSelectedProduto(reader.result);
        };

        reader.readAsDataURL(file);
    };

    const [selectedStar, setSelectedStar] = useState(null);

        const handleChange = (event) => {
        const selectedValue = parseInt(event.target.value);
        setSelectedStar(selectedValue);
        // console.log("O selecionado foi o", selectedValue);

        for (let i = 1; i <= selectedValue; i++) {
            const starElement = document.getElementById(`star${i}`);
            starElement.checked = true;
        }
    };

    return(
        <>
        <Header></Header>
        <MenuLateral></MenuLateral>
        <body>
            <nav id='barraLinks'>
                <BarraLinkInterno id='fundoLaranja' name={'MEUS DADOS'} idElemento={'sessaoMeusDados'}></BarraLinkInterno>
                <BarraLinkInterno id='fundoLaranja' name={'MINHA VITRINE'} idElemento={'minhaVitrine'}></BarraLinkInterno>
                <BarraLinkInterno id='fundoLaranja' name={'SEBRAE'} idElemento={'sebrae'}></BarraLinkInterno>
                <BarraLinkInterno id='fundoLaranja' name={'DEPOIMENTOS'} idElemento={'areaDepoimentos'}></BarraLinkInterno>                
            </nav>
            <section id='sessaoMeusDados'>
                <div id='informacoesSessao'>
                    <h1>Olá, {nomeParceiro}</h1>
                    <div>
                        <h3>No ultimo mês sua vitrine teve:</h3>
                        <h2>{numVisitas} VISITAS</h2>
                    </div>
                    <a>
                        <p>Clique aqui para ver algumas dicas do SEBRAE de como impulsionar seu negócio.</p>
                    </a>
                </div>
                <MeusDados></MeusDados>
            </section>
            <section id='minhaVitrine'>
                <BoxInfo title={'MINHA VITRINE'} idBox={'titleBoxRoxo'} idDivisor={'divisorRoxo'}></BoxInfo>
                <div className="boxInformations" id='boxEditVitrine'>
                    <div id="editCarrossel">
                        <form
                            // method="post"
                            encType="multipart/form-data"
                            id="addImgCarrossel"
                        >
                            <legend>IMAGENS DO CARROSSEL</legend>
                            <label className="imagem" tabIndex={0} for="imagemInput">
                            <input
                                type="file"
                                accept="image/*"
                                id="imagemInput"
                                onChange={loadImage}
                            />
                            <ImagePreview src={selectedImage} id={'imageCarrossel'}/> {/* Passe selectedImage como prop */}
                            </label>
                            <button type="submit">ADICIONAR IMAGENS</button>
                        </form>
                        <div className="itensCadastrados">
                            <ImgCarrosselCadastrada img={ImgCarrossel}></ImgCarrosselCadastrada>
                        </div>
                    </div>

                    <div id='editProdutos'>
                        <form 
                            id='addProdutos'
                        >
                            <h3>PRODUTOS</h3>
                            <div id='imgCamposProduto'>
                                <label className="imagemProduto" tabIndex={1} for="inputImg">
                                    <input 
                                        id='inputImg' 
                                        type='file' 
                                        accept="image/*"
                                        onChange={loadProduto}
                                    />
                                    <ImagePreview src={selectedProduto} id={'imageProduto'}/> {/* Passe selectedImage como prop */}
                                </label>
                                <div id='campos'>
                                    <fieldset>
                                        <legend>NOME DO PRODUTO</legend>
                                        <input type='text'></input>
                                    </fieldset>
                                    <fieldset>
                                        <legend>PREÇO</legend>
                                        <div id='precoProduto'>
                                            <p>R$</p>
                                            <input type='number' step=".02"></input>
                                        </div>
                                    </fieldset>
                            </div>
                            </div>
                            <button type='submit'>ADICIONAR PRODUTO</button>
                        </form>
                        <div className="itensCadastrados">
                            <ProdutoCadastrado img={ImgTeste} nomeProduto={"teste"} preco={'5,50'}></ProdutoCadastrado>
                        </div>
                    </div>
                    <div id='editBiografia'>
                        <form id='addBiografia'>
                            <legend>BIOGRAFIA</legend>
                            <textarea></textarea>
                            <button type='submit'>ADICIONAR BIOGRAFIA</button>
                        </form>
                    </div>
                    <div id='editAlcance'>
                        <form>
                            <legend>QUAIS REGIÕESS SEU NEGÓCIO ATENDE?</legend>
                            <div>
                                <input type='text'></input>
                                <p>Ex: Recife e Região Metropolitana</p>
                                <p>Ex: Em todo o Brasil</p>
                            </div>
                            <button type='submit'>SALVAR</button>
                        </form>
                    </div>
                </div>
            </section>
            <section id='sebrae'>
                <BoxVideo title={"Sebrae"} text={"Veja algumas dicas do nosso colaborador para impulsionar ainda mais seu negócio"} video={"https://www.youtube.com/embed/ID45S6So2wc?si=TMGqvh3hlyejd5Js"}></BoxVideo>
            </section>
            <hr id='linhaRoxa'></hr>
            <section id='areaDepoimentos'>
                <div id='tituloAreaDepoimentos'>
                    <h2 className="title">DEPOIMENTO</h2>
                </div>
                <form id='formDepoimento'>
                    <label>Que tal deixar um depoimento na plataforma contando como foi sua experiência com o Impulsione aí?</label>
                    <textarea maxLength={150} placeholder="Deixe aqui seu depoimento"></textarea>
                    <div id='blocoAvaliacao'>
                        <h3>Avalie nossa plataforma:</h3>
                        <div id="starAvaliacao">
                            <input 
                                type="radio" 
                                id="star5" 
                                name="star" 
                                value="5"
                                onChange={handleChange}    
                            />
                            <label for="star5" className="starIcon"></label>
                            <input 
                                type="radio" 
                                id="star4" 
                                name="star" 
                                value="4"
                                onChange={handleChange}
                            />
                            <label for="star4" className="starIcon"></label>
                            <input 
                                type="radio" 
                                id="star3" 
                                name="star" 
                                value="3"
                                onChange={handleChange}
                            />
                            <label for="star3" className="starIcon testando"></label>
                            <input 
                                type="radio" 
                                id="star2" 
                                name="star" 
                                value="2"
                                onChange={handleChange}
                            />
                            <label for="star2" className="starIcon"></label>
                            <input
                                type="radio"
                                id="star1"
                                name="star"
                                value="1"
                                onChange={handleChange}
                            />
                            <label for="star1" className="starIcon"></label>
                        </div>
                    </div>    
                    <button type='submit'>ENVIAR DEPOIMENTO</button>
                </form>
            </section>
        </body>
        <Footer></Footer>
        </>
    )
}
export default PerfilParceiro

function ProdutoCadastrado({img, nomeProduto, preco}){
    return (
        <section id='produtoCadastrado'>
            <div id='infosProduto'>
                <img src={img} alt='imagem do produto'></img>
                <h4>{nomeProduto}</h4>
                <div id='precoProduto'>
                    <p>R$</p>
                    <p>{preco}</p>
                </div>
            </div>
            <div id='botoesAlterar'>
                <button className='botaoExcluir'>
                    <img src={IconExcluir} alt='botão para excluir'/>
                </button>
                <button>
                    <img src={IconEditar} alt='botão para editar'/>
                </button>
            </div>
        </section>   
    )
}

function ImgCarrosselCadastrada({img}){
    return (
        <section id='imgCadastrada'>
            <img src={img} alt="imagem do carrossel"/>
            <button className='botaoExcluir'>
                <img src={IconExcluir} alt='botão para excluir'/>
            </button>
        </section>   
    )
}