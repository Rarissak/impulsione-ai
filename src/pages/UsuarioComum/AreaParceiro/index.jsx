import React,{useState} from 'react';
import '../../../index.css';
// import '././././index.css';
import './areaParceiro.css';
import Header from '../../../components/header/header';
import Footer from '../../../components/footer/footer';
import Carrossel from '../../../components/carrosselPorArray/carrossel.jsx';
import BarraLinkInterno from '../../../components/barraLinkInterno/barraLinkInterno';
import BoxInfo from '../../../components/boxInfo/boxInfo';
import BoxVideo from '../../../components/boxVideo/boxVideo';
import Informations from '../../../components/informations/informations';
import BarraLinkExterno from '../../../components/barraLinkExterno/BarraLinkExterno';
import Destaque from '../../../components/featured/destaque.jsx';
import TituloBorda from '../../../components/featured/titleBorda.jsx';

import { Link } from 'react-router-dom';

//Icons para essa page
import IconAlcance from '../../../assets/iconAlcance.svg';
import IconParceria from '../../../assets/iconParceria.svg';
import IconSuporte from '../../../assets/iconSuporte.svg';
import IconVerificacao from '../../../assets/verificacaoIcon.svg';

//Imagens do carrossel
import Artesanado from '../../../assets/artesanato.png'
import Educacao from '../../../assets/educacaoAula.png'
import Gastronomia from '../../../assets/gastronomiaTrufa.png'
import Saude01 from '../../../assets/saudeFisio.png'
import Saude02 from '../../../assets/saudeEstetica.png'
import Tecnologia from '../../../assets/tecnologia.png'
import Propaganda from '../../../assets/propagandaImpulsioneAi.png'
import GatoTeste from "../../../assets/gato.webp";
    
//Imagens detaques
import TrufasDoSim from '../../../assets/trufasDoSim.png';
import Artelane from '../../../assets/artelane.png';
import pitagoras from '../../../assets/pitagoras.png';
import Fisio from '../../../assets/fisioEmcasa.png';
import vintageVibe from '../../../assets/vintageVibe.png';

// import Produto from '../../../components/produto/produto';

import Login, { ToggleModal } from '../login/login.jsx';
import MenuLateral from '../../../components/menuLateral/menuLateral.jsx';
    
import axiosInstance from '../../../helper/axiosInstance.js';
import useAxios from '../../../hook/useAxios.js';

  

// Subcomponente do destaque Integrado.
function Destaques()
{
    const [destaques, loading, error] = useAxios({
        axiosInstance: axiosInstance,
        method: 'GET',
        url:'verificaPlanosEmpreendedores'
    })


    //console.log(destaques);
    
    // não mostrar nada 
    if(destaques === undefined)
    {
        return null;
    }

   
    // geramdo componentes com informações vindas do banco.
    return(
        <div className='destaquesBloco3' id="boxLaranja">
            <div id='linhaDestaques'>  
             {destaques.length > 0 ? (
                destaques.map((destaque, index) => (
                    <Destaque
                    key={index}
                    idBox={'quadradoBranco'}
                    path={''} // Pegar o path do banco tbm?
                    foto={TrufasDoSim} // Mias tarde -> Trocar pela foto do banco
                    nome={destaque.nomeEmpreendimento}
                    nicho={destaque.nicho.nicho}
                    />
                ))
                ) : (
                    // tá com uma animaçãozinha de mudar a cor do texto para um pouco azulado
                    <div id="mensagemCarregamentoAreaParceiro">
                    
                        <h1>Contéudo está sendo carregado!</h1>
                    </div>
                )}
                </div> 
           
        </div>
     
            
    );
    
}



// Subcomponente dos planos integrado
function Planos() {
    
    const [planos, loading, error] = useAxios({
        axiosInstance: axiosInstance,
        method: 'GET',
        url: 'assinaturas'
    });

    console.log(planos);
    
    // Se não houver planos carregados ainda, retorne null
    if (planos === undefined) {
        return null;
    }

    // Subcomponente para ajudar na hora de integrar
    function VantagemComp({icone, vantagem})
    {
        return(
            <div className='vantagem'>
                <img src={icone} alt="Icon de verificado"/> 
                <p>{vantagem}</p>
            </div>
        );
    
    }

    // Função para separar os beneficios que vem do back.
    // os 255 caracters do banco n são suficiente para todos os benéficios serem postos.
    function separarString(string) {

        // Usando o método split para separar a string pelo caractere ".", ent no banco o ponto separa as strings.
        const arraySeparado = string.split(".");

        // apagando o ultimo elemento, pois está vindo vázio.
        arraySeparado.pop();
       
        // console.log(arraySeparado);

        // Retornando o array separado
        return arraySeparado;
    }

    return (
        <section id="bloco5" className='planos'>
            <TituloBorda title='Nossos Planos'></TituloBorda>
            <div id="boxPlanos">
                {planos.length > 0 ? (
                    planos.map((plano, index) => (
                        <div className='plano' key={index}>
                            {/* Verificando se plano.beneficios está definido antes de chamar separarString */}
                            {plano.beneficios && separarString(plano.beneficios).map((beneficio, index2) => (
                               
                                <VantagemComp
                                    key={index2}
                                    icone={IconVerificacao}
                                    vantagem={beneficio} // Alterado para exibir cada vantagem
                                />
                            ))}
                            <button className='buttonPlanos'>Plano {plano.nome}</button>
                        </div>
                    ))
                ) : (
                    // exibir uma mensagem de carregamento
                    <div id="mensagemCarregamentoAreaParceiro">
                        <h1>Conteúdo está sendo carregado!</h1>
                    </div>
                )}
            </div>
        </section>
    );
}


function CarrosselIntegrado()
{
    // Puxando os empreendedores que optiram por adquirir um plano
  //  const [imagens, loading, error] = useAxios({
  //      axiosInstance: axiosInstance,
  //      method: 'GET',
  //      url:'verificaPlanosEmpreendedores'
  //  })
    //console.log(destaques);
    
    let imagens = 
    {
        "1": Artelane,
        "2": Artesanado,
        "3": Saude01,
        "4": Saude02,
        "5": Gastronomia,
        "6": Educacao,
        "algo": GatoTeste,
        "23": Propaganda,
        "25": Tecnologia
    }
    
    
    // não mostrar nada 
    if(imagens === undefined)
    {
        return null;
    }

    return(
       
        // Convertendo json em array
        <Carrossel
            imagens={Object.values(imagens)}
            idDegrade={'degradeRoxo'}
        />
    );
    
}

function AreaParceiro(){

    const handleComponentLogin = () => {
        ToggleModal();
     };

    return (
        <>
        <Header></Header>
        <MenuLateral></MenuLateral>
        
        <body>
            <div className='blocoRoxo'>
                <nav id='barraLinks'>
                    <BarraLinkInterno id='fundoRoxoClaro' name={'VANTAGENS'} idElemento='bloco2'></BarraLinkInterno>
                    <BarraLinkInterno id='fundoRoxoClaro' name={'PARCEIROS'} idElemento='bloco3'></BarraLinkInterno>
                    <BarraLinkInterno id='fundoRoxoClaro' name={'SEBRAE'} idElemento='bloco4'></BarraLinkInterno>
                    <BarraLinkInterno id='fundoRoxoClaro' name={'PLANOS'} idElemento= 'bloco5'></BarraLinkInterno>
                    <BarraLinkExterno id='fundoRoxoClaro' name={'CADASTRE-SE'} link={'/cadastroParceiro'}></BarraLinkExterno>
                    {/* <BarraLinkExterno id='fundoRoxoClaro' name={''} link={''}></BarraLinkExterno> */}
                    <button 
                    id='barraLinksLogin'
                    onClick={handleComponentLogin}>
                        <span>LOGIN</span>  
                    </button>                        
                    {<Login />}
                    
                </nav>

                <section className="bloco1" id=''>
                <div id="infoBloco1">
                    <div id='textoBloco1'>
                        <h1 className='title'>Dê um salto no seu negócio!</h1>
                        <p>Use nossa plataforma como uma forma de impulsionar ai, aqui, aonde você estiver!</p>
                    </div>
                    <Link
                    to='/cadastroParceiro'>
                        <button className='botaoInfo' id='linkCadastro'>TORNE-SE UM PARCEIRO</button>
                    </Link>
                </div>
               <CarrosselIntegrado/>
                </section>

                <section className="bloco2">
                    <div id="titleText">
                        <h2 id="textBranco">Vantagens de</h2>
                        <h2 id="textLaranja">Impulsionar seu Negócio</h2>
                    </div>
                    <div id="info">                
                        <Informations icon={IconAlcance} 
                                    titulo={"MAIOR VISIBILIDADE E AUMENTO DO PÚBLICO"}
                                    texto={"Na plataforma os empreendedores ganham uma presença online robusta, o que aumenta a visibilidade no mercado."}
                        ></Informations>
                        <Informations icon={IconParceria} 
                                    titulo={"OPORTUNIDADES DE NEGÓCIOS ADICIONAIS"}
                                    texto={"A plataforma possui recursos de destaque e anúncios que aumentam a visibilidade do seu negócio. Gerando oportunidades adicionais, como parcerias comerciais e colaborações com outros empreendedores da plataforma."}
                        ></Informations>
                        <Informations icon={IconSuporte} 
                                    titulo={"SUPORTE E RECURSOS PARA CRESCIMENTO"}
                                    texto={"Proporcionamos suporte e recursos para ajudar os empreendedores a crescerem e prosperarem. Isso inclui acesso a artigos educacionais, treinamentos e colaborações com o Sebrae."}
                        ></Informations>
                    </div>
                </section>
            </div>

            <section id="bloco3">
                <BoxInfo title={"Empreendedores que indicam o Impulsione Aí"} idBox={'titleBoxLaranja'} idDivisor={'divisorLaranja'}></BoxInfo>
                
                <Destaques/>
            </section>

            <section className="bloco4">
                <BoxVideo video={"https://www.youtube.com/embed/CxwjOwNgx30?si=LCEVyJluPePxyanL"} 
                        title={"Sebrae"} 
                        text={"Veja algumas dicas do nosso colaborador para impulsionar ainda mais seu negócio."}>
                </BoxVideo>
            </section>

          <Planos/>
                
        </body>

        <Footer></Footer>
        </>
    )    
}

export default AreaParceiro;