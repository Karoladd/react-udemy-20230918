import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import ConcluirTarefa from './ConcluirTarefa';
import RemoverTarefa from './RemoverTarefa';

interface Tarefa {
  id: number;
  nome: string;
  concluida: boolean;
}

interface ItensListaTarefasProps {
  tarefas: Tarefa[];
  recarregarTarefas: (reload: boolean) => void;
}

function marcarConcluida(tarefa: Tarefa): string {
  return tarefa.concluida ? 'line-through' : 'none';
}

const ItensListaTarefas: React.FC<ItensListaTarefasProps> = (props) => {
  return (
    props.tarefas.map((tarefa: Tarefa) => (
      <tr key={tarefa.id} data-testid="tarefa">
        <td
          width="75%"
          data-testid="nome-tarefa"
          style={{ textDecoration: marcarConcluida(tarefa) }}
        >
          {tarefa.nome}
        </td>
        <td className="text-right">
          <ConcluirTarefa
            tarefa={tarefa}
            recarregarTarefas={props.recarregarTarefas}
            className={tarefa.concluida ? 'hidden' : undefined}
          />
          &nbsp;
          <a href={`/atualizar/${tarefa.id}`} className={tarefa.concluida ? 'hidden' : 'btn btn-warning btn-sm'}>
            <FontAwesomeIcon icon={faEdit} />
          </a>
          &nbsp;
          <RemoverTarefa
            tarefa={tarefa}
            recarregarTarefas={props.recarregarTarefas}
          />
        </td>
      </tr>
    ))
  );
};

ItensListaTarefas.propTypes = {
  tarefas: PropTypes.array.isRequired,
  recarregarTarefas: PropTypes.func.isRequired,
};

export default ItensListaTarefas;