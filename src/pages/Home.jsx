const Home = () => {
    return (
        <div className="p-6 space-y-6">
            <section className="text-center">
                <h2 className="text-3xl font-bold text-blue-700">Welcome to Productivity AI</h2>
                <p className="text-gray-600 mt-2">Your smart assistant for managing tasks, habits, and goals.</p>
            </section>

            <section className="grid md:grid-cols-3 gap-6">
                <div className="bg-white shadow rounded p-4 border-t-4 border-blue-500">
                    <h3 className="text-xl font-semibold">📝 Tasks</h3>
                    <p className="text-sm text-gray-500 mt-1">Create and track your daily to-dos effectively.</p>
                </div>
                <div className="bg-white shadow rounded p-4 border-t-4 border-green-500">
                    <h3 className="text-xl font-semibold">📆 Habits</h3>
                    <p className="text-sm text-gray-500 mt-1">Build better habits with consistency.</p>
                </div>
                <div className="bg-white shadow rounded p-4 border-t-4 border-yellow-500">
                    <h3 className="text-xl font-semibold">🎯 Goals</h3>
                    <p className="text-sm text-gray-500 mt-1">Set and achieve long-term objectives.</p>
                </div>
            </section>

            <section className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white rounded p-6 text-center">
                <h3 className="text-2xl font-semibold mb-2">🤖 Meet Your AI Assistant</h3>
                <p>Ask questions, get smart suggestions, and boost your productivity with AI-powered planning.</p>
            </section>
        </div>
    );
};

export default Home;