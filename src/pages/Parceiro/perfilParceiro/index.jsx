import BarraLinkInterno from "../../../components/barraLinkInterno/barraLinkInterno"
import BoxInfo from "../../../components/boxInfo/boxInfo"
import Footer from "../../../components/footer/footer"
import Header from "../../../components/header/header"
import MenuLateral from "../../../components/menuLateral/menuLateral"
import MeusDados from "../../../components/meusDados/MeusDados"

import '../perfilParceiro/perfilParceiro.css'

// import IconImage from '../../../assets/imagem.svg'
import IconEditar from '../../../assets/iconEditar.svg'
import IconExcluir from '../../../assets/iconLoginModalClose.svg';
import ImgTeste from '../../../assets/imgTeste.png'
import ImgCarrossel from '../../../assets/gastronomiaTrufa.png'
import BoxVideo from "../../../components/boxVideo/boxVideo"
// import { Link } from "react-router-dom"

function PerfilParceiro(){

    // var stars = document.querySelectorAll('.star-icon');
                  
    // document.addEventListener('click', function(e){
    // var classStar = e.target.classList;
    // if(!classStar.contains('ativo')){
    //     stars.forEach(function(star){
    //     star.classList.remove('ativo');
    //     });
    //     classStar.add('ativo');
    //     console.log(e.target.getAttribute('data-avaliacao'));
    // }
    // });

    var nomeParceiro = 'teste';
    var numVisitas = 5;



    // const inputFile = document.querySelector('#imagemInput');
    // const pictureImage = document.querySelector('.imagemPicture');
    // const pictureImageText = 'Escolha uma imagem';
    // pictureImage.innerHTML = pictureImageText;

    // inputFile.addEventListener('change', function(e){
    //     const inputTarget = e.target;
    //     const file = inputTarget.files[0]; 

    //     if(file){
    //         const reader = new FileReader();
            
    //         reader.addEventListener('load', function(e) {
    //             const readerTarget = e.target;

    //             const img = document.createElement('img');
    //             img.src = readerTarget.result;
    //             img.classList.add('pictureImg');

    //             pictureImage.innerHTML = ' ';

    //             pictureImage.appendChild(img);
    //         })
    //         reader.readAsDataURL(file)

    //         pictureImage.innerHTML = 'Image selected';
    //         console.log(file);
    //     } else {
    //         pictureImage.innerHTML = pictureImageText;
 
    //     }
    // })

    return(
        <>
        <Header></Header>
        <MenuLateral></MenuLateral>
        <body>
            <nav id='barraLinks'>
                <BarraLinkInterno id='fundoLaranja' name={'MEUS DADOS'} idElemento={'sessaoMeusDados'}></BarraLinkInterno>
                <BarraLinkInterno id='fundoLaranja' name={'MINHA VITRINE'} idElemento={'minhaVitrine'}></BarraLinkInterno>
                <BarraLinkInterno id='fundoLaranja' name={'SEBRAE'} idElemento={'sebrae'}></BarraLinkInterno>
                <BarraLinkInterno id='fundoLaranja' name={'DEPOIMENTOS'} idElemento={'areaDepoimento'}></BarraLinkInterno>                
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
                    <div id='editCarrossel'>
                        {/* <form method="post" enctype="multipart/form-data" id='addImgCarrossel'> */}
                        <form id='addImgCarrossel'>
                            <legend>IMAGENS DO CARROSSEL</legend>
                            <label className="imagem" tabIndex={0} for='imagemInput'>
                                <input type="file" accept="image/*" id="imagemInput"></input>
                                {/* <span className="imagemPicture">Escolha sua Imagem
                                <img src={IconImage} />
                                </span> */}
                                <span className="imagemPicture">
                                    <img className="pictureImg" />
                                </span>

                            </label>
                            <button type='submit'>ADICIONAR IMAGENS</button>
                        </form>
                        <div className="itensCadastrados">
                            <ImgCarrosselCadastrada img={ImgCarrossel}></ImgCarrosselCadastrada>
                        </div>
                    </div>
                    <div id='editProdutos'>
                        <form id='addProdutos'>
                            <h3>PRODUTOS</h3>
                            <div id='imgCamposProduto'>
                                <input id='inputImg' type='file' accept="image/*"/>
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
                {/* <div id='tituloDepoimentos'> */}
                <div id='tituloAreaDepoimentos'>
                    <h2 className="title">DEPOIMENTO</h2>
                </div>
                <form id='formDepoimento'>
                    <label>Que tal deixar um depoimento na plataforma contando como foi sua experiência com o Impulsione aí?</label>
                    <textarea maxLength={150} placeholder="Deixe aqui seu depoimento"></textarea>
                    {/* <fieldset>
                        <legend>Avalie Nossa Plataforma:</legend>
                        <img src={' '}/>
                        <ul class="avaliacaoPlataforma">
                            <li class="star-icon ativo" data-avaliacao="1"></li>
                            <li class="star-icon" data-avaliacao="2"></li>
                            <li class="star-icon" data-avaliacao="3"></li>
                            <li class="star-icon" data-avaliacao="4"></li>
                            <li class="star-icon" data-avaliacao="5"></li>
                        </ul>
                    </fieldset> */}
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