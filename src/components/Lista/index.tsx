import React, { useState } from 'react';
import { ITarefa } from '../../types/tarefa';
import Item from './Item';
import style from './Lista.module.scss';

interface ListaProps{
    tarefas: ITarefa[];
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

function Lista({ tarefas, selecionaTarefa }: ListaProps) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((tarefa) => (
                    <Item
                        key={tarefa.id}
                        selecionaTarefa={selecionaTarefa}
                        {...tarefa}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;
