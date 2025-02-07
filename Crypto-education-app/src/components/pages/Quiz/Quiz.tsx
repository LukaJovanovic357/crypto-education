import { useEffect, useState } from 'react';
import { useQuizStore } from '../../../contexts/quizStore';
import LoadingIndicator from '../../UI/LoadingIndicator';
import QuizResults from './QuizResults';
import QuizQuestion from './QuizQuestion';
import QuizSelection from './QuizSelection';
import quizBg from '../../../assets/images/quizBG.jpg';

const Quiz: React.FC = () => {
    const {
        quizzes,
        currentQuiz,
        currentIndex,
        selectedAnswer,
        isAnswered,
        score,
        loading,
        error,
        selectedTopic,
        selectedDifficulty,
        fetchQuizzes,
        selectAnswer,
        nextQuestion,
        previousQuestion,
        resetQuiz,
        updateStats,
        setSelectedTopic,
        setSelectedDifficulty
    } = useQuizStore();

    const [showResults, setShowResults] = useState(false);

    const topics = ['Bitcoin', 'Ethereum', 'NFT', 'DeFi'];
    const difficulties = ['beginner', 'intermediate', 'advanced'];

    useEffect(() => {
        if (selectedTopic && selectedDifficulty) {
            fetchQuizzes(selectedTopic, selectedDifficulty);
        }
    }, [selectedTopic, selectedDifficulty]);

    const handleQuizComplete = async () => {
        await updateStats();
        setShowResults(true);
    };

    const handleRetry = () => {
        setShowResults(false);
        resetQuiz();
    };

    const handleBackToSelect = () => {
        setShowResults(false);
        resetQuiz();
        setSelectedTopic(null);
        setSelectedDifficulty(null);
    };

    if (loading) {
        return <LoadingIndicator text='Loading...' />;
    }

    if (error) {
        return (
            <div className='flex items-center justify-center min-h-screen'>
                <p className='text-red-500 text-lg'>{error}</p>
            </div>
        );
    }

    if (showResults) {
        return (
            <div
                className='h-full flex flex-col justify-center'
                style={{
                    backgroundImage: `url(${quizBg})`,
                    opacity: 0.9,
                    zIndex: -1
                }}
            >
                <QuizResults
                    score={score}
                    totalQuestions={quizzes.length}
                    onRetry={handleRetry}
                    onBackToSelect={handleBackToSelect}
                />
            </div>
        );
    }

    if (!selectedTopic || !selectedDifficulty) {
        return (
            <div
                className='h-full flex flex-col justify-start pt-44'
                style={{
                    backgroundImage: `url(${quizBg})`,
                    opacity: 1,
                    zIndex: -1
                }}
            >
                <QuizSelection
                    topics={topics}
                    difficulties={difficulties}
                    setSelectedTopic={setSelectedTopic}
                    setSelectedDifficulty={setSelectedDifficulty}
                />
            </div>
        );
    }

    if (!currentQuiz) {
        return (
            <div className='flex items-center justify-center min-h-screen'>
                <p className='text-lg text-gray-600'>
                    No quizzes available for the selected parameters.
                </p>
            </div>
        );
    }

    return (
        <div className='relative h-full'>
            <div
                className='absolute top-0 left-0 w-full h-full bg-cover bg-center'
                style={{
                    backgroundImage: `url(${quizBg})`,
                    opacity: 0.5,
                    zIndex: -1
                }}
            />
            <div className='h-full container mx-auto px-4 py-8'>
                <div className='bg-white opacity-90 mt-32 rounded-lg shadow-lg p-6 max-w-2xl mx-auto'>
                    <div className='mb-6'>
                        <div className='flex justify-between items-center mb-4'>
                            <h2 className='text-xl font-bold'>
                                Question {currentIndex + 1} of {quizzes.length}
                            </h2>
                            <div className='text-sm text-gray-600'>
                                Score: {score} / {quizzes.length}
                            </div>
                        </div>
                        <QuizQuestion
                            question={currentQuiz.question}
                            options={currentQuiz.options}
                            isAnswered={isAnswered}
                            selectAnswer={selectAnswer}
                            selectedAnswer={selectedAnswer}
                            correctOption={currentQuiz.correct_option}
                        />
                        <div className='flex justify-between gap-4 mt-6'>
                            {currentIndex > 0 && !isAnswered && (
                                <button
                                    onClick={previousQuestion}
                                    className='px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700'
                                >
                                    Previous
                                </button>
                            )}
                            {isAnswered && (
                                <button
                                    onClick={
                                        currentIndex === quizzes.length - 1
                                            ? handleQuizComplete
                                            : nextQuestion
                                    }
                                    className='px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700'
                                >
                                    {currentIndex === quizzes.length - 1
                                        ? 'Finish Quiz'
                                        : 'Next Question'}
                                </button>
                            )}
                            <button
                                onClick={handleBackToSelect}
                                className='px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700'
                            >
                                Exit Quiz
                            </button>
                        </div>
                    </div>
                    <div className='mt-6 pt-6 border-t border-gray-200'>
                        <div className='flex justify-between text-sm text-gray-600'>
                            <div>Topic: {selectedTopic}</div>
                            <div>Difficulty: {selectedDifficulty}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quiz;
