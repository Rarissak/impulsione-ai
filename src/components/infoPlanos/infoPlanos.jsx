import React, {useEffect, useState} from 'react';
import '../infoPlanos/infoPlanos.css';
import IconLixeira from '../../assets/lixeira.svg'
import axiosInstance, { axiosInstanceToken } from '../../helper/axiosInstance';
import useAxios, { useAxiosWithDependecies, useAxiosWithDependeciesOnChange } from '../../hook/useAxios';


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


function InfoPlanos({nomePlano, valorPlano, idPLano, beneficios}){

    const [ListaBeneficios,setBeneficios] = useState([]);
    const [novoNomePlano, setNovoNomePlano] = useState('')
    const [novovalorPlano, setNovoValorPlano] = useState(0.00) 
    const [atualizarPlano, setAtualizarPlano] = useState(false);
    const [isDelete, setDelete] = useState(false);

    useEffect(()=>{
        setBeneficios(beneficios)
        setNovoNomePlano(nomePlano)
        setNovoValorPlano(valorPlano)
    },[])
    
    function deleteBeneficio(index) {
        setBeneficios(prevBeneficios => {
            const newBeneficios = [...prevBeneficios];
            newBeneficios.splice(index, 1);
            return newBeneficios;
        });
    }

    const enviarDados = () => {
        
        axiosInstanceToken().put("/assinaturas/" + idPLano,{
            nome: novoNomePlano,
            descricao: "nova desc",
            beneficios: ListaBeneficios.join(","),
            preco: novovalorPlano
        })
        .then((res) =>{
            console.log(res.data)
         }).catch((error) => {
            
             console.log(error);
         })
         .finally(()=>{
     
         })
    }

    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Qualquer lógica adicional de manipulação do valor pode ser feita aqui
        console.log('Valor submetido:');
    };
    const adicionarBeneficio = (event) => {
        
        if (event.key === 'Enter') {
            event.preventDefault()
            const novoBeneficio = event.target.value;
            setBeneficios(prevBeneficios => [...prevBeneficios, novoBeneficio]);
            event.target.value = '';
        }
    };

    const mudarNomePlano = (event) => {
        setNovoNomePlano(event.target.value)
    };

    const mudarValorPlano = (event) => {
        setNovoValorPlano(event.target.value)
    };

    const toggleAtualizar = () => {
       
        setAtualizarPlano(!atualizarPlano);
        
    };

    const toggleExcluir = async () => {
       
        setDelete(true)
        await axiosInstanceToken().delete("/assinaturas/" + idPLano)
        .then((res) =>{
          console.log(res.data)
       }).catch((error) => {
          
           console.log(error);
       })
       .finally(()=>{
           setDelete(false)
           window.location.reload()
       })
        
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
                    {beneficios.map((item) => (
                        <li className='dado' key={item}>{item}</li>
                    ))}
                </div>
                <div id='botoesPlanos'>
                    <button onClick={toggleExcluir} className='botaoVermelho title'>Excluir Plano</button>
                    <button onClick={toggleAtualizar} id='atualizar' className="title">Atualizar Plano</button>
                </div>
            </div>
            
            {atualizarPlano && (
                <form id='formPlanos'>
                    <h2 className='title'>Atualize os dados do plano</h2>
                    <div>
                       <fieldset>
                            <label>Nome do Plano</label>
                            <input type='text' value={nomePlano} onChange={mudarNomePlano} ></input>
                        </fieldset>
                        <fieldset>
                            <label>Valor do Plano</label>
                            <div className="textoRow">
                                <h3>R$</h3>
                                <input type='number' value={valorPlano} onChange={mudarValorPlano}></input>                            </div>
                        </fieldset> 
                    </div>
                    <fieldset>
                        <label>Benefícios</label>
                        <input type='text'  onKeyDown={adicionarBeneficio}></input>
                        {ListaBeneficios.map((beneficio, index) => (
                            <div className='outroBeneficio' key={idPLano + index}>
                            <input type='text' placeholder ={beneficio}></input>
                            <button onClick={() => deleteBeneficio(index)} className="title" type='button' id='excluirBeneficio' >
                                <img src={IconLixeira}  alt='icon de lixeira'></img>
                            </button>
                        </div>
                        ))}
                    </fieldset>
                    <div>
                        <button className="title botaoVermelho" type='reset'>Cancelar</button>
                        <button className="title" type='submit' onClick={enviarDados}>Confirmar Atualização</button>
                    </div>
                </form>
            )}

        </section>
    )
}
export default InfoPlanos