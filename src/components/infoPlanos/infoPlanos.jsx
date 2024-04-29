import React, {useState} from 'react';
import '../infoPlanos/infoPlanos.css';
import IconLixeira from '../../assets/lixeira.svg'


// function adicionarBeneficio() {
//     const outroBeneficio = document.querySelector('.outroBeneficio'); // Pega a div "outroBeneficio" original
//     const clone = outroBeneficio.cloneNode(true); // Cria uma cópia completa da div
//     outroBeneficio.parentNode.insertBefore(clone, outroBeneficio.nextSibling); // Insere a cópia após a div original

//     const adicionarBtn = document.querySelector('.addBeneficio'); // Seleciona o botão "adicionar beneficio"
//     adicionarBtn.addEventListener('click', adicionarBeneficio); // Adiciona o evento click à função

//     const outroBeneficios = document.querySelectorAll('.outroBeneficio'); // Pega todas as divs "outroBeneficio"

//     outroBeneficios.forEach(beneficio => {
//         const apagarBtn = beneficio.querySelector('.excluirBeneficio'); // Seleciona o botão "apagar" dentro da div
//         apagarBtn.addEventListener('click', () => {
//             beneficio.parentNode.removeChild(beneficio); // Remove a div "outroBeneficio" pai
//         });
//     });
// }

// const [beneficios, setBeneficios] = useState([]);

// function adicionarBeneficio() {
//     const novoBeneficio = { id: Math.random(), valor: '' }; // Crie um novo objeto de benefício
//     setBeneficios([...beneficios, novoBeneficio]); // Atualize o estado com o novo benefício
//   }

// function removerBeneficio(idBeneficio) {
//     setBeneficios(beneficios.filter((beneficio) => beneficio.id !== idBeneficio));
// }


function InfoPlanos({nomePlano, valorPlano, beneficio, beneficios}){

    const lista = beneficios;

    const [atualizarPlano, setAtualizarPlano] = useState(false);

    const toggleAtualizar = () => {
        setAtualizarPlano(!atualizarPlano);
    };

    return(
        <section className="blocoPlano">
            <div id='infoFixa'>

                <div id='blocoRow'>
                    <div className="textoRow">
                        <h3>Nome do Plano:</h3>
                        <h3 className='dado'>{nomePlano}</h3>
                    </div>
                    <div className="textoRow">
                        <h3>Valor atual do Plano:</h3>
                        <h3 className='dado'>R$ {valorPlano}</h3>
                    </div>
                </div>
                <div>
                    <h3>Benefícios:</h3>
                    {lista.map((item) => (
                        <li className='dado' key={item}>{item}</li>
                    ))}
                </div>
                <div id='botoesPlanos'>
                    <button className='botaoVermelho title'>Excluir Plano</button>
                    <button onClick={toggleAtualizar} id='atualizar' className="title">Atualizar Plano</button>
                </div>
            </div>
            
            {atualizarPlano && (
                <form id='formPlanos'>
                    <h2 className='title'>Atualize os dados do plano</h2>
                    <div>
                       <fieldset>
                            <label>Nome do Plano</label>
                            <input type='text'></input>
                        </fieldset>
                        <fieldset>
                            <label>Valor do Plano</label>
                            <div className="textoRow">
                                <h3>R$</h3>
                                <input type='number'></input>                            </div>
                        </fieldset> 
                    </div>
                    <fieldset>
                        <label>Benefícios</label>
                        <input type='text'></input>
                        <div className='outroBeneficio'>
                            <input type='text'></input>
                            <button className="title" id='excluirBeneficio'>
                                <img src={IconLixeira} alt='icon de lixeira'></img>
                            </button>
                        </div>
                        <div className='outroBeneficio'>
                            <input type='text'></input>
                            <button className="title" id='excluirBeneficio'>
                                <img src={IconLixeira} alt='icon de lixeira'></img>
                            </button>
                        </div>
                        <div className='outroBeneficio'>
                            <input type='text'></input>
                            <button className="title" id='excluirBeneficio'>
                                <img src={IconLixeira} alt='icon de lixeira'></img>
                            </button>
                        </div>
                        <div className='outroBeneficio'>
                            <input type='text'></input>
                            <button className="title" id='excluirBeneficio'>
                                <img src={IconLixeira} alt='icon de lixeira'></img>    
                            </button>
                        </div>
                        {/* {beneficios.map((beneficio) => (
                            <div key={beneficio.id} className="outroBeneficio">
                                <input type="text" value={beneficio.valor} onChange={(e) => {
                                const updatedBeneficios = [...beneficios];
                                updatedBeneficios.find((b) => b.id === beneficio.id).valor = e.target.value;
                                setBeneficios(updatedBeneficios);
                                }} />
                                <button className="title" onClick={() => removerBeneficio(beneficio.id)}>apagar</button>
                            </div>
                        ))} */}
                        {/* <button className="title" id="addBeneficio" onClick={adicionarBeneficio}>adicionar benefício</button> */}
                        {/* <button className="title" id="addBeneficio">adicionar benefício</button> */}
                    </fieldset>
                    <div>
                        <button className="title botaoVermelho" type='reset'>Cancelar</button>
                        <button className="title" type='submit'>Confirmar Atualização</button>
                    </div>
                </form>
            )}

        </section>
    )
}
export default InfoPlanos