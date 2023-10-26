import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CriarTarefa from './pages/CriarTarefa';
import AtualizarTarefa from './pages/AtualizarTarefa';
import { Button, Form, Spinner, Alert, Modal, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ItensListaTarefas from './pages/ItensListTarefas';
import Paginacao from './pages/Paginacao';
import Ordenacao from './pages/Ordenacao';

const ITENS_POR_PAG = 3;

interface Tarefa {
  descricao: string;
  id: number;
}

export default function GerencTarefas(){

  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [carregarTarefas, setCarregarTarefas] = useState<boolean>(true);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [paginaAtual, setPaginaAtual] = useState<number>(1);
  const [ordenarAsc, setOrdenarAsc] = useState<boolean>(false);
  const [ordenarDesc, setOrdenarDesc] = useState<boolean>(false);
  const [filtroTarefa, setFiltroTarefa] = useState<string>('');

  
  useEffect(() => {
    function obterTarefas() {
      const tarefasDb = localStorage.getItem('tarefas');
      let listaTarefas: Tarefa[] = tarefasDb ? JSON.parse(tarefasDb) : [];

      // Filtrar
      listaTarefas = listaTarefas.filter(
        (t: Tarefa) => t.descricao.toLowerCase().indexOf(filtroTarefa.toLowerCase()) === 0
      );

      // Ordenar
      if (ordenarAsc) {
        listaTarefas.sort((t1, t2) => (t1.descricao.toLowerCase() > t2.descricao.toLowerCase() ? 1 : -1));
      } else if (ordenarDesc) {
        listaTarefas.sort((t1, t2) => (t1.descricao.toLowerCase() < t2.descricao.toLowerCase() ? 1 : -1));
      }

      // Paginar
      const startIndex = (paginaAtual - 1) * ITENS_POR_PAG;
      const endIndex = startIndex + ITENS_POR_PAG;
      const tarefasPaginadas = listaTarefas.slice(startIndex, endIndex);

      setTotalItems(listaTarefas.length);
      setTarefas(tarefasPaginadas);
    }

    if (carregarTarefas) {
      obterTarefas();
      setCarregarTarefas(false);
    }
  }, [carregarTarefas, paginaAtual, ordenarAsc, ordenarDesc, filtroTarefa]);


  function handleMudarPagina(pagina) {
    setPaginaAtual(pagina);
    setCarregarTarefas(true);
  }

  function handleOrdenar(event) {
    event.preventDefault();
    if (!ordenarAsc && !ordenarDesc) {
      setOrdenarAsc(true);
      setOrdenarDesc(false);
    } else if (ordenarAsc) {
      setOrdenarAsc(false);
      setOrdenarDesc(true);
    } else {
      setOrdenarAsc(false);
      setOrdenarDesc(false);
    }
    setCarregarTarefas(true);
  }

  function handleFiltrar(event) {
    setFiltroTarefa(event.target.value);
    setCarregarTarefas(true);
  }

  return (
    <div>
      <h1>Gerenciador de Tarefas</h1>
      <div className="text-center">
      <h3>Tarefas a fazer</h3>

      <Table striped bordered hover responsive data-testid="tabela">
        <thead>
          <tr>
            <th>
              <a href="/" onClick={handleOrdenar}>
                Tarefa
                &nbsp;
                <Ordenacao
                  ordenarAsc={ordenarAsc}
                  ordenarDesc={ordenarDesc} />
              </a>
            </th>
            <th>
              <a href="/gerenciador-tarefas/criarTarefa"
                className="btn btn-success btn-sm"
                data-testid="btn-nova-tarefa">
                <FontAwesomeIcon icon={faPlus} />
                &nbsp;
                Nova tarefa
              </a>
            </th>
          </tr>
          <tr>
            <th>
              <Form.Control
                type="text"
                value={filtroTarefa}
                onChange={handleFiltrar}
                data-testid="txt-tarefa"
                className="filtro-tarefa" />
            </th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <ItensListaTarefas
            tarefas={tarefas}
            recarregarTarefas={setCarregarTarefas} />
        </tbody>
      </Table>
      <Paginacao
        totalItems={totalItems}
        itemsPorPagina={ITENS_POR_PAG}
        paginaAtual={paginaAtual}
        mudarPagina={handleMudarPagina} />

      </div>
      <Routes>
        <Route path="criarTarefa" element={<CriarTarefa />}/>
        <Route path='atualizarTarefa/:id/*' element={<AtualizarTarefa />}/>
        
      </Routes>
    </div>
  )
}


