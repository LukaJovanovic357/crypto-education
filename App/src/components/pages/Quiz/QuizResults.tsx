interface QuizResultsProps {
    score: number;
    totalQuestions: number;
    onRetry: () => void;
    onBackToSelect: () => void;
}

const QuizResults: React.FC<QuizResultsProps> = ({
    score,
    totalQuestions,
    onRetry,
    onBackToSelect
}) => (
    <div className='flex flex-col bg-white opacity-90 rounded-lg shadow-lg p-6 max-w-2xl mx-auto'>
        <h2 className='text-2xl font-bold mb-6'>Quiz Results</h2>
        <div className='space-y-4'>
            <p className='text-lg'>
                Final Score: {score} out of {totalQuestions}
            </p>
            <p className='text-lg'>
                Success Rate: {Math.round((score / totalQuestions) * 100)}%
            </p>
            <div className='flex gap-4 mt-6'>
                <button
                    onClick={onRetry}
                    className='px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700'
                >
                    Try Again
                </button>
                <button
                    onClick={onBackToSelect}
                    className='px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700'
                >
                    Back to Topic Selection
                </button>
            </div>
        </div>
    </div>
);

export default QuizResults;
