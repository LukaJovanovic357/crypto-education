import { useState, useEffect } from 'react';
import { initialTopics } from '../../../data/initialTopics';
import type { Topic } from '../../../types/learningPath';

import { Trophy } from 'lucide-react';
import CelebrationConfetti from '../../UI/CelebrationConfeti';
import ProgressBar from '../../common/LearningPath/Progressbar/ProgressBar';
import ExpertCelebration from '../../common/LearningPath/ExpertCelebration/ExpertCelebration';
import TopicCard from '../../common/LearningPath/TopicCard/TopicCard';
import TopicDetails from '../../common/LearningPath/TopicDetails/TopicDetails';

export const calculateProgress = (topics: Topic[]) => {
    const completed = topics.filter(t => t.completed).length;
    const total = topics.length;
    return Math.round((completed / total) * 100);
};

const LearningPath = () => {
    const [learningTopics, setLearningTopics] = useState(initialTopics);
    const [showCelebration, setShowCelebration] = useState(false);
    const [showExpertCelebration, setShowExpertCelebration] = useState(false);
    const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
    const [totalXP, setTotalXP] = useState(0);

    useEffect(() => {
        const allCompleted = learningTopics.every(topic => topic.completed);
        if (allCompleted) {
            setShowExpertCelebration(true);
        }
    }, [learningTopics]);

    const handleTopicClick = (topicId: string) => {
        console.log('Before handleTopicClick', { topicId, learningTopics });
        const topic = learningTopics.find(t => t.id === topicId);
        if (!topic?.unlocked) return;

        setSelectedTopic(topic as Topic);

        const updatedTopics = learningTopics.map(t => {
            if (t.id === topicId) {
                const newCompleted = !t.completed;
                if (newCompleted) {
                    setShowCelebration(true);
                    setTotalXP(prev => prev + t.xp);
                    setTimeout(() => setShowCelebration(false), 2000);
                } else {
                    setTotalXP(prev => prev - t.xp);
                }
                return { ...t, completed: newCompleted };
            }
            return t;
        });

        const finalTopics = updatedTopics.map(topic => ({
            ...topic,
            unlocked:
                topic.unlocked ||
                updatedTopics
                    .filter(t => t.children.includes(topic.id))
                    .every(p => p.completed)
        }));

        setLearningTopics(finalTopics);
        console.log('After handleTopicClick', {
            selectedTopic,
            learningTopics
        });
    };

    return (
        <div
            style={{
                backgroundImage:
                    'linear-gradient(180deg, rgba(14,116,144,1) 8%, rgba(34,32,32,1) 85%)'
            }}
            className='p-8  min-h-screen'
        >
            {showCelebration && <CelebrationConfetti />}
            {showExpertCelebration && (
                <ExpertCelebration
                    onClose={() => setShowExpertCelebration(false)}
                />
            )}
            {selectedTopic && (
                <TopicDetails
                    topic={selectedTopic}
                    onClose={() => setSelectedTopic(null)}
                />
            )}

            <div className='max-w-4xl mx-auto'>
                <div className='text-center mb-8'>
                    <h2 className='text-2xl font-bold mt-10 mb-4 text-white'>
                        Your Learning Journey
                    </h2>
                    <div className='flex items-center justify-center mb-4'>
                        <Trophy className='w-6 h-6 text-yellow-500 mr-2' />
                        <span className='text-xl font-semibold text-white'>
                            {totalXP} XP
                        </span>
                    </div>
                    <ProgressBar progress={calculateProgress(learningTopics)} />
                </div>

                <div className='space-y-12'>
                    {[...new Set(learningTopics.map(t => t.level))].map(
                        level => (
                            <div key={level}>
                                <div className='text-center text-white mb-4'>
                                    Level {level + 1}
                                </div>
                                <div className='flex flex-wrap justify-center gap-6 cursor-pointer '>
                                    {learningTopics
                                        .filter(t => t.level === level)
                                        .map(topic => (
                                            <TopicCard
                                                key={topic.id}
                                                topic={topic}
                                                handleTopicClick={
                                                    handleTopicClick
                                                }
                                                setSelectedTopic={
                                                    setSelectedTopic
                                                }
                                            />
                                        ))}
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default LearningPath;
