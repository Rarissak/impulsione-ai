import '../../index.css'
import '../informations/informations.css'

function Informations({icon, titulo, texto}){
    return(
        <div id="setInformation">
            <img id="iconInfo" src={icon} alt={titulo}></img>
            <div id='infos'>
                <h2 id="titleInfo">{titulo}</h2>
                <h5 id="textInformations">{texto}</h5>
            </div>
        </div>
    )
}

export default Informations