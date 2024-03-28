import './boxInfo.css';
import '../../index.css';
// import GrowIcon from '../../assets/growIcon.svg';
// import StoreIcon from '../../assets/storeIcon.svg';
// import PuzzleIcon from '../../assets/puzzleIcon.svg'; 
// import Informations from '../informations/informations.jsx';

function BoxInfo({title, idBox, idDivisor}) {
    return(
        <section>
            <div className="titleBox" id={idBox}>
                <h1 className="title">{title}</h1>
            </div>
            <div className='divisor' id={idDivisor}></div>
        </section>
    )
}
export default BoxInfo