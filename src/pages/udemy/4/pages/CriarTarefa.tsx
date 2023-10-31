import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

interface Tarefa {
  id: number;
  descricao: string;
  concluida: boolean;
}

export default function CriarTarefa(){

  const navigate = useNavigate();
  const [tarefa, setTarefa] = useState<string>('');
  const [formValidado, setFormValidado] = useState<boolean>(false);
  const [exibirModal, setExibirModal] = useState<boolean>(false);

  function cadastrar(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormValidado(true);

    if (event.currentTarget.checkValidity()) {
      // Obtém as tarefas
      const tarefasDb = localStorage.getItem('tarefas');
      const tarefas: Tarefa[] = tarefasDb ? JSON.parse(tarefasDb) : [];

      // Persiste a tarefa
      tarefas.push({ id: new Date().getTime(), descricao: tarefa, concluida: false });
      localStorage.setItem('tarefas', JSON.stringify(tarefas));

      setExibirModal(true);
    }
  }

  function handleTxtTarefa(event: React.ChangeEvent<HTMLInputElement>) {
    setTarefa(event.target.value);
  }

  function handleFecharModal() {
    navigate('/gerenciador-tarefas');
  }

  return (
    <div>
      <h3 className="text-center pt-3 pb-5"></h3>
      <div style={{
        padding: '20px 20px 10px',
        backgroundColor: '#bab3b3',
        margin: '10px',
        background: 'transparent !important',
        width: '1200px',
        borderRadius: '10px'
      }}>

      <Form
          validated={formValidado}
          noValidate
          onSubmit={cadastrar}>
          <Form.Group>
            <Form.Label>Tarefa</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite a tarefa"
              minLength="5"
              maxLength="100"
              required
              value={tarefa}
              onChange={handleTxtTarefa}
              data-testid="txt-tarefa" />
            <Form.Control.Feedback type="invalid">
              A tarefa deve conter ao menos 5 caracteres.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="text-center">
            <Button
              variant="success"
              type="submit"
              data-testid="btn-cadastrar">
              Cadastrar
            </Button>
            &nbsp;
            <Button href="/gerenciador-tarefas" className="btn btn-light m-3">Voltar</Button>
          </Form.Group>
        </Form>
        <Modal show={exibirModal} onHide={handleFecharModal} data-testid="modal">
          <Modal.Header closeButton>
            <Modal.Title>Sucesso</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Tarefa adicionada com sucesso!
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="success"
              onClick={handleFecharModal}>
              Continuar
            </Button>
          </Modal.Footer>
        </Modal>

      </div>
    </div>
  )
}

