import React from 'react';
import './App.css';
import {Todolist, TaskType} from './Todolist';

function App() {
  let tasks1: Array<TaskType> = [
    {id:1, title: "Python", isDone: true},
    {id:2, title: "JavaScript", isDone: false},
    {id:3, title: "C++", isDone: true},
    {id:4, title: "C#", isDone: true},
    {id:5, title: "C", isDone: true},
    {id:6, title: "TypeScript", isDone: false}
  ]

  let tasks2: Array<TaskType> = [
    /*{id:1, title: "Dota2", isDone: true},
    {id:2, title: "CS2", isDone: false},
    {id:3, title: "Valorant", isDone: false},
    {id:3, title: "Overwatch", isDone: false}*/
  ]

  function removeTask(id: number) {
    let resultTasks = tasks1.filter( () => {return true} );
    console.log(resultTasks);
  }

  
 return (
    <div className="App">
        <Todolist title="zxc"
        tasks={tasks1}
        removeTask={removeTask}/>
        <Todolist title="name" 
        tasks={tasks2} 
        removeTask={removeTask}/>
    </div>
  );
}


export default App;
