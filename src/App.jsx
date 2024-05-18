import React from 'react';
import { BrowserRouter as Router, RouterProvider, Route, Routes } from 'react-router-dom';

import './index.css'

import AreaParceiro from './pages/UsuarioComum/AreaParceiro/index.jsx';
import Vitrine from './pages/UsuarioComum/Vitrine/index.jsx';
import Home from './pages/UsuarioComum/Home/index.jsx';
import Login from './pages/UsuarioComum/login/login';
import Sobre from './pages/UsuarioComum/Sobre/sobre.jsx';
import CadastroUsuario from '../src/pages/UsuarioComum/SignUpUser/SignUpUser.jsx';
import CadastroParceiro from '../src/pages/Parceiro/SignUpPartner/SignUpPartner.jsx';
import EsqueciSenha from '../src/pages/UsuarioComum/forgotPassword/forgotPassword.jsx';
import AlterarSenha from '../src/pages/UsuarioComum/changePassword/changePassword.jsx';
import Admin from './pages/Admin/adminSolicitacoes/index.jsx';
import PerfilParceiro from './pages/Parceiro/perfilParceiro/index.jsx';
// import EsqueciSenha from './pages/UsuarioComum/forgotPassword/esqueciSenha.jsx';
import Pesquisa from './pages/UsuarioComum/Pesquisa/pesquisa.jsx';
// <<<<<<< HEAD
import AdminPlanos from './pages/Admin/adminPlanos/index.jsx';
import PerfilUsuario from './pages/UsuarioComum/PerfilUsuario/perfilUsuario.jsx';
// =======
import MeusCartoes from './pages/UsuarioComum/meusCartoes/meusCartoes.jsx';
import MeuPlano from './pages/UsuarioComum/meuPlano/meuPlano.jsx';
// import UserProfile from './components/userProfile/userProfile.jsx';
// >>>>>>> tela-meuPlano

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/sobre' Component={Sobre} />
        <Route path='/areaParceiro' Component={AreaParceiro} />
        <Route path='/login' Component={Login} />
        <Route path='/cadastroUsuario' Component={CadastroUsuario} />
        <Route path='/cadastroParceiro' Component={CadastroParceiro} />
        <Route path='/perfilUsuario' Component={PerfilUsuario}/>
        <Route path='/vitrine/' Component={Vitrine} />
        <Route path='/vitrine/:idEmpreendedor' Component={Vitrine} />
        <Route path='/esqueciSenha' Component={EsqueciSenha}/>
        <Route path='/alterarSenha' Component={AlterarSenha}/>
        <Route path='/adminSolicitacoes' Component={Admin} />
        <Route path='/perfilParceiro' Component={PerfilParceiro} />
        <Route path='/adminPlanos' Component={AdminPlanos} />
        <Route path='/pesquisa' Component={Pesquisa} />
        <Route path='/pesquisa/nicho/:nicho' Component={Pesquisa} />
        <Route path='/pesquisa/:pesquisaUsuario' Component={Pesquisa} />
        <Route path='/meusCartoes' Component={MeusCartoes} />
        <Route path='/meuPlano' Component={MeuPlano} />
      </Routes>
    </Router>
  );
}

export default App