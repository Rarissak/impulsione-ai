import '../adminSolicitacoes/admin.css'
import InfoEmpreendedores from '../../../components/infoEmpreendedores/infoEmpreendedores.jsx'
import BarraLinkExterno from '../../../components/barraLinkExterno/BarraLinkExterno.jsx'

//FAZER O FOR PARA AS INFORMAÇÕES SE REPETIREM
function Admin(){
    return (
        <body id='pageAdmin'>
            <h1 className='title' id='tituloPagina'>PÁGINA DO ADMINISTRADOR</h1>
            <div id='barraLinks'>
                <h3>Solicitações de Cadastro</h3>
                <h3>Alterar Planos</h3>
                <BarraLinkExterno name={"SOLICITAÇÕES DE CADASTRO"} id={'fundoRoxoClaro'} link={'/adminSolicitacoes'}></BarraLinkExterno>
                <BarraLinkExterno name={"ALTERAR PLANOS"} id={'fundoRoxoClaro'} link={'/adminPlanos'}></BarraLinkExterno>
            </div>
            <div className='centroAdm'>
                <h1 className='title'>SOLICITAÇÕES DE CADASTRO</h1>
                <div>
                    <InfoEmpreendedores
                        nicho={'teste'}
                        nomeEmpreendedor={'teste'}
                        nomeNegocio={'teste'}
                        data={'teste'}
                        horario={'teste'}
                        endereco={'teste'}
                        mei={'teste'}
                        modalidade={'teste'}
                        plano={'teste'}
                        insta={'teste'}
                        email={'teste'}
                        numContato={'teste'}
                        face={'teste'}
                        >
                    </InfoEmpreendedores>
                </div>
            </div>

        </body>
        
        
    )
}

export default Admin