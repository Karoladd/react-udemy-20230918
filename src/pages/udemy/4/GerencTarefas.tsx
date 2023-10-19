import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CriarTarefa from './pages/CriarTarefa'
import AtualizarTarefa from './pages/AtualizarTarefa'

export default function GerencTarefas(){

  return (
    <div>
      <h1>Gerenciador de Tarefas</h1>
      <Routes>
        <Route path="criarTarefa" element={<CriarTarefa />}/>
        <Route path='atualizarTarefa/:id/*' element={<AtualizarTarefa />}/>
        
      </Routes>
    </div>
  )
}


