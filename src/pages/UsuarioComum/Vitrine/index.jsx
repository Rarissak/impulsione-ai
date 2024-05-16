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
import Artesanado from '../../../assets/artesanato.png'
import Educacao from '../../../assets/educacaoAula.png'
import Gastronomia from '../../../assets/gastronomiaTrufa.png'
import Saude01 from '../../../assets/saudeFisio.png'
import Saude02 from '../../../assets/saudeEstetica.png'
import Tecnologia from '../../../assets/tecnologia.png'
import Propaganda from '../../../assets/propagandaImpulsioneAi.png'
import MenuLateral from '../../../components/menuLateral/menuLateral';

function Vitrine() {
    const [idEmpreendedor, setIdEmpreendedor] = useState('');
    const [nomeEmpreendimento, setNomeEmpreendimento] = useState('');
    const [biografia, setBiografia] = useState('');
    const [nomeExibicao, setNomeExibicao] = useState('');
    const [modalidade, setModalidade] = useState('');
    const [site, setSite] = useState('');
    const [email, setEmail] = useState('');
    const [facebook, setFacebook] = useState('');
    const [instagram, setInstagram] = useState('');
    const [telefone, setTelefone] = useState('');
    const [idNicho, setIdNicho] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [produtos, setProdutos] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const responseEmpreendedor = await axios.get('http://localhost:8080/empreendedores/' + localStorage.getItem('id'));
    //             const empreendedor = responseEmpreendedor.data;

    //             setIdEmpreendedor(empreendedor.idEmpreendedor);
    //             setNomeEmpreendimento(empreendedor.nomeEmpreendimento);
    //             setBiografia(empreendedor.biografia);
    //             setNomeExibicao(empreendedor.nomeExibicao);
    //             setModalidade(empreendedor.modalidade);
    //             setSite(empreendedor.site);
    //             setEmail(empreendedor.email);
    //             setFacebook(empreendedor.facebook);
    //             setInstagram(empreendedor.instagram);
    //             setTelefone(empreendedor.telefone);
    //             setIdNicho(empreendedor.idNicho);

    //             const responseProdutos = await axios.get('http://localhost:8080/produtos/' + localStorage.getItem('id'));
    //             setProdutos(responseProdutos.data);

    //             setIsLoading(false);
    //         } catch (error) {
    //             setError(error);
    //             setIsLoading(false);
    //         }
    //     };

    //     fetchData();
    // }, []);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const id = localStorage.getItem('id');
    //             console.log('Fetching empreendedor with ID:', id);
                
    //             const responseEmpreendedor = await axios.get(`http://localhost:8080/empreendedores/${id}`);
    //             const empreendedor = responseEmpreendedor.data;
    //             console.log('Empreendedor data:', empreendedor);
    
    //             setIdEmpreendedor(empreendedor.idEmpreendedor);
    //             setNomeEmpreendimento(empreendedor.nomeEmpreendimento);
    //             setBiografia(empreendedor.biografia);
    //             setNomeExibicao(empreendedor.nomeExibicao);
    //             setModalidade(empreendedor.modalidade);
    //             setSite(empreendedor.site);
    //             setEmail(empreendedor.email);
    //             setFacebook(empreendedor.facebook);
    //             setInstagram(empreendedor.instagram);
    //             setTelefone(empreendedor.telefone);
    //             setIdNicho(empreendedor.idNicho);
    
    //             console.log('Fetching produtos with ID:', id);
    //             const responseProdutos = await axios.get(`http://localhost:8080/produtos/${id}`);
    //             const produtos = responseProdutos.data;
    //             console.log('Produtos data:', produtos);
    //             setProdutos(produtos);
    
    //             setIsLoading(false);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //             setError(error);
    //             setIsLoading(false);
    //         }
    //     };
    
    //     fetchData();
    // }, []);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const id = localStorage.getItem('id');
                console.log('Fetching empreendedor with ID:', id);
                
                const responseEmpreendedor = await axios.get(`http://localhost:8080/empreendedores/${id}`);
                const empreendedor = responseEmpreendedor.data;
                console.log('Empreendedor data:', empreendedor);
    
                setIdEmpreendedor(empreendedor.idEmpreendedor);
                setNomeEmpreendimento(empreendedor.nomeEmpreendimento);
                setBiografia(empreendedor.biografia);
                setNomeExibicao(empreendedor.nomeExibicao);
                setModalidade(empreendedor.modalidade);
                setSite(empreendedor.site);
                setEmail(empreendedor.email);
                setFacebook(empreendedor.facebook);
                setInstagram(empreendedor.instagram);
                setTelefone(empreendedor.telefone);
                setIdNicho(empreendedor.idNicho);
    
                console.log('Fetching produtos with ID:', id);
                const responseProdutos = await axios.get(`http://localhost:8080/produtos/${id}`);
                const produtos = responseProdutos.data;
                console.log('Produtos data:', produtos);
                setProdutos(produtos);
    
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                // Aqui você pode decidir o que fazer quando ocorrer um erro ao carregar os produtos
                // Por exemplo, você pode definir os produtos como uma lista vazia e continuar com o carregamento da página
                setProdutos([]);
                setIsLoading(false);
            }
        };
    
        fetchData();
    }, []);
    

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            <Header />
            <MenuLateral />
            <div className='blocoRoxo'>
                <nav className='linksExternos' id='barraLinks'>
                    <BarraLinkExterno id='fundoRoxoClaro' name={'GASTRONOMIA'} link={'/pesquisa'} />
                    <BarraLinkExterno id='fundoRoxoClaro' name={'MODA'} link={'/pesquisa'} />
                    <BarraLinkExterno id='fundoRoxoClaro' name={'ARTESANATO'} link={'/pesquisa'} />
                    <BarraLinkExterno id='fundoRoxoClaro' name={'TECNOLOGIA'} link={'/pesquisa'} />
                    <BarraLinkExterno id='fundoRoxoClaro' name={'EDUCAÇÃO'} link={'/pesquisa'} />
                    <BarraLinkExterno id='fundoRoxoClaro' name={'SAÚDE'} link={'/pesquisa'} />
                    <BarraLinkExterno id='fundoRoxoClaro' name={'ESTÉTICA'} link={'/pesquisa'} />
                    <BarraLinkExterno id='fundoRoxoClaro' name={'DIVERSOS'} link={'/pesquisa'} />
                </nav>

                <section className="bloco1">
                    <div id="infoBloco1">
                        <button id='favoritos' onClick={Favoritar}>
                            <img id='botaoFavoritar' src={HeartLine} alt="Favoritar" />
                        </button>
                        <h1 className='title'>{nomeEmpreendimento}</h1>
                        <p>{biografia}</p>
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

                {/* <section className="bloco2" id="bloco2">
                    <div id="titleText">
                        <h2 id="textBranco">Nossos Produtos</h2>
                    </div>
                    <div id="gradeProdutos">
                        {produtos.map(produto => (
                            <Produto
                                key={produto.id} // Verifique a estrutura do objeto retornado pela API para garantir a chave correta
                                img={produto.urlFoto}
                                name={produto.nome}
                                price={produto.preco.toFixed(2)}
                            />
                        ))}
                    </div>
                </section> */}

            <section className="bloco2" id="bloco2">
                <div id="titleText">
                    <h2 id="textBranco">Nossos Produtos</h2>
                </div>
                <div id="gradeProdutos">
                    {produtos.length > 0 ? (
                        produtos.map(produto => (
                            <Produto
                                key={produto.id} // Verifique a estrutura do objeto retornado pela API para garantir a chave correta
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
                    <div id='colunas'>
                        <div className='coluna' id='fotoNome'>
                            <img id='fotoPerfil' src={UserIcon} alt='Icon de perfil' />
                            <div id='fotoTexto'>
                                <h1>{nomeEmpreendimento}</h1>
                                <div id='colunaTexto'>
                                    <h5>Por:</h5>
                                    <h4>{nomeExibicao}</h4>
                                </div>
                            </div>
                        </div>
                        
                        <div className='coluna'>
                            <div>
                                <h2>MODALIDADE DO SERVIÇO</h2>
                                <h4>{modalidade}</h4>
                            </div>
                            <h3>Recife e Região Metropolitana</h3>
                        </div>
                        <div className='coluna'>
                            <div className='contatos'>
                                <h4>EMAIL DE CONTATO</h4>
                                <div className='contato'>
                                    <CopiarTexto texto={email} />
                                    <p>{email}</p>
                                </div>
                            </div>
                            <div className='contatos'>
                                <h4>NÚMERO DE CONTATO</h4>
                                <div className='contato'>
                                    <CopiarTexto texto={telefone} />
                                    <p>{telefone}</p>
                                </div>
                            </div>
                            <a className='redeSocial' href={"https://" + instagram} target="_blank" rel="noopener noreferrer">
                                <img src={InstagramRoxo} alt='icon do instagram' />
                                <p>Perfil Do Instagram</p>
                            </a>
                            <a className='redeSocial' href={"https://" + facebook} target="_blank" rel="noopener noreferrer">
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
