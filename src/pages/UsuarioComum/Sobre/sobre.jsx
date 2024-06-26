import './sobre.css';
import '../../../index.css';
import Carrossel from '../../../components/carrossel/carrossel.jsx';
import Header from '../../../components/header/header.jsx';
import BarraLinkExterno from '../../../components/barraLinkExterno/BarraLinkExterno.jsx';
import Footer from '../../../components/footer/footer.jsx';
import BoxInfo from '../../../components/boxInfo/boxInfo.jsx';
import Pilares from '../../../assets/pilares.svg';
import BoxVideo from '../../../components/boxVideo/boxVideo.jsx';
import LogoColorida from '../../../assets/logoColorida.svg';
import Breadcrumb from '../../../components/breadcrumb/breadcrumb.jsx';

//Imagens do carrossel
import Artesanado from '../../../assets/artesanato.png';
import Educacao from '../../../assets/educacaoAula.png';
import Gastronomia from '../../../assets/gastronomiaTrufa.png';
import Saude01 from '../../../assets/saudeFisio.png';
import Saude02 from '../../../assets/saudeEstetica.png';
import Tecnologia from '../../../assets/tecnologia.png';
import Propaganda from '../../../assets/propagandaImpulsioneAi.png';
import { Link } from 'react-router-dom';
import MenuLateral from '../../../components/menuLateral/menuLateral.jsx';
import axiosInstance from '../../../helper/axiosInstance.js';
import useAxios from '../../../hook/useAxios.js';

function Sobre() {
  const crumbs = [
    { text: 'Home', url: '/' },
    { text: 'Sobre' }
  ];

  const [nichos, nichosloading, nichoError] = useAxios({
    axiosInstance: axiosInstance,
    method: 'GET',
    url: 'nichos'
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


        {/* <nav id='breadcrumbs'><Breadcrumb crumbs={crumbs} /></nav> */}

        <div className="carrossel">
          <Carrossel
            img1={Artesanado}
            img2={Saude01}
            img3={Gastronomia}
            img4={Tecnologia}
            img5={Saude02}
            img6={Educacao}
            img7={Propaganda}
          />
          <div className='carrossel_texto'>
            <p>Uma plataforma que busca criar o ambiente perfeito para impulsionar seu negócio aí onde você está. <br /><strong>Isso é o que nós somos!</strong></p>
            <div>
              <img src={LogoColorida} alt="Logo" /> 
              <p id='fraseEfeito'>Dê um salto em seu negócio</p>
            </div>
            
          </div>
        </div>

        <section id='boxInfosSobre'>
          <BoxInfo title={"QUEM SOMOS"} idBox={'titleBoxRoxo'} idDivisor={'divisorRoxo'}></BoxInfo>
          <div>
            <div className="boxInformations" id='boxInfoSobre'>
              <p>
                Somos um workplace que visa promover um ambiente seguro e com ferramentas que fomentam o desenvolvimento de pequenos e microempreendedores. <br /><br />
                Aumentando a visibilidade desses negócios ao fazer a conexão entre esses empreendedores que estão em busca de novos clientes e um espaço no mercado à pessoas que querem consumir/adquirir/comprar a um custo mais acessível sem perder a qualidade, promovendo então o comércio de empreendedores locais.
              </p>
            </div>
            <div className="boxInformationsDegrade">
              <h1 className='title'>Nossos Pilares</h1>
              <div className='secaoPilares'>
                <div>
                  <div className='pilares'>
                    <h3>Visibilidade e Promoção</h3>
                    <p>Oferecer recursos e ferramentas para aumentar a visibilidade dos empreendedores através da plataforma.</p>
                  </div>
                  <div className='pilares'>
                    <h3>Qualidade e Confiança</h3>
                    <p>Estabelecer padrões de qualidade e confiança para os empreendedores parceiros.</p>
                  </div>
                  <div className='pilares'>
                    <h3>Inovação e Melhoria Contínua</h3>
                    <p>Buscar constantemente por novas oportunidades de inovação e aprimoramento da plataforma.</p>
                  </div>
                </div>
                <img id="img-pilares" src={Pilares} alt="Pilares" />
              </div>
            </div>
          </div>

        </section>

        <Link id='chamada' to='/areaParceiro'>
          <p>Torne-se um parceiro! <strong>Conheça nossas vantagens</strong></p>
        </Link>

        <section>
          <BoxVideo video={"https://www.youtube.com/embed/WLg7imC5QYQ?si=u-av8KND9t5b-wzB"}
            title={"Conheça o Impulsione aí"}
            text={"A mais nova plataforma de empreendedores!"}>
          </BoxVideo>
        </section>
      </body>
      <Footer />
    </>
  )
}

export default Sobre;