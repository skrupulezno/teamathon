import React from 'react';
import './App.css';

function Todolist() {
    return (
        <div>
            <h3>What to learn</h3>
            <p>я дурак ты дурак</p>
            <div>
                <input/>
                <button>add</button>
            </div>
            <ul>
                <li><input type="checkbox" checked={false}></input><span>cs2</span></li>
                <li><input type="checkbox" checked={true}></input><span>csgo</span></li>
                <li><input type="checkbox" checked={true}></input><span>cs1.6</span></li>
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}

export default Todolist;
