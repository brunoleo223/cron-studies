import React from 'react';
import Item from './Item';
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
                    <Item
                        key={index}
                        {...tarefa}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;
