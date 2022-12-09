import React, {useState} from 'react';

interface Task {
    title: string;
    completed: boolean;
}

const ToDoApp = () => {

    const [tasks, setTasks] = useState<Task[]>([
        {title: 'Task 1', completed: false,},
        {title: 'Task 2', completed: false,},
        {title: 'Task 3', completed: false,},]);

    const [newTaskTitle, setNewTaskTitle] = useState('');

    const handleAddTask = () => {
        if (newTaskTitle === '') {
            return;
        }

        const newTask: Task = {
            title: newTaskTitle,
            completed: false,
        };
        setTasks([...tasks, newTask]);
        setNewTaskTitle('');
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
                        <button onClick={() => handleRemoveTask(index)}>Remove</button>
                    </div>
                </div>
            ))}
            <div style={{marginTop: 8}}>
                <input
                    type="text"
                    value={newTaskTitle}
                    onChange={event => setNewTaskTitle(event.target.value)}
                />
                <button onClick={handleAddTask}>Add Task</button>
            </div>
        </div>
    );
};

export default ToDoApp;