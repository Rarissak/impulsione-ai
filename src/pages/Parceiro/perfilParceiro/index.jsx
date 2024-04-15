import BarraLinkInterno from "../../../components/barraLinkInterno/barraLinkInterno"
import BoxInfo from "../../../components/boxInfo/boxInfo"
import Footer from "../../../components/footer/footer"
import Header from "../../../components/header/header"
import MenuLateral from "../../../components/menuLateral/menuLateral"
import MeusDados from "../../../components/meusDados/MeusDados"

import '../perfilParceiro/perfilParceiro.css'

import IconEditar from '../../../assets/iconEditar.svg'
import IconExcluir from '../../../assets/iconLoginModalClose.svg';
import ImgTeste from '../../../assets/imgTeste.png'
import ImgCarrossel from '../../../assets/gastronomiaTrufa.png'
import BoxVideo from "../../../components/boxVideo/boxVideo"

function PerfilParceiro(){

    var stars = document.querySelectorAll('.star-icon');
                  
    document.addEventListener('click', function(e){
    var classStar = e.target.classList;
    if(!classStar.contains('ativo')){
        stars.forEach(function(star){
        star.classList.remove('ativo');
        });
        classStar.add('ativo');
        console.log(e.target.getAttribute('data-avaliacao'));
    }
    });

    return(
        <>
        <Header></Header>
        <MenuLateral></MenuLateral>
        <body>
            <nav id='barraLinks'>
                <BarraLinkInterno id='fundoLaranja' name={'MEUS DADOS'} idElemento={''}></BarraLinkInterno>
                <BarraLinkInterno id='fundoLaranja' name={'MINHA VITRINE'} idElemento={''}></BarraLinkInterno>
                <BarraLinkInterno id='fundoLaranja' name={'SEBRAE'} idElemento={''}></BarraLinkInterno>
                <BarraLinkInterno id='fundoLaranja' name={'DEPOIMENTOS'} idElemento={''}></BarraLinkInterno>                
            </nav>
            {/* <section id='meusDados'>
                <div>
                    <h1>Olá {nomeParceiro}</h1>
                    <div>
                        <h3>No ultimo mês sua vitrine teve:</h3>
                        <h2>{numVisitas} VISITAS</h2>
                    </div>
                    <p>Clique aqui para ver algumas dicas do SEBRAE de como impulsionar seu negócio.</p>
                </div>
                <MeusDados></MeusDados>
            </section> */}
            <section id='meusDados'>
                <div>
                    <h1>Olá fulana</h1>
                    <div>
                        <h3>No ultimo mês sua vitrine teve:</h3>
                        <h2>0 VISITAS</h2>
                    </div>
                    <p>Clique aqui para ver algumas dicas do SEBRAE de como impulsionar seu negócio.</p>
                </div>
                <MeusDados></MeusDados>
            </section>
            <section id='minhaVitrine'>
                <BoxInfo title={'MINHA VITRINE'} idBox={'titleBoxRoxo'} idDivisor={'divisorRoxo'}></BoxInfo>
                <div className="boxInformations" id='boxEditVitrine'>
                    <div id='editCarrossel'>
                        <form method="post" id='addImgCarrossel'>
                            <legend>IMAGENS DO CARROSSEL</legend>
                            <input type="image"></input>
                            <button type="submity">ADICIONAR IMAGENS</button>
                        </form>
                        <div className="itensCadastrados">
                            <ImgCarrosselCadastrada img={ImgCarrossel}></ImgCarrosselCadastrada>
                        </div>
                    </div>
                    <div id='editProdutos'>
                        <form method="post" id='addProdutos'>
                            <h3>PRODUTOS</h3>
                            <div id='imgCamposProduto'>
                                <input id='inputImg' type='image'/>
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
                            <button>ADICIONAR PRODUTO</button>
                        </form>
                        <div className="itensCadastrados">
                            <ProdutoCadastrado img={ImgTeste} nomeProduto={"teste"} preco={'5,50'}></ProdutoCadastrado>

                        </div>
                    </div>
                    <div id='editBiografia'>
                        <from method='post' id='addBiografia'>
                            <legend>BIOGRAFIA</legend>
                            <textarea></textarea>
                            <button>ADICIONAR BIOGRAFIA</button>
                        </from>
                    </div>
                    <div id='editAlcance'>
                        <form>
                            <legend>QUAIS REGIÕESS SEU NEGÓCIO ATENDE?</legend>
                            <div>
                                <input type='text'></input>
                                <p>Ex: Recife e Região Metropolitana</p>
                                <p>Ex: Em todo o Brasil</p>
                            </div>
                            <button type='text'>SALVAR</button>
                        </form>
                    </div>
                </div>
            </section>
            <section id='sebrae'>
                <BoxVideo title={"Sebrae"} text={"Veja algumas dicas do nosso colaborador para impulsionar ainda mais seu negócio"} video={"https://www.youtube.com/embed/ID45S6So2wc?si=TMGqvh3hlyejd5Js"}></BoxVideo>
            </section>
            <hr id='linhaRoxa'></hr>
            <section id='areaDepoimento'>
                <div id='tituloDepoimentos'>
                    <h2 className="title">DEPOIMENTO</h2>
                </div>
                <form>
                    <p>Que tal deixar um depoimento na plataforma contando como foi sua experiência com o Impulsione aí?</p>
                    <textarea placeholder="Deixe aqui seu depoimento"></textarea>
                    <fieldset>
                        <legend>Avalie Nossa Plataforma:</legend>
                        <ul class="avaliacaoPlataforma">
                            <li class="star-icon ativo" data-avaliacao="1"></li>
                            <li class="star-icon" data-avaliacao="2"></li>
                            <li class="star-icon" data-avaliacao="3"></li>
                            <li class="star-icon" data-avaliacao="4"></li>
                            <li class="star-icon" data-avaliacao="5"></li>
                            </ul>
                    </fieldset>
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