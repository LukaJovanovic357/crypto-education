import { CheckCircle, Circle, Lock } from 'lucide-react';
import type { Topic } from '../../../../types/learningPath';

type TopicCardProps = {
    topic: Topic;
    handleTopicClick: (topicId: string) => void;
    setSelectedTopic: (topic: Topic | null) => void;
};

const TopicCard = ({
    topic,
    handleTopicClick,
    setSelectedTopic
}: TopicCardProps) => (
    <div
        className={`relative p-6 rounded-lg shadow-md transition-all duration-300 ${
            topic.unlocked ? 'bg-white hover:shadow-lg' : 'bg-gray-100'
        } w-80 mx-4 my-2`}
        onClick={() => {
            if (topic.unlocked) {
                setSelectedTopic(topic);
            }
        }}
    >
        <div className='flex items-start justify-between mb-3'>
            <h3 className='font-semibold text-lg text-gray-800'>
                {topic.title}
            </h3>
            <div
                onClick={e => {
                    e.stopPropagation();
                    handleTopicClick(topic.id);
                }}
                className='cursor-pointer hover:scale-110 transition-transform'
            >
                {topic.unlocked ? (
                    topic.completed ? (
                        <CheckCircle className='w-6 h-6 text-green-500' />
                    ) : (
                        <Circle className='w-6 h-6 text-blue-500' />
                    )
                ) : (
                    <Lock className='w-6 h-6 text-gray-400' />
                )}
            </div>
        </div>
    </div>
);

export default TopicCard;
