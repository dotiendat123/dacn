import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-blue-600 text-white p-4 flex justify-between">
            <h1 className="text-xl font-bold">Productivity AI</h1>
            <nav className="flex gap-4">
                <Link to="/">Home</Link>
                <Link to="/tasks">Tasks</Link>
                <Link to="/habits">Habits</Link>
                <Link to="/goals">Goals</Link>
                <Link to="/assistant">Assistant</Link>
            </nav>
        </header>
    );
};

export default Header;