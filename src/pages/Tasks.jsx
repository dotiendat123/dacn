import { useState } from 'react';

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');

    const addTask = () => {
        if (!input.trim()) return;
        const newTask = {
            id: Date.now(),
            title: input,
            completed: false,
        };
        setTasks([...tasks, newTask]);
        setInput('');
    };

    const toggleTask = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4">Task Manager</h2>
            <div className="flex gap-2 mb-4">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="border px-2 py-1 w-full"
                    placeholder="Enter a new task"
                />
                <button
                    onClick={addTask}
                    className="bg-blue-500 text-white px-4 py-1 rounded"
                >
                    Add
                </button>
            </div>
            <ul>
                {tasks.map(task => (
                    <li key={task.id} className="flex justify-between items-center mb-2 p-2 border rounded">
                        <div>
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => toggleTask(task.id)}
                                className="mr-2"
                            />
                            <span className={task.completed ? 'line-through text-gray-400' : ''}>{task.title}</span>
                        </div>
                        <button
                            onClick={() => deleteTask(task.id)}
                            className="text-red-500 hover:underline"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tasks;
