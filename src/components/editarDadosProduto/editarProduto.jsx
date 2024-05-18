// import React, { useEffect, useState } from "react";
// import useAxios from "../../hook/useAxios";
// import axios from "axios";
// import axiosInstance from "../../helper/axiosInstance";

// import './editarDadosEmp.css';
// import iconModalClose from '../../assets/iconLoginModalClose.svg';
// import BoxInfo from "../boxInfo/boxInfo";
// import InstagramIcon from '../../assets/instagramRoxo.svg';
// import FacebookIcon from '../../assets/facebookRoxo.svg';
// import FotoExemplo from "../../assets/trufasDoSim.png"
// import { PegandoDados, MostrarDadosAtualizados } from "../meusDados/MeusDados";

// export function ToggleModalEditData()
// {
//     const editarDadosCentralize = document.querySelector("#editarDadosCentralize");
//     editarDadosCentralize.classList.toggle("hideEditarDados");

//     const back = document.querySelector("#backEditarDados");
//     back.classList.toggle("hideEditarDados");
// }

// function EditarDadosEmp() {

//     const token = localStorage.getItem('token');
//     const id = localStorage.getItem('id');
//     const uri = localStorage.getItem('uri');
   
//     const [usuarioLogado, loading, error] = useAxios({
//         axiosInstance: axiosInstance,
//         method: 'GET',
//         url: uri + '/' + id
//     });

//     const 

//     const [nome, setNome] = useState('');
//     const [preco, setPreco] = useState('');
//     const [urlFoto, setUrlFoto] = useState('');

//     useEffect(() => {
//         if (usuarioLogado) {
//             setNomeCompleto(usuarioLogado.nomeCompleto);
//             setDataNascimento(usuarioLogado.dataNascimento);
//             setCpf(usuarioLogado.cpf);
//             setNomeEmpreendimento(usuarioLogado.nomeEmpreendimento);
//             setModalidade(usuarioLogado.modalidade);
//             setSite(usuarioLogado.site);
//             setMei(usuarioLogado.mei);
//             setEmail(usuarioLogado.email);
//             setTelefone(usuarioLogado.telefone);
//             setInstagram(usuarioLogado.instagram);
//             setFacebook(usuarioLogado.facebook);
//             setPlanoAssinatura(usuarioLogado.planoAssinatura);
//             // setUf(endereco.uf);
//             // setCidade(endereco.cidade);
//             // setBairro(endereco.bairro);  
//             // setLogradouro(endereco.logradouro);
//             // setNumero(endereco.numero);
//         }
//     }, [usuarioLogado]);

//     const handleSubmitPerfil = async (event) => {
//         event.preventDefault();

//         const elementoNome = document.getElementById("inputNome").value;
//         const elementoDataNascimento = document.getElementById("inputDataNascimento").value;
//         // const elementoFotoPerfil = document.getElementById("fotoPerfil");
//         const elementoCPF = document.getElementById("inputCPF").value;
//         // const elementoEndereco = document.getElementById("inputEndereco").value;
//         const elementoNomeNegocio = document.getElementById("inputNomeNegocio").value;
//         const elementoNicho = document.getElementById("inputNicho").value;
//         const elementoModalidade = document.getElementById("inputModalidade").value;
//         const elementoSite = document.getElementById("inputSite").value;
//         const elementoMEI = document.getElementById("inputMEI").value;
//         const elementoEmail = document.getElementById("inputEmail").value;
//         const elementoTelefone = document.getElementById("inputTel").value;
//         const elementoInstagram = document.getElementById("inputInsta").value;
//         const elementoFacebook = document.getElementById("inputFace").value;
//         const elementoImg = document.getElementById("inputImg").value;

//         const jsonDados = {
//             "nomeCompleto": elementoNome,
//             "dataNascimento": elementoDataNascimento,
//             "cpf": elementoCPF,
//             "mei": elementoMEI,
//             "nomeEmpreendimento": elementoNomeNegocio,
//             "nicho": elementoNicho,
//             "modalidade": elementoModalidade,
//             "site": elementoSite,
//             "email": elementoEmail,
//             "telefone": elementoTelefone,
//             "instagram": elementoInstagram,
//             "facebook": elementoFacebook,
//             "biografia": usuarioLogado.biografia,
//             "planoAssinatura": usuarioLogado.planoAssinatura,
//             "username": elementoEmail
//         };

//         const empreendedorId = localStorage.getItem('id');
//         console.log(empreendedorId);

//         axios.put(`http://localhost:8080/empreendedores/${empreendedorId}`, jsonDados)
//             .then(response => {
//                 console.log('Perfil atualizada com sucesso:', response.data);
//             })
//             .catch(error => {
//                 console.error('Erro ao atualizar perfil:', error);
//             });
//     };

//     return(
//         <div id="backEditarDados" className="hideEditarDados">
//             <div id="editarDadosCentralize" className="hideEditarDados">
//                 <div id="editarDadosContainer">
//                     <div>
//                         <button id="closeModal" onClick={ToggleModalEditData}>
//                             <img src={iconModalClose} alt="icone para fechar o modal, tem formato de X"/>
//                         </button>
//                     </div>
//                     <BoxInfo title={'Editar Produto'} idBox='titleBoxBranco' idDivisor='divisorBranco'></BoxInfo>
//                     <div id="editarDadosBody">
//                         <form>
//                         <span className="nameField">Nome Completo</span>
//                         <input 
//                             className="linhaProduto" 
//                             type="text"  
//                             required  
//                             id="inputNomeProduto" 
//                             value={nome}
//                             onChange={(e) => setNome(e.target.value)}
//                             size={36}
//                         />
//                         </form>
                    
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default EditarDadosEmp;
