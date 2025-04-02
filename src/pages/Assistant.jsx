// productivity-ai-app/src/pages/Assistant.jsx
import { useState } from 'react';

const Assistant = () => {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');
    const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;

    const handleAsk = async () => {
        if (!apiKey) {
            setResponse("❌ API Key không tồn tại. Vui lòng kiểm tra file .env");
            return;
        }
        if (!input.trim()) return;
        setResponse("🤖 Đang xử lý...");

        try {
            const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`,
                    'HTTP-Referer': 'https://yourdomain.com', // Thay bằng domain thật hoặc localhost
                    'X-Title': 'Productivity Assistant'
                },
                body: JSON.stringify({
                    model: 'openai/gpt-3.5-turbo',
                    messages: [
                        {
                            role: 'system',
                            content: 'Bạn là một trợ lý AI giúp người dùng lập kế hoạch, tối ưu hóa thời gian và làm việc hiệu quả.'
                        },
                        {
                            role: 'user',
                            content: input,
                        },
                    ],
                }),
            });

            const data = await res.json();
            console.log('OpenRouter Response:', data);

            if (data.error) {
                setResponse(`❌ Lỗi từ OpenRouter: ${data.error.message}`);
                return;
            }

            const aiReply = data.choices?.[0]?.message?.content;
            setResponse(aiReply || '❌ Không thể tạo phản hồi từ trợ lý AI.');
        } catch (error) {
            console.error('Lỗi khi gọi OpenRouter API:', error);
            setResponse('❌ Đã xảy ra lỗi khi kết nối với trợ lý AI.');
        }

        setInput('');
    };

    return (
        <div className="p-4 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">AI Assistant (OpenRouter)</h2>
            <div className="flex gap-2 mb-4">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="border px-3 py-2 w-full rounded"
                    placeholder="Ask me how to plan your time, work better, or set smart goals..."
                />
                <button
                    onClick={handleAsk}
                    className="bg-indigo-600 text-white px-4 py-2 rounded"
                >
                    Ask
                </button>
            </div>
            {response && (
                <div className="bg-gray-100 p-4 rounded shadow text-sm whitespace-pre-line">
                    {response}
                </div>
            )}
        </div>
    );
};

export default Assistant;
