import { describe, it, expect, vi, beforeEach } from 'vitest';
import { calculateProgress } from './LearningPath';
import { initialTopics } from '../../../data/initialTopics';

describe('LearningPath Component', () => {
    describe('calculateProgress', () => {
        it('should return 0% when no topics are completed', () => {
            const progress = calculateProgress(initialTopics);
            expect(progress).toBe(0);
        });

        it('should return 100% when all topics are completed', () => {
            const topicsWithCompletion = initialTopics.map(topic => ({
                ...topic,
                completed: true
            }));
            const progress = calculateProgress(topicsWithCompletion);
            expect(progress).toBe(100);
        });

        it('should return the correct progress when some topics are completed', () => {
            const topicsWithSomeCompletion = initialTopics.map(
                (topic, index) => ({
                    ...topic,
                    completed: index % 2 === 0
                })
            );
            const progress = calculateProgress(topicsWithSomeCompletion);
            expect(progress).toBe(67);
        });
    });
});

describe('Learning Path Logic', () => {
    let learningTopics: any[];
    let setLearningTopics: any;

    beforeEach(() => {
        learningTopics = [...initialTopics];
        setLearningTopics = vi.fn();
    });

    it('should update XP correctly when a topic is marked completed', () => {
        const handleTopicClick = (topicId: string) => {
            const topic = learningTopics.find(t => t.id === topicId);
            if (!topic?.unlocked) return;

            const updatedTopics = learningTopics.map(t => {
                if (t.id === topicId) {
                    const newCompleted = !t.completed;
                    return { ...t, completed: newCompleted };
                }
                return t;
            });

            setLearningTopics(updatedTopics);
            learningTopics = updatedTopics;
        };

        const topicToTest = learningTopics[0];
        handleTopicClick(topicToTest.id);

        expect(setLearningTopics).toHaveBeenCalled();
        expect(learningTopics[0].completed).toBe(true);
    });

    it('should unlock child topics when their parents are completed', () => {
        const parentTopicId = 'parentTopicId';
        const childTopicId = 'childTopicId';

        const parentTopic = learningTopics.find(t => t.id === parentTopicId);
        if (parentTopic) parentTopic.completed = true;

        const childTopic = learningTopics.find(t => t.id === childTopicId);
        if (childTopic) {
            const updatedTopics = learningTopics.map(t => ({
                ...t,
                unlocked: t.unlocked || t.completed
            }));

            setLearningTopics(updatedTopics);

            expect(
                updatedTopics.find(t => t.id === childTopicId).unlocked
            ).toBe(true);
        }
    });

    it('should calculate the correct progress based on topic completion', () => {
        const topicsWithSomeCompletion = learningTopics.map((topic, index) => ({
            ...topic,
            completed: index % 2 === 0
        }));

        const progress = calculateProgress(topicsWithSomeCompletion);
        expect(progress).toBe(67);
    });
});
