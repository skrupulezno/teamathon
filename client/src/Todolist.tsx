import React from 'react';

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: Function
}

export function Todolist(props: PropsType, ) {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>я дурак ты дурак</p>
            <div>
                <input/>
                <button>add</button>  
            </div>
            <ul>
                {
                    props.tasks.map( (t) => {
                        return <li><input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                        <button onClick={ () => {props.removeTask(t.id)} }>x</button></li>
                    })
                }
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}