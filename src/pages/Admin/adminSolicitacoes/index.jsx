import '../adminSolicitacoes/admin.css'
import InfoEmpreendedores from '../../../components/infoEmpreendedores/infoEmpreendedores.jsx'
import BarraLinkExterno from '../../../components/barraLinkExterno/BarraLinkExterno.jsx'
import useAxios from '../../../hook/useAxios.js'
import axiosInstance, { axiosInstanceToken } from '../../../helper/axiosInstance.js'

//FAZER O FOR PARA AS INFORMAÇÕES SE REPETIREM
function Admin(){

    const [empreendedoresInativos, InfoEmpreendedoresInativosLoading, empreendedoresInativosError] = useAxios({
        axiosInstance: axiosInstanceToken(),
        method:"GET",
        url:"admin/solicitacoes" 
    })

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
                    {!InfoEmpreendedoresInativosLoading && ( empreendedoresInativos.map((empreendedorInativo) => (
                        <InfoEmpreendedores
                            key={empreendedorInativo.idEmpreededor}
                            idEmpreendedor={empreendedorInativo.idEmpreededor}
                            nomeEmpreendedor={empreendedorInativo.nomeCompleto}
                            nomeNegocio={empreendedorInativo.nomeEmpreendimento}
                            data={"17/05/2024"}
                            horario={"9:45"}
                            mei={empreendedorInativo.mei}
                            nicho={empreendedorInativo.nicho.nicho}
                            modalidade={empreendedorInativo.modalidade}
                            plano={empreendedorInativo.planoAssinatura}
                            insta={empreendedorInativo.instagram}
                            email={empreendedorInativo.email}
                            numContato={empreendedorInativo.telefone}
                            face={empreendedorInativo.facebook}
                        />
                    ))
                   ) }
                </div>
            </div>

        </body>
        
        
    )
}

export default Admin