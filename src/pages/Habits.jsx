import { useState } from 'react';

const Habits = () => {
    const [habits, setHabits] = useState([]);
    const [input, setInput] = useState('');

    const addHabit = () => {
        if (!input.trim()) return;
        const newHabit = {
            id: Date.now(),
            name: input,
            doneToday: false,
        };
        setHabits([...habits, newHabit]);
        setInput('');
    };

    const toggleHabit = (id) => {
        setHabits(habits.map(habit =>
            habit.id === id ? { ...habit, doneToday: !habit.doneToday } : habit
        ));
    };

    const deleteHabit = (id) => {
        setHabits(habits.filter(habit => habit.id !== id));
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4">Habit Tracker</h2>
            <div className="flex gap-2 mb-4">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="border px-2 py-1 w-full"
                    placeholder="Enter a new habit"
                />
                <button
                    onClick={addHabit}
                    className="bg-green-500 text-white px-4 py-1 rounded"
                >
                    Add
                </button>
            </div>
            <ul>
                {habits.map(habit => (
                    <li key={habit.id} className="flex justify-between items-center mb-2 p-2 border rounded">
                        <div>
                            <input
                                type="checkbox"
                                checked={habit.doneToday}
                                onChange={() => toggleHabit(habit.id)}
                                className="mr-2"
                            />
                            <span className={habit.doneToday ? 'line-through text-gray-400' : ''}>{habit.name}</span>
                        </div>
                        <button
                            onClick={() => deleteHabit(habit.id)}
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

export default Habits;