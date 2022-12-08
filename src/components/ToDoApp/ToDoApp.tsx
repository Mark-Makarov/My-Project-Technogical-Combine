import React, { useState } from 'react';

interface Task {
    title: string;
    completed: boolean;
}

const ToDoApp = () => {

    const [tasks, setTasks] = useState<Task[]>([
        {
            title: 'Task 1',
            completed: false,
        },
        {
            title: 'Task 2',
            completed: false,
        },
        {
            title: 'Task 3',
            completed: false,
        },
    ]);

    const handleAddTask = () => {
        const newTask: Task = {
            title: 'New Task',
            completed: false,
        };
        setTasks([...tasks, newTask]);
    };

    const handleCompleteTask = (index: number) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = true;
        setTasks(updatedTasks);
    };

    const handleRemoveTask = (index: number) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1 style={{ margin: 0 }}>To Do List</h1>
            {tasks.map((task, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => handleCompleteTask(index)}
                    />
                    <span style={{ marginLeft: 8 }}>{task.title}</span>
                    <button onClick={() => handleRemoveTask(index)}>Remove</button>
                </div>
            ))}
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
};

export default ToDoApp;