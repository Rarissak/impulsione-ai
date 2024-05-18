import BarraLinkInterno from "../../../components/barraLinkInterno/barraLinkInterno"
import BoxInfo from "../../../components/boxInfo/boxInfo"
import Footer from "../../../components/footer/footer"
import Header from "../../../components/header/header"
import MenuLateral from "../../../components/menuLateral/menuLateral"
import MeusDados from "../../../components/meusDados/MeusDados"

import '../perfilParceiro/perfilParceiro.css'

import React, { useEffect, useState } from 'react';
import ImagePreview from './imagePreview'; // Importe o componente ImagePreview
import axiosInstance, { axiosInstanceToken } from '../../../helper/axiosInstance.js';
import useAxios from '../../../hook/useAxios.js';
import axios from "axios"; 


import IconEditar from '../../../assets/iconEditar.svg'
import IconExcluir from '../../../assets/iconLoginModalClose.svg';
import ImgTeste from '../../../assets/imgTeste.png';
import ImgCarrossel from '../../../assets/gastronomiaTrufa.png';
import BoxVideo from "../../../components/boxVideo/boxVideo";


function PerfilParceiro(){
    const token = localStorage.getItem('token')
    const id = localStorage.getItem('id')
    const uri = localStorage.getItem('uri')
 
    const [usuarioLogado, loading, error] = useAxios({
        axiosInstance: axiosInstance,
        method: 'GET',
        url: uri + '/' + id
    })

    const apelidoParceiro = usuarioLogado.nomeExibicao;
    const numVisitas = usuarioLogado.numeroVisitas;
      
    //Pré visualização de imagem carrossel
    const [selectedImage, setSelectedImage] = useState(null);

    const loadImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
        setSelectedImage(reader.result);
        console.log("Imagem CARROSSEL carregada:", imageDataURL); // Adicionando um console.log para verificar a imagem
        };

        reader.readAsDataURL(file);
    };
    //---------------------------------
    

    //Pré visualização de imagem Produto
    const [selectedProduto, setSelectedProduto] = useState(null);

    const loadProduto = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
        setSelectedProduto(reader.result);
        console.log("Imagem PRODUTO carregada:", imageDataURL); // Adicionando um console.log para verificar a imagem
        };        

        reader.readAsDataURL(file);
    };
    //---------------------------------



    //Pegando os produtos
    const [produtos, produtosloading, produtosError] = useAxios({
        axiosInstance: axiosInstance,
        method: 'GET',
        url: 'produtos'
    })
    //---------------------------------
    
    
    // Cadastrando os produtos

// GET DO NICHO
const [nicho, setNicho] = useState('');

useEffect(() => {
    axios.get(`http://localhost:8080/empreendedores/` + localStorage.getItem('id'))
        .then(response => {
            const empreendedor = response.data;
            const { nicho } = empreendedor;
            setNicho(nicho.id);
            console.log("TESTE Nicho:", nicho.id);
        })
        .catch(error => {
            console.error('Erro ao obter os detalhes do empreendedor:', error);
        });
}, []);

const [dadosProduto, setDadosProduto] = useState({
    nome: '',
    preco: '',
    urlFoto: '',
    idNicho: nicho,
    idEmpreendedor: localStorage.getItem('id')
});

useEffect(() => {
    setDadosProduto(prevState => ({ ...prevState, idNicho: nicho }));
}, [nicho]);

const handleChangeProduto = (event) => {
    setDadosProduto({ ...dadosProduto, [event.target.name]: event.target.value });
};

const handleSubmitProduto = async (event) => {
    event.preventDefault();

    console.log(dadosProduto);
    const token = localStorage.getItem('token');

    if (!token) {
        alert("Você precisa estar logado");
        return;
    }

    try {
        const response = await axiosInstanceToken().post("/produtos", dadosProduto);
        alert("Produto cadastrado com sucesso");
        setProdutoCadastrado(response.data);
    } catch (err) {
        console.log(err.message);
    } finally {
        window.location.reload();
    }
};

    //Deletar Produto está no componente produto cadastrado


    //Cadastrando os depoimentos

        const [dadosDepoimento, setDepoimento] = useState({
            depoimento: '',
            idEmpreendedor: localStorage.getItem('id'),
            qtdEstrelas: ''
        });

            //Codigo referente as estrelas do depoimento
                const [selectedStar, setSelectedStar] = useState(null);

                    const handleChange = (event) => {
                        const selectedValue = parseInt(event.target.value);
                        setDepoimento({...dadosDepoimento, qtdEstrelas:selectedValue});
                        setSelectedStar(selectedValue);
                        // console.log("O selecionado foi o", selectedValue);

                        for (let i = 1; i <= selectedValue; i++) {
                            const starElement = document.getElementById(`star${i}`);
                            starElement.checked = true;
                        }
                    };
            //---------------------------------Fim código

        const handleSubmitDepoimento = async (event) => {
            event.preventDefault();
            console.log(dadosDepoimento)

            try {
                const token = localStorage.getItem('token'); 
                const config = {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                };
                setDepoimento({ ...dadosDepoimento});
                console.log(dadosDepoimento);
                
                const response = await axiosInstance.post('http://localhost:8080/depoimento', dadosDepoimento);
                console.log('Depoimento enviado com sucesso:', response.data);
                alert("Depoimento enviado com sucesso!")

            } catch (error) {
                alert("Não foi possivel enviar seu depoimento :(")
                console.error('Erro ao enviar o depoimento para o banco de dados:', error.message);
            }

            finally{
                window.location.reload()
            }
        };

        const handleChangeDepoimento = (event) => {
            // console.log("teste");
            // console.log("Valor do depoimento:", event.target.value); // Adicione este console.log para verificar o valor do depoimento
            setDepoimento({ ...dadosDepoimento, [event.target.name]: event.target.value });
        };    
    //---------------------------------Fim cadastro Depoimento
    

    //Atualizar Biografia

        const handleSubmitBiografia = async (event) => {
            event.preventDefault();

            const novaBiografia = document.getElementById('textareaBiografia').value;

            console.log(novaBiografia)

            //a const empreendedorId já foi declarada lá em cima 
            const empreendedorId = localStorage.getItem('id');
            console.log(empreendedorId)

            axios.put(`http://localhost:8080/editarBiografia/${empreendedorId}`, {
                biografia: novaBiografia
            })
            .then(response => {
                alert("Biografia Atualizada!")
                console.log('Biografia atualizada com sucesso:', response.data);
            })
            .catch(error => {
                alert("Não foi possivel atualizar a biografia :(")
                console.error('Erro ao atualizar biografia:', error);
            })
            .finally(() => {
                window.location.reload()
            });

        }
        
    //---------------------------------

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
                    <h1>Olá, {apelidoParceiro}</h1>
                    <div>
                        <h3>No ultimo mês sua vitrine teve:</h3>
                        <h2>{numVisitas} VISITAS</h2>
                    </div>
                    <a>
                        <p>Clique aqui para ver algumas dicas do SEBRAE de como impulsionar seu negócio.</p>
                    </a>
                </div>
                <div id='dimensaoMeusDados'>
                    <MeusDados></MeusDados>
                </div>
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
                            onSubmit={handleSubmitProduto}
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
                                        <legend>Link Foto</legend>
                                        <input 
                                            type='text'
                                            name='urlFoto'
                                            value={dadosProduto.urlFoto}
                                            onChange={handleChangeProduto}
                                        ></input>
                                        </fieldset>
                                    <fieldset>
                                        <legend>NOME DO PRODUTO</legend>
                                        <input 
                                            type='text'
                                            name='nome'
                                            value={dadosProduto.nome}
                                            onChange={handleChangeProduto}
                                        ></input>
                                    </fieldset>
                                    <fieldset>
                                        <legend>PREÇO</legend>
                                        <div id='precoProduto'>
                                            <p>R$</p>
                                            <input 
                                                type='number' 
                                                step=".02"
                                                name='preco'
                                                value={dadosProduto.preco}
                                                onChange={handleChangeProduto}
                                            ></input>
                                        </div>
                                    </fieldset>
                            </div>
                            </div>
                            <button type='submit'>ADICIONAR PRODUTO</button>
                        </form>
                        <div className="itensCadastrados">
                            {produtos.map((produto, index) => (
                                <ProdutoCadastrado
                                    key={index} // Usando o índice como chave, mas tenha cuidado com isso se os dados forem dinâmicos e mutáveis
                                    idProduto={produto?.idProduto}
                                    img={produto?.urlFoto}
                                    nomeProduto={produto?.nome}
                                    preco={produto?.preco}
                                />
                            ))}
                        </div>
                    </div>
                    <div id='editBiografia'>
                        <form 
                            id='addBiografia'
                            onSubmit={handleSubmitBiografia}
                        >
                            <legend>BIOGRAFIA</legend>
                            <textarea id='textareaBiografia'></textarea>
                            <button type='submit'>ADICIONAR BIOGRAFIA</button>
                        </form>
                    </div>
                    {/* <div id='editAlcance'>
                        <form>
                            <legend>QUAIS REGIÕESS SEU NEGÓCIO ATENDE?</legend>
                            <div>
                                <input
                                    type='text'

                                ></input>
                                <p>Ex: Recife e Região Metropolitana</p>
                                <p>Ex: Em todo o Brasil</p>
                            </div>
                            <button type='submit'>SALVAR</button>
                        </form>
                    </div> */}
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
                <form 
                    id='formDepoimento'
                    onSubmit={handleSubmitDepoimento}
                >
                    <label>Que tal deixar um depoimento na plataforma contando como foi sua experiência com o Impulsione aí?</label>
                    <textarea 
                        maxLength={150}
                        placeholder="Deixe aqui seu depoimento"
                        value={dadosDepoimento.depoimento}
                        name='depoimento'
                        onInput={handleChangeDepoimento}
                    ></textarea>
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

function ProdutoCadastrado({idProduto, img, nomeProduto, preco}){

    const handleDelete = async () => {
        await axiosInstanceToken().delete("/produtos/" + idProduto)
        .then((res) => {
            console.log("Deu certo:" , res.data)
        })
        .catch((err) => {
            console.log("Deus erro:", err)
        })
        .finally(() => {
            window.location.reload()
        })
    };

    // const handleUpdate = async () => {
    //     await axiosInstanceToken().delete("/produtos/" + idProduto)
    //     .then((res) => {
    //         console.log("Deu certo:" , res.data)
    //     })
    //     .catch((err) => {
    //         console.log("Deus erro:", err)
    //     })
    //     .finally(() => {
    //         window.location.reload()
    //     })
    // };

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
                <button 
                    className='botaoExcluir'
                    onClick={handleDelete}
                >
                    <img src={IconExcluir} alt='botão para excluir'/>
                </button>
                <button
                    // onClick={handleUpdate}
                >
                    <img id="iconEditar" src={IconEditar} alt='botão para editar'/>
                </button>
            </div>
        </section>   
    )
}

function ImgCarrosselCadastrada({img}){
    return (
        <section id='imgCadastrada'>
            <img id='imgCadCarrossel' src={img} alt="imagem do carrossel"/>
            <button className='botaoExcluir'>
                <img src={IconExcluir} alt='botão para excluir'/>
            </button>
        </section>   
    )
}