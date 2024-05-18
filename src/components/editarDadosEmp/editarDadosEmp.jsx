import React, { useEffect, useState } from "react";
import useAxios from "../../hook/useAxios";
import axios from "axios";
import axiosInstance from "../../helper/axiosInstance";

import './editarDadosEmp.css';
import iconModalClose from '../../assets/iconLoginModalClose.svg';
import BoxInfo from "../boxInfo/boxInfo";
import InstagramIcon from '../../assets/instagramRoxo.svg';
import FacebookIcon from '../../assets/facebookRoxo.svg';
import FotoExemplo from "../../assets/trufasDoSim.png"
import { PegandoDados, MostrarDadosAtualizados } from "../meusDados/MeusDados";

export function ToggleModalEditData()
{
    const editarDadosCentralize = document.querySelector("#editarDadosCentralize");
    editarDadosCentralize.classList.toggle("hideEditarDados");

    const back = document.querySelector("#backEditarDados");
    back.classList.toggle("hideEditarDados");
}

function EditarDadosEmp() {

    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id');
    const uri = localStorage.getItem('uri');
   
    const [usuarioLogado, loading, error] = useAxios({
        axiosInstance: axiosInstance,
        method: 'GET',
        url: uri + '/' + id
    });

    const [nomeCompleto, setNomeCompleto] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [cpf, setCpf] = useState('');
    const [nomeEmpreendimento, setNomeEmpreendimento] = useState('');
    const [modalidade, setModalidade] = useState('');
    const [site, setSite] = useState('');
    const [mei, setMei] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [instagram, setInstagram] = useState('');
    const [facebook, setFacebook] = useState('');
    const [planoAssinatura, setPlanoAssinatura] = useState('');

    const [uf, setUf] = useState('');
    const [cidade, setCidade] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');

    useEffect(() => {
        if (usuarioLogado) {
            setNomeCompleto(usuarioLogado.nomeCompleto);
            setDataNascimento(usuarioLogado.dataNascimento);
            setCpf(usuarioLogado.cpf);
            setNomeEmpreendimento(usuarioLogado.nomeEmpreendimento);
            setModalidade(usuarioLogado.modalidade);
            setSite(usuarioLogado.site);
            setMei(usuarioLogado.mei);
            setEmail(usuarioLogado.email);
            setTelefone(usuarioLogado.telefone);
            setInstagram(usuarioLogado.instagram);
            setFacebook(usuarioLogado.facebook);
            setPlanoAssinatura(usuarioLogado.planoAssinatura);
            // setUf(endereco.uf);
            // setCidade(endereco.cidade);
            // setBairro(endereco.bairro);  
            // setLogradouro(endereco.logradouro);
            // setNumero(endereco.numero);
        }
    }, [usuarioLogado]);

    const handleSubmitPerfil = async (event) => {
        event.preventDefault();

        const elementoNome = document.getElementById("inputNome").value;
        const elementoDataNascimento = document.getElementById("inputDataNascimento").value;
        // const elementoFotoPerfil = document.getElementById("fotoPerfil");
        const elementoCPF = document.getElementById("inputCPF").value;
        // const elementoEndereco = document.getElementById("inputEndereco").value;
        const elementoNomeNegocio = document.getElementById("inputNomeNegocio").value;
        const elementoNicho = document.getElementById("inputNicho").value;
        const elementoModalidade = document.getElementById("inputModalidade").value;
        const elementoSite = document.getElementById("inputSite").value;
        const elementoMEI = document.getElementById("inputMEI").value;
        const elementoEmail = document.getElementById("inputEmail").value;
        const elementoTelefone = document.getElementById("inputTel").value;
        const elementoInstagram = document.getElementById("inputInsta").value;
        const elementoFacebook = document.getElementById("inputFace").value;
        const elementoImg = document.getElementById("inputImg").value;

        const jsonDados = {
            "nomeCompleto": elementoNome,
            "dataNascimento": elementoDataNascimento,
            "cpf": elementoCPF,
            "mei": elementoMEI,
            "nomeEmpreendimento": elementoNomeNegocio,
            "nicho": elementoNicho,
            "modalidade": elementoModalidade,
            "site": elementoSite,
            "email": elementoEmail,
            "telefone": elementoTelefone,
            "instagram": elementoInstagram,
            "facebook": elementoFacebook,
            "biografia": usuarioLogado.biografia,
            "planoAssinatura": usuarioLogado.planoAssinatura,
            "username": elementoEmail
        };

        const empreendedorId = localStorage.getItem('id');
        console.log(empreendedorId);

        axios.put(`http://localhost:8080/empreendedores/${empreendedorId}`, jsonDados)
            .then(response => {
                alert("Perfil atualizado com sucesso!");
                console.log('Perfil atualizada com sucesso:', response.data);
            })
            .catch(error => {
                alert("Não foi possivel atualizar seus dados :(");
                console.error('Erro ao atualizar perfil:', error);
            })
            .finally(() => {
                window.location.reload();            
            });
    };

    return(
        <div id="backEditarDados" className="hideEditarDados">
            <div id="editarDadosCentralize" className="hideEditarDados">
                <div id="editarDadosContainer">
                    <div>
                        <button id="closeModal" onClick={ToggleModalEditData}>
                            <img src={iconModalClose} alt="icone para fechar o modal, tem formato de X"/>
                        </button>
                    </div>
                    <BoxInfo title={'Editar Dados'} idBox='titleBoxBranco' idDivisor='divisorBranco'></BoxInfo>
                    <div id="editarDadosBody">
                        <div id="scroll">
                            <form 
                                id="formContainerModalEdit" 
                                onSubmit={handleSubmitPerfil}
                            >
                                <fieldset id="fieldSetFoto">
                                    <div id="separarCampos">
                                        <div className="fieldType1">
                                            <span className="nameField">Nome Completo</span>
                                            <input 
                                                className="conteudo" 
                                                type="text"  
                                                required  
                                                id="inputNome" 
                                                value={nomeCompleto}
                                                onChange={(e) => setNomeCompleto(e.target.value)}
                                                size={36}
                                            />
                                        </div>
                                        <div className="fieldType1">
                                            <span className="nameField">Data de Nascimento</span>
                                            <input 
                                                className="conteudo"  
                                                required  
                                                type="date" 
                                                size={12} 
                                                value={dataNascimento}
                                                onChange={(e) => setDataNascimento(e.target.value)}
                                                id="inputDataNascimento"
                                            />
                                        </div> 
                                    </div>
                                    <div className="fieldType1" style={{marginBottom: '15px', marginTop: '15px'}}>
                                        <span className="nameField">Escolha uma foto</span>
                                        <input 
                                            type="file" 
                                            id="inputImg" 
                                            src={FotoExemplo}
                                        />
                                    </div>
                                </fieldset>
                                <fieldset className="fieldSetConfig">
                                    <div className="fieldType1">
                                        <span className="nameField">CPF</span>
                                        <input 
                                            className="conteudo" 
                                            required 
                                            type="text" 
                                            id="inputCPF" 
                                            pattern="^(\d{3}\.\d{3}\.\d{3}-\d{2}|\d{11})$" 
                                            maxLength="14" 
                                            placeholder="123.123.123-12"
                                            value={cpf}
                                            onChange={(e) => setCpf(e.target.value)}
                                        />
                                    </div>
                                    <div className="fieldType1">
                                        <span className="nameField">Endereço Completo</span>
                                        <input 
                                            className="conteudo" 
                                            required 
                                            type="text" 
                                            id="inputEndereco"
                                        />
                                    </div>
                                </fieldset>
                                <fieldset id="fieldSetNegocio" className="corLaranja">
                                    <div className="fieldType1">
                                        <span className="nameField">Nome do negócio</span>
                                        <input 
                                            className="conteudo" 
                                            type="text" 
                                            required 
                                            id="inputNomeNegocio"
                                            value={nomeEmpreendimento}
                                            onChange={(e) => setNomeEmpreendimento(e.target.value)}
                                        />  
                                    </div>
                                    <div className="fieldType1">
                                        <span className="nameField">Nicho do Trabalho</span>
                                        <select 
                                            className="conteudo" 
                                            id="inputNicho"
                                            value={usuarioLogado.nicho || ''}
                                            onChange={(e) => {
                                                const updatedUser = { ...usuarioLogado, nicho: e.target.value };
                                                setUsuarioLogado(updatedUser);
                                            }}
                                        >
                                            <option value="">Selecione o Nicho</option>
                                            <option value="1">Gastronomia</option>
                                            <option value="2">Moda</option>
                                            <option value="3">Artesanato</option>
                                            <option value="4">Tecnologia</option>
                                            <option value="5">Educação</option>
                                            <option value="6">Saúde</option>
                                            <option value="7">Estética</option>
                                            <option value="8">Diversos</option>
                                        </select>
                                    </div>
                                    <div className="fieldType1">
                                        <span className="nameField">Modalidade de Serviço</span>
                                        <select 
                                            className="conteudo" 
                                            id="inputModalidade"
                                            value={modalidade}
                                            onChange={(e) => setModalidade(e.target.value)}
                                        >
                                            <option value="">Selecione uma modalidade</option>
                                            <option value="presencial">Presencial</option>
                                            <option value="online">Online</option>
                                            <option value="hibrido">Híbrido</option>
                                        </select>  
                                    </div>
                                    <div className="fieldType1">
                                        <span className="nameField">Site do Negócio</span>
                                        <input 
                                            className="conteudo" 
                                            type="url" 
                                            required 
                                            id="inputSite"
                                            value={site}
                                            onChange={(e) => setSite(e.target.value)}
                                        />      
                                    </div>
                                    <div className="fieldType1">
                                        <span className="nameField">MEI</span>
                                        <input 
                                            className="conteudo" 
                                            type="text" 
                                            id="inputMEI"
                                            pattern="^(\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}|\d{14})$" 
                                            maxLength="18"
                                            placeholder="12.345.678/0001-90"
                                            value={mei}
                                            onChange={(e) => setMei(e.target.value)}
                                        />      
                                    </div>
                                </fieldset>
                                <fieldset id="fieldSetEmail">
                                    <div className="fieldType1">
                                        <span className="nameField">Email Cadastrado</span>
                                        <input 
                                            className="conteudo" 
                                            type="email" 
                                            id="inputEmail"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />      
                                    </div>
                                    <div className="fieldType1">
                                        <span className="nameField">Número de Contato</span>
                                        <input 
                                            className="conteudo" 
                                            type="tel"  
                                            required
                                            pattern="(?:\(\d{2}\) \d{5}-\d{4}|\d{11})"
                                            placeholder="(11) 92222-3333 ou só números"
                                            title="(11) 92222-3333 ou apenas números"
                                            id="inputTel"
                                            value={telefone}
                                            onChange={(e) => setTelefone(e.target.value)}
                                        />      
                                    </div>
                                </fieldset>
                                <fieldset id="fieldSetIcon">
                                    <div className="fieldType2 iconCenter">
                                        <img src={InstagramIcon}  alt="Icone do instagram" />
                                        <input 
                                            className="conteudo" 
                                            type="text" 
                                            id="inputInsta" 
                                            placeholder="@"
                                            value={instagram}
                                            onChange={(e) => setInstagram(e.target.value)}
                                        />     
                                    </div>
                                    <div className="fieldType2 iconCenter">
                                        <img src={FacebookIcon}  alt="Icone do facebook"/>
                                        <input 
                                            className="conteudo" 
                                            type="url" 
                                            id="inputFace"
                                            value={facebook}
                                            onChange={(e) => setFacebook(e.target.value)}
                                        />      
                                    </div>
                                </fieldset>
                                <div className="buttonsFormEdit">  
                                    <button id="editButton" type="submit">SALVAR DADOS</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditarDadosEmp;
