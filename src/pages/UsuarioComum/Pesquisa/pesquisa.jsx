import { Link, useParams } from 'react-router-dom';
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
import useAxios, { useAxiosWithDependecies } from '../../../hook/useAxios.js';
import axiosInstance from '../../../helper/axiosInstance.js';
import { useEffect } from 'react';

function Pesquisa() {

  const { nicho, pesquisaUsuario } = useParams();
 
   const [nichoPesquisado, nichosPesquisadoloading, nichosPesquisadoError] = useAxiosWithDependecies({
      axiosInstance: axiosInstance,
      method: 'GET',
      url: 'nichos/nome/' + nicho
    }, [nicho]);
 
   const [pesquisa, pesquisadoloading, pesquisaError] = useAxiosWithDependecies({
      axiosInstance: axiosInstance,
      method: "GET",
      url: "buscar/empreendedores/" + pesquisaUsuario
    }, [pesquisaUsuario]);
  

  const [nichos, nichosloading, nichoError] = useAxios({
    axiosInstance: axiosInstance,
    method: 'GET',
    url: 'nichos'
  })
  
  const [empreendedores, loading, error] = useAxios({
    axiosInstance: axiosInstance,
    method: 'GET',
    url: 'empreendedores'
  })

  if (nicho) {

    return (
      <>
        <Header />
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
              
              {!nichosPesquisadoloading && nichoPesquisado?.empreendimentos?.map((empreendimento) => (
                <Negocio
                  img={'https://toppng.com/uploads/preview/and-blank-effect-transparent-11546868080xgtiz6hxid.png'}
                  key={empreendimento.idEmpreededor}
                  link={'/vitrine'}
                  name={empreendimento.nomeEmpreendimento}
                  nicho={nichoPesquisado.nicho}
                  descricao={empreendimento.biografia}

                />
              ))}

              {nichosPesquisadoloading && (
                <h1>LOADING...</h1>
              )}
            </div>

          </section>

          <div id='destaques'>
            <TitleBorda title={'Recomendações'}></TitleBorda>
            <div id='linhaDestaques'>
                        {empreendedores?.slice(0, 5).map((empreendedor, index) => (
                            <Destaque
                                key={empreendedor.idEmpreededor}
                                idBox={'quadradoLaranja'}
                                path={'/vitrine'}
                                foto={'https://toppng.com/uploads/preview/and-blank-effect-transparent-11546868080xgtiz6hxid.png'}
                                nome={empreendedor?.nomeEmpreendimento}
                                nicho={empreendedor?.nicho.nicho} />
                        ))}
                    </div>
          </div>
        </body>
        <Footer />
      </>
    )
  }
  else if (pesquisaUsuario) {
    return (
      <>
        <Header />
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
              
              {!pesquisadoloading && pesquisa !== null &&( pesquisa?.map((empreendimento) => (
                <Negocio
                  img={'https://toppng.com/uploads/preview/and-blank-effect-transparent-11546868080xgtiz6hxid.png'}
                  key={empreendimento.idEmpreededor}
                  link={'/vitrine'}
                  name={empreendimento.nomeEmpreendimento}
                  // nicho={empreendimento.nicho.nicho}
                  descricao={empreendimento.biografia}

                />
              )))}
                           {pesquisadoloading && (
                <h1>LOADING...</h1>
              )}
            </div>

          </section>

          <div id='destaques'>
            <TitleBorda title={'Recomendações'}></TitleBorda>
            <div id='linhaDestaques'>
                        {empreendedores?.slice(0, 5).map((empreendedor) => (
                            <Destaque
                                key={empreendedor.idEmpreededor}
                                idBox={'quadradoLaranja'}
                                path={'/vitrine'}
                                foto={'https://toppng.com/uploads/preview/and-blank-effect-transparent-11546868080xgtiz6hxid.png'}
                                nome={empreendedor?.nomeEmpreendimento}
                                // nicho={empreendedor?.nicho.nicho} 
                                />
                        ))}
                    </div>
          </div>
        </body>
        <Footer />
      </>
    )

  }
  
  return (<>
    <Header />
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
          
          {!loading && empreendedores?.map((empreendimento) => (
            <Negocio
              img={'https://toppng.com/uploads/preview/and-blank-effect-transparent-11546868080xgtiz6hxid.png'}
              key={empreendimento.idEmpreededor}
              link={'/vitrine'}
              name={empreendimento.nomeEmpreendimento}
              nicho={empreendimento.nicho.nicho}
              descricao={empreendimento.biografia}

            />
          ))}

          {loading && (
            <h1>LOADING...</h1>
          )}
        </div>

      </section>

      <div id='destaques'>
        <TitleBorda title={'Recomendações'}></TitleBorda>
        <div id='linhaDestaques'>
                        {empreendedores.slice(0, 5).map((empreendedor, index) => (
                            <Destaque
                                key={empreendedor.idEmpreededor}
                                idBox={'quadradoLaranja'}
                                path={'/vitrine'}
                                foto={'https://toppng.com/uploads/preview/and-blank-effect-transparent-11546868080xgtiz6hxid.png'}
                                nome={empreendedor?.nomeEmpreendimento}
                                nicho={empreendedor?.nicho.nicho} />
                        ))}
                    </div>
      </div>
    </body>
    <Footer />
  </>)
}

export default Pesquisa;