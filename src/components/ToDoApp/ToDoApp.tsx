import React, {ReactEventHandler, ReactHTML, useState} from 'react';
import { useAppSelector, useAppDispatch } from "../../Hooks/Hooks";
import { toDoAppSlice } from "../../Store/slices/toDoAppSlice";

interface Task {
    title: string;
    completed: boolean;
}

const ToDoApp = () => {

    const dispatch = useAppDispatch();
    const tasks: Task[] = useAppSelector((state) => state.toDoApp.tasks);
console.log(tasks)
    const [newTaskTitle, setNewTaskTitle] = useState('');

    const taskTitle = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setNewTaskTitle(e.target.value)
    }

    const handleAddTask = () => {
        if (newTaskTitle === '') {
            return;
        }
        dispatch(toDoAppSlice.actions.addTask({ title: newTaskTitle}));
        setNewTaskTitle('')
    };

    const handleCompleteTask = (index: number) => {
        dispatch(toDoAppSlice.actions.completeTask({ index }));
    };

    const handleRemoveTask = (index: number) => {
        dispatch(toDoAppSlice.actions.removeTask({index}))
    };

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <h1 style={{margin: 0}}>To Do List</h1>

            {tasks.map((task, index) => (
                <div
                    key={index}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.5s ease',
                        opacity: task.completed ? 0.5 : 1,

                    }}
                >
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => handleCompleteTask(index)}
                    />
                    <div style={{ display: 'flex' }}>
    <span
        style={{
            marginRight: 'auto',
            marginLeft: 8,
            textDecoration: task.completed ? 'line-through' : 'none'
        }}
    >
      {task.title}
    </span>
                        <button onClick={() => {
                            handleRemoveTask(index)
                        }}>Remove</button>
                    </div>
                </div>
            ))}
            <div style={{marginTop: 8}}>
                <input
                    type="text"
                    value={newTaskTitle}
                    onChange={event => taskTitle(event)}
                />
                <button onClick={handleAddTask}>Add Task</button>
            </div>
        </div>
    );
};

export default ToDoApp;