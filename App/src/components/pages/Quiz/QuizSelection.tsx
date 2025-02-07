interface QuizSelectionProps {
    topics: string[];
    difficulties: string[];
    setSelectedTopic: (topic: string) => void;
    setSelectedDifficulty: (difficulty: string) => void;
}

const QuizSelection: React.FC<QuizSelectionProps> = ({
    topics,
    difficulties,
    setSelectedTopic,
    setSelectedDifficulty
}) => (
    <div className='bg-white opacity-90 rounded-lg shadow-lg py-10 px-20 max-w-md mx-auto'>
        <h2 className='text-2xl font-bold mb-6'>Select Quiz Parameters</h2>
        <div className='space-y-6'>
            <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Topic
                </label>
                <select
                    className='w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500'
                    onChange={e => setSelectedTopic(e.target.value)}
                    defaultValue=''
                >
                    <option value='' disabled>
                        Select topic
                    </option>
                    {topics.map(topic => (
                        <option key={topic} value={topic}>
                            {topic}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Difficulty
                </label>
                <select
                    className='w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500'
                    onChange={e => setSelectedDifficulty(e.target.value)}
                    defaultValue=''
                >
                    <option value='' disabled>
                        Select difficulty
                    </option>
                    {difficulties.map(diff => (
                        <option key={diff} value={diff}>
                            {diff.charAt(0).toUpperCase() + diff.slice(1)}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    </div>
);

export default QuizSelection;
