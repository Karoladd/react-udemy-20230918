interface crTarefa {
  id: number;
  nome: string;
  concluida: boolean;
}

function Tarefa(id: number, nome: string, concluida: boolean): crTarefa {
  return {
    id,
    nome,
    concluida,
  };
}

export default Tarefa;
