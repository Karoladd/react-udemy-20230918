import React, { useState, useEffect } from 'react';
import { Button, Form, Jumbotron, Modal } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';


const AtualizarTarefa = () => {

  const navigate = useNavigate();
  const { id } = useParams();

  const [exibirModal, setExibirModal] = useState(false);
  const [formValidado, setFormValidado] = useState(false);
  const [tarefa, setTarefa] = useState('');
  const [carregarTarefa, setCarregarTarefa] = useState(true);

  useEffect(() => {
    if (carregarTarefa) {
      const tarefasDb = localStorage.getItem('tarefas');
      const tarefas = tarefasDb ? JSON.parse(tarefasDb) : [];
      const tarefa = tarefas.filter((t) => t.id === parseInt(id))[0];
      setTarefa(tarefa.descricao);
      setCarregarTarefa(false);
    }
  }, [carregarTarefa, id]);

  function voltar(event: React.MouseEvent) {
    event.preventDefault();
    navigate('/gerenciador-tarefas');
  }

  function handleFecharModal() {
    navigate('/gerenciador-tarefas');
  }

  function atualizar(event: React.FormEvent) {
    event.preventDefault();
    setFormValidado(true);
    if (event.currentTarget.checkValidity() === true) {
      const tarefasDb = localStorage.getItem('tarefas');
      let tarefas = tarefasDb ? JSON.parse(tarefasDb) : [];
      tarefas = tarefas.map((tarefaObj) => {
        if (tarefaObj.id === parseInt(id)) {
          tarefaObj.descricao = tarefa;
        }
        return tarefaObj;
      });
      localStorage.setItem('tarefas', JSON.stringify(tarefas));
      setExibirModal(true);
    }
  }

  function handleTxtTarefa(event: React.ChangeEvent<HTMLInputElement>) {
    setTarefa(event.target.value);
  }

  return (
    <div>
    <div style={{
            padding: '20px 20px 10px',
            backgroundColor: '#bab3b3',
            margin: '10px',
            background: 'transparent !important',
            width: '1200px',
            borderRadius: '10px'
          }}>
        <Form onSubmit={atualizar} noValidate validated={formValidado}>
          <Form.Group>
            <Form.Label>Tarefa</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite a tarefa"
              minLength="5"
              maxLength="100"
              required
              data-testid="txt-tarefa"
              value={tarefa}
              onChange={handleTxtTarefa} />
            <Form.Control.Feedback type="invalid">
              A tarefa deve conter ao menos 5 caracteres.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="text-center pt-3">
            <Button variant="success" type="submit" data-testid="btn-atualizar">
              Atualizar
            </Button>
            &nbsp;
            <a href="/gerenciador-tarefas" className="btn btn-light" onClick={voltar}>
              Voltar
            </a>
          </Form.Group>
        </Form>
        <Modal show={exibirModal} onHide={handleFecharModal} data-testid="modal">
          <Modal.Header closeButton>
            <Modal.Title>Sucesso</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Tarefa atualizada com sucesso!
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleFecharModal}>
              Continuar
            </Button>
          </Modal.Footer>
        </Modal>
    </div>
    </div>


  )
}

export default AtualizarTarefa