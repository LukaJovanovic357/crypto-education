import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { getAIResponse } from '../../services/huggingFaceService';

const AIAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<
        { text: string; sender: 'user' | 'ai' }[]
    >([]);
    const [inputMessage, setInputMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const inputRef = useRef<HTMLInputElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (location.pathname === '/') {
            setIsOpen(false);
        }
    }, [location]);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    const handleClickOutside = (e: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    const handleSendMessage = async () => {
        if (!inputMessage.trim()) return;

        setMessages(prev => [...prev, { text: inputMessage, sender: 'user' }]);
        setInputMessage('');
        setLoading(true);

        try {
            const aiResponse = await getAIResponse(inputMessage);
            setMessages(prev => [...prev, { text: aiResponse, sender: 'ai' }]);
        } catch {
            setMessages(prev => [
                ...prev,
                { text: 'Error fetching AI response.', sender: 'ai' }
            ]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='fixed bottom-4 right-4 z-50'>
            {!isOpen && location.pathname !== '/' && (
                <button
                    onClick={() => setIsOpen(true)}
                    className='bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors flex items-center space-x-2'
                >
                    <span className='text-sm'>Ask Crypto AI</span>
                </button>
            )}

            {isOpen && (
                <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
                    <div
                        ref={modalRef}
                        className='bg-white w-96 h-[500px] rounded-lg shadow-xl flex flex-col'
                    >
                        <div className='bg-blue-500 text-white p-4 rounded-t-lg flex justify-between items-center'>
                            <h2 className='font-semibold'>
                                Crypto AI Assistant
                            </h2>
                            <button
                                onClick={() => setIsOpen(false)}
                                className='hover:bg-blue-600 p-1 rounded-full'
                            >
                                Close
                            </button>
                        </div>

                        <div className='flex-grow overflow-y-auto p-4 space-y-2'>
                            {messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`p-2 rounded-lg max-w-[80%] ${
                                        msg.sender === 'user'
                                            ? 'bg-blue-100 text-blue-800 ml-auto'
                                            : 'bg-gray-100 text-gray-800 mr-auto'
                                    }`}
                                >
                                    {msg.text}
                                </div>
                            ))}

                            {loading && (
                                <div className='text-gray-500 mt-2'>
                                    AI is thinking...
                                </div>
                            )}
                        </div>

                        <div className='p-4 border-t flex space-x-2'>
                            <input
                                type='text'
                                value={inputMessage}
                                onChange={e => setInputMessage(e.target.value)}
                                onKeyDown={e =>
                                    e.key === 'Enter' && handleSendMessage()
                                }
                                placeholder='Ask a crypto question...'
                                ref={inputRef}
                                className='flex-grow p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                            />
                            <button
                                onClick={handleSendMessage}
                                className='bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50'
                                disabled={loading}
                            >
                                {loading ? 'Sending...' : 'Send'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AIAssistant;
