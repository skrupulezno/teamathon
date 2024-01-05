import React, { useState } from 'react';
import './App.css';
import {Todolist, TaskType} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "completed" | "active";

export function App() {
  let initTasks: Array<TaskType> = [
    {id:v1(), title: "Python", isDone: true},
    {id:v1(), title: "JavaScript", isDone: false},
    {id:v1(), title: "C++", isDone: true},
    {id:v1(), title: "Rust", isDone: true},
    {id:v1(), title: "C#", isDone: false},
    {id:v1(), title: "C", isDone: true},
    {id:v1(), title: "Java", isDone: true},
    {id:v1(), title: "Go", isDone: false},
    {id:v1(), title: "TypeScript", isDone: true}
  ]

  let [tasks, setTasks] = useState<Array<TaskType>>(initTasks);
  let [filter, setFilter] = useState<FilterValuesType>("all");

  console.log(tasks);
  var filteredTasks = tasks;

  function removeTask(id: string) {
    let filteredTasks = tasks.filter( t => t.id !== id)
    setTasks(filteredTasks);
  }

  function addTask(title: string) {
    let newTask = {id:v1(), title: title, isDone: false};
    let newTasks = [newTask, ...tasks];
    setTasks(newTasks);
  }

  function updateFilter(value: FilterValuesType) {
    setFilter(value);
  }
  
  if (filter === "completed") {
    filteredTasks = tasks.filter(t => t.isDone);
  }
  else if (filter === "active") {
    filteredTasks = tasks.filter(t => !t.isDone);
  }

  
 return (
    <div className="App">
        <Todolist title="name" 
        tasks={filteredTasks} 
        removeTask={removeTask}
        updateFilter={updateFilter}
        addTask={addTask}/>
    </div>
  );
}