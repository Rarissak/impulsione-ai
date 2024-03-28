import '../../index.css'
import '../informations/informations.css'

function Informations({icon, titulo, texto}){
    return(
        <div id="setInformation">
            <img id="iconInfo" src={icon} alt={titulo}></img>
            <h2 id="titleInfo">{titulo}</h2>
            <p id="textInfo">{texto}</p>
        </div>
    )
}

export default Informations