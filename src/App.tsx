import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from 'react-bootstrap';
import './App.css';
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import CamLogin from './pages/CamLogin'
import CamSignup from './pages/CamSignup'
import OlaMundo from './pages/udemy/1/OlaMundo'
import Calculadora from './pages/udemy/2/Calculadora'
import ConvMoedas from './pages/udemy/3/ConvMoedas'
import GerencTarefas from './pages/udemy/4/GerencTarefas'
import GerencApiRest from './pages/udemy/5/GerencApiRest'
import Dashboard from './pages/udemy/6/Dashboard'
import MiniEcom from './pages/udemy/7/MiniEcom'
import UpImg from './pages/udemy/8/UpImg'


import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <Header/>
       <main>
        <Container>
            <Routes>
            <Route path='/' exact element={<Home />}/>
            <Route path='/signup' element={<Signup />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/camLogin' element={<CamLogin />}/>
            <Route path='/ola-mundo' element={<OlaMundo />}/>
            <Route path='/calculadora' element={<Calculadora />}/>
            <Route path='/conversor-moedas' element={<ConvMoedas />}/>
            <Route path='/gerenciador-tarefas' element={<GerencTarefas />}/>
            <Route path='/gerenciador-api-rest' element={<GerencApiRest />}/>
            <Route path='/dashboard' element={<Dashboard />}/>
            <Route path='/mini-ecomerce' element={<MiniEcom />}/>
            <Route path='/upload-imagem' element={<UpImg />}/>
            </Routes>
          </Container>
        </main>
    <Footer/>
    </Router>
  )
}

export default App

