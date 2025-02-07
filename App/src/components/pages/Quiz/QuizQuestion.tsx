import React from 'react';

interface QuizQuestionProps {
    question: string;
    options: { id: string; text: string }[];
    isAnswered: boolean;
    selectAnswer: (option: string) => void;
    selectedAnswer: string | null;
    correctOption: string;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
    question,
    options,
    isAnswered,
    selectAnswer,
    selectedAnswer,
    correctOption
}) => (
    <div>
        <p className='text-lg font-medium'>{question}</p>
        <div className='space-y-3 mt-4'>
            {options.map(option => (
                <button
                    key={option.id}
                    onClick={() => selectAnswer(option.text)}
                    disabled={isAnswered}
                    className={`w-full p-3 text-left rounded-md transition-colors duration-200
            ${
                isAnswered
                    ? option.text === correctOption
                        ? 'bg-green-500 text-white'
                        : option.text === selectedAnswer
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-100'
                    : 'bg-gray-100 hover:bg-gray-200'
            }`}
                >
                    {option.text}
                </button>
            ))}
        </div>
    </div>
);

export default QuizQuestion;
