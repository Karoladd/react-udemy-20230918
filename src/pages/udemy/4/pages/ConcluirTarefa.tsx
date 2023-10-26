import React, { useState, FunctionComponent } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';

interface Tarefa {
  id: number;
  nome: string;
  concluida: boolean;
}

interface ConcluirTarefaProps {
  tarefa: Tarefa;
  recarregarTarefas: (reload: boolean) => void;
  className?: string;
}

const ConcluirTarefa: FunctionComponent<ConcluirTarefaProps> = (props) => {
  const [exibirModal, setExibirModal] = useState(false);

  const handleAbrirModal = (event: React.MouseEvent) => {
    event.preventDefault();
    setExibirModal(true);
  };

  const handleFecharModal = () => {
    setExibirModal(false);
  };

  const handleConcluirTarefa = (event: React.MouseEvent) => {
    event.preventDefault();
    const tarefasDb = localStorage.getItem('tarefas');
    let tarefas: Tarefa[] = tarefasDb ? JSON.parse(tarefasDb) : [];
    tarefas = tarefas.map(tarefa => {
      if (tarefa.id === props.tarefa.id) {
        tarefa.concluida = true;
      }
      return tarefa;
    });
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    setExibirModal(false);
    props.recarregarTarefas(true);
  };

  return (
    <span className={props.className}>
      <Button className="btn-sm" onClick={handleAbrirModal} data-testid="btn-abrir-modal">
        <FontAwesomeIcon icon={faClipboardCheck} />
      </Button>
      <Modal show={exibirModal} onHide={handleFecharModal} data-testid="modal">
        <Modal.Header closeButton>
          <Modal.Title>Concluir tarefa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Deseja realmente concluir a seguinte tarefa?
          <br />
          <strong>{props.tarefa.nome}</strong>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleConcluirTarefa} data-testid="btn-concluir">
            Sim
          </Button>
          <Button variant="light" onClick={handleFecharModal} data-testid="btn-fechar-modal">
            Não
          </Button>
        </Modal.Footer>
      </Modal>
    </span>
  );
};

export default ConcluirTarefa;
