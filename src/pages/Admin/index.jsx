import '../Admin/admin.css'
import InfoEmpreendedores from '../../components/infoEmpreendedores/infoEmpreendedores.jsx'

//FAZER O FOR PARA AS INFORMAÇÕES SE REPETIREM
function Admin(){
    return (
        <body id='pageAdmin'>
            <h1 className='title' id='tituloPagina'>PÁGINA DO ADMINISTRADOR</h1>
            <div id='solicitacoes'>
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