import { useState } from 'react';

const Goals = () => {
    const [goals, setGoals] = useState([]);
    const [input, setInput] = useState('');

    const addGoal = () => {
        if (!input.trim()) return;
        const newGoal = {
            id: Date.now(),
            title: input,
            completed: false,
        };
        setGoals([...goals, newGoal]);
        setInput('');
    };

    const toggleGoal = (id) => {
        setGoals(goals.map(goal =>
            goal.id === id ? { ...goal, completed: !goal.completed } : goal
        ));
    };

    const deleteGoal = (id) => {
        setGoals(goals.filter(goal => goal.id !== id));
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4">Goal Planner</h2>
            <div className="flex gap-2 mb-4">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="border px-2 py-1 w-full"
                    placeholder="Enter a new goal"
                />
                <button
                    onClick={addGoal}
                    className="bg-yellow-500 text-white px-4 py-1 rounded"
                >
                    Add
                </button>
            </div>
            <ul>
                {goals.map(goal => (
                    <li key={goal.id} className="flex justify-between items-center mb-2 p-2 border rounded">
                        <div>
                            <input
                                type="checkbox"
                                checked={goal.completed}
                                onChange={() => toggleGoal(goal.id)}
                                className="mr-2"
                            />
                            <span className={goal.completed ? 'line-through text-gray-400' : ''}>{goal.title}</span>
                        </div>
                        <button
                            onClick={() => deleteGoal(goal.id)}
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

export default Goals;