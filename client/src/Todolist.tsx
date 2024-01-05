import React, { useState } from 'react';
import { FilterValuesType } from './App';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    updateFilter: (value: FilterValuesType) => void
    addTask: (tittle: string) => void
}

export function Todolist(props: PropsType) {
    const [newTaskTitle, setNewTaskTitle] = useState("");

    return (
        <div>
            <h3>{props.title}</h3>
            <p>я дурак ты дурак</p>
            <div>
                <input />
                <button onClick={ () => {props.addTask("zxc")} }>+</button>  
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
                <button onClick={ () => {props.updateFilter("all")} }>All</button>
                <button onClick={ () => {props.updateFilter("active")} }>Active</button>
                <button onClick={ () => {props.updateFilter("completed")} }>Completed</button>
            </div>
        </div>
    )
}