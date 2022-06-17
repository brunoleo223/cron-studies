import React from 'react';
import style from './Lista.module.scss';

function Lista() {
    const tarefas =[{
        tarefa: 'react',
        tempo: '02:00:00'
    },{
        tarefa: 'javascript',
        tempo: '01:00:00'
    },{
        tarefa: 'typescript',
        tempo: '01:00:00'
    }]

    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((tarefa, index) => (
                    <li className={style.item} key={index}>
                        <h3>{tarefa.tarefa}</h3>
                        <span>{tarefa.tempo}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Lista;
