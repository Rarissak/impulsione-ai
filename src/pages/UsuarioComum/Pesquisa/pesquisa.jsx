import { Link } from 'react-router-dom';
import './pesquisa.css';
import '../../../index.css';
import Header from '../../../components/header/header.jsx';
import MenuLateral from '../../../components/menuLateral/menuLateral.jsx';
import BarraLinkExterno from '../../../components/barraLinkExterno/BarraLinkExterno.jsx';
import Footer from '../../../components/footer/footer.jsx';
import TitleBorda from '../../../components/featured/titleBorda.jsx';
import Destaque from '../../../components/featured/destaque.jsx';
import Negocio from '../../../components/negocio/negocio.jsx';
import FiltroPesquisa from '../../../components/filtroPesquisa/filtroPesquisa.jsx';

function Pesquisa() {

  return (
    <>
      <Header />
      <MenuLateral></MenuLateral>

      <body>
        <nav className='linksExternos' id='barraLinks'>
                <BarraLinkExterno id='fundoRoxoClaro' name={'GASTRONOMIA'} link={'/pesquisa'}></BarraLinkExterno>
                <BarraLinkExterno id='fundoLaranja' name={'MODA'} link={'/pesquisa'}></BarraLinkExterno>
                <BarraLinkExterno id='fundoLaranja' name={'ARTESANATO'} link={'/pesquisa'}></BarraLinkExterno>
                <BarraLinkExterno id='fundoLaranja' name={'TECNOLOGIA'} link={'/pesquisa'}></BarraLinkExterno>
                <BarraLinkExterno id='fundoLaranja' name={'EDUCAÇÃO'} link={'/pesquisa'}></BarraLinkExterno>
                <BarraLinkExterno id='fundoLaranja' name={'SAÚDE'} link={'/pesquisa'}></BarraLinkExterno>
                <BarraLinkExterno id='fundoLaranja' name={'ESTÉTICA'} link={'/pesquisa'}></BarraLinkExterno>
                <BarraLinkExterno id='fundoLaranja' name={'DIVERSOS'} link={'/pesquisa'}></BarraLinkExterno>
        </nav>

        <section id='sectionNegocios'>

        <div id='filtro'>
            {/* Aqui está o componente FiltroPesquisa */}
            <FiltroPesquisa
              nicho={['Gastronomia', 'Moda', 'Tecnologia', 'Esportes', 'Arte', 'Música', 'Educação', 'Saúde']}
              tempoAtuacao={['Menos de 6 meses', '1 ano', '2 anos', '3-5 anos', '+ de 6 anos']}
              distanciaMin={1}
              distanciaMax={500}
              faixaPrecoMin={50}
              faixaPrecoMax={5000}
            />
          </div>

          <div id='negocios'>

            <Negocio 
            link={'/vitrine'} 
            img={'https://toppng.com/uploads/preview/and-blank-effect-transparent-11546868080xgtiz6hxid.png'} 
            name={'Trufas do Sim'} 
            nicho={'Doces'} 
            descricao={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec ante vel arcu vulputate ultrices ut non arcu.'} 
            />

            <Negocio 
            link={'/vitrine'} 
            img={'https://toppng.com/uploads/preview/and-blank-effect-transparent-11546868080xgtiz6hxid.png'} 
            name={'Trufas do Sim'} 
            nicho={'Doces'} 
            descricao={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec ante vel arcu vulputate ultrices ut non arcu.'} 
            />

            <Negocio 
            link={'/vitrine'} 
            img={'https://toppng.com/uploads/preview/and-blank-effect-transparent-11546868080xgtiz6hxid.png'} 
            name={'Trufas do Sim'} 
            nicho={'Doces'} 
            descricao={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec ante vel arcu vulputate ultrices ut non arcu.'} 
            />

            <Negocio 
            link={'/vitrine'} 
            img={'https://toppng.com/uploads/preview/and-blank-effect-transparent-11546868080xgtiz6hxid.png'} 
            name={'Trufas do Sim'} 
            nicho={'Doces'} 
            descricao={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec ante vel arcu vulputate ultrices ut non arcu.'} 
            />

            <Negocio 
            link={'/vitrine'} 
            img={'https://toppng.com/uploads/preview/and-blank-effect-transparent-11546868080xgtiz6hxid.png'} 
            name={'Trufas do Sim'} 
            nicho={'Doces'} 
            descricao={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec ante vel arcu vulputate ultrices ut non arcu.'} 
            />

            <Negocio 
            link={'/vitrine'} 
            img={'https://toppng.com/uploads/preview/and-blank-effect-transparent-11546868080xgtiz6hxid.png'} 
            name={'Trufas do Sim'} 
            nicho={'Doces'} 
            descricao={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec ante vel arcu vulputate ultrices ut non arcu.'} 
            />

            <Negocio 
            link={'/vitrine'} 
            img={'https://toppng.com/uploads/preview/and-blank-effect-transparent-11546868080xgtiz6hxid.png'} 
            name={'Trufas do Sim'} 
            nicho={'Doces'} 
            descricao={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec ante vel arcu vulputate ultrices ut non arcu.'} 
            />

            <Negocio 
            link={'/vitrine'} 
            img={'https://toppng.com/uploads/preview/and-blank-effect-transparent-11546868080xgtiz6hxid.png'} 
            name={'Trufas do Sim'} 
            nicho={'Doces'} 
            descricao={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec ante vel arcu vulputate ultrices ut non arcu.'} 
            />

            <Negocio 
            link={'/vitrine'} 
            img={'https://toppng.com/uploads/preview/and-blank-effect-transparent-11546868080xgtiz6hxid.png'} 
            name={'Trufas do Sim'} 
            nicho={'Doces'} 
            descricao={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec ante vel arcu vulputate ultrices ut non arcu.'} 
            />

            <Negocio 
            link={'/vitrine'} 
            img={'https://toppng.com/uploads/preview/and-blank-effect-transparent-11546868080xgtiz6hxid.png'} 
            name={'Trufas do Sim'} 
            nicho={'Doces'} 
            descricao={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec ante vel arcu vulputate ultrices ut non arcu.'} 
            />

          </div>

        </section>
        
        <div id='destaques'>
            <TitleBorda title={'Recomendações'}></TitleBorda>
            <div id='linhaDestaques'>
                <Destaque idBox={'quadradoLaranja'} path={'/vitrine'} foto={''} nome={'Trufas do Sim'} nicho={'Gastronomia'} />
                <Destaque idBox={'quadradoLaranja'} path={''} foto={''} nome={'Fisio em casa'} nicho={'Saúde'} />
                <Destaque idBox={'quadradoLaranja'} path={''} foto={''} nome={'Artelane'} nicho={'Artesanato'} />
                {/* <Destaque idBox={'quadradoLaranja'} path={''} foto={''} nome={'Vintage Vibe'} nicho={'Moda'} />
                <Destaque idBox={'quadradoLaranja'} path={''} foto={''} nome={'Pitágoras'} nicho={'Educação'} /> */}
            </div>
        </div>
      </body>
      <Footer />
    </>
  )
}

export default Pesquisa;