import { create } from 'zustand';
import type { Topic } from '../types/learningPath';

type LearningPathState = {
    learningTopics: Topic[];
    selectedTopic: Topic | null;
    totalXP: number;
    showCelebration: boolean;
    showExpertCelebration: boolean;
    setLearningTopics: (topics: Topic[]) => void;
    setSelectedTopic: (topic: Topic | null) => void;
    setTotalXP: (xp: number) => void;
    setShowCelebration: (show: boolean) => void;
    setShowExpertCelebration: (show: boolean) => void;
    toggleTopicCompletion: (topicId: string) => void;
};

export const useLearningPathStore = create<LearningPathState>(set => ({
    learningTopics: [],
    selectedTopic: null,
    totalXP: 0,
    showCelebration: false,
    showExpertCelebration: false,

    setLearningTopics: topics => set({ learningTopics: topics }),
    setSelectedTopic: topic => set({ selectedTopic: topic }),
    setTotalXP: xp => set(state => ({ totalXP: state.totalXP + xp })),
    setShowCelebration: show => set({ showCelebration: show }),
    setShowExpertCelebration: show => set({ showExpertCelebration: show }),

    toggleTopicCompletion: topicId => {
        set(state => {
            const updatedTopics = state.learningTopics.map(topic => {
                if (topic.id === topicId) {
                    const newCompleted = !topic.completed;
                    const xpChange = newCompleted ? topic.xp : -topic.xp;

                    state.setTotalXP(xpChange);

                    const updatedTopic = {
                        ...topic,
                        completed: newCompleted
                    };

                    return updatedTopic;
                }

                if (
                    topic.children.some(childId => childId === topicId) &&
                    topic.children.every(
                        childId =>
                            state.learningTopics.find(t => t.id === childId)
                                ?.completed
                    )
                ) {
                    return { ...topic, unlocked: true };
                }

                return topic;
            });

            return { learningTopics: updatedTopics };
        });
    }
}));
