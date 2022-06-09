import logo from './logo.svg';
import './App.css';
import Todo from "./Components/v2/Todo";
import Form from "./Components/v2/Form";
import FilterButton from "./Components/FilterButton";
import React, {useState} from "react";
import {nanoid} from "nanoid";

function App(props) {

    const [tasks, setTasks] = useState(props.tasks);

    const editingTemplate = (
        <form className="stack-small">
            <div className="form-group">
                <label className="todo-label" htmlFor={props.id}>
                    New name for {props.name}
                </label>
                <input id={props.id} className="todo-text" type="text"/>
            </div>
            <div className="btn-group">
                <button type="button" className="btn todo-cancel">
                    Cancel
                    <span className="visually-hidden">renaming {props.name}</span>
                </button>
                <button type="submit" className="btn btn__primary todo-edit">
                    Save
                    <span className="visually-hidden">new name for {props.name}</span>
                </button>
            </div>
        </form>
    );

    function toggleCompletedButton(id) {

        const updatedTask = tasks.map(task => {

            if (id === task.id) {

                return {...task, completed: !task.completed};
            }

            return task;
        });

        setTasks(updatedTask);
    }

    function addTasks(name) {

        if (!name) {

            alert("The Task Name is Empty!");

            return;
        }

        const newTask = {
            id: `todo-${nanoid()}`,
            name: name,
            completed: false
        };

        setTasks([...tasks, newTask]);
    }

    function deleteTask(id) {

        setTasks(
            tasks.filter(task => id !== task.id)
        );
    }

    function editTask(id, newName) {

        setTasks(
            tasks.map(task => {
                if (id === task.id) {
                    return {...task, name: newName};
                }

                return task;
            })
        )
    }

    const taskList = tasks.map(task => (
        <Todo
            id={task.id}
            name={task.name}
            completed={task.completed}
            key={task.id}
            toggleCompletedButton={toggleCompletedButton}
            deleteTask={deleteTask}
            editTask={editTask}
        />
    ));

    const tasksNoun = tasks.length !== 1 ? 'tasks' : 'task';
    const headingText = tasks.length < 1 ? '' : `${tasks.length} ${tasksNoun} remaining`;


    return (
        <div className="todoapp stack-large">
            <h1>TodoMatic</h1>
            <Form addTasks={addTasks}/>
            <div className="filters btn-group stack-exception">
                <FilterButton name="all"/>
                <FilterButton name="Active"/>
                <FilterButton name="Completed"/>
            </div>
            <h2 id="list-heading">
                {headingText}
            </h2>
            <ul
                role="list"
                className="todo-list stack-large stack-exception"
                aria-labelledby="list-heading"
            >
                {taskList}
            </ul>
        </div>
    );
}

export default App;
