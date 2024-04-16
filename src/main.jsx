import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MeusDados from './components/meusDados/MeusDados.jsx'
import EditarDadosEmp from './pages/UsuarioComum/editarDadosEmp/editarDadosEmp.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <MeusDados></MeusDados>
    <EditarDadosEmp></EditarDadosEmp> */}
    <App />
  </React.StrictMode>,
)
