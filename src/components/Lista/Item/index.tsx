import { ITarefa } from '../../../types/tarefa';
import style from './Item.module.scss';

interface ItemProps extends ITarefa {
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

function Item({ 
  tarefa, 
  tempo, 
  completado, 
  id, 
  selecionado, 
  selecionaTarefa 
}: ItemProps) {
  return (
    <li className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`} onClick={() => selecionaTarefa({
      tarefa,
      tempo,
      selecionado,
      completado,
      id
    })}>
        <h3>{tarefa}</h3>
        <span>{tempo}</span>
    </li>
  )
}

export default Item