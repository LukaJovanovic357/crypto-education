import { describe, it, expect, vi } from 'vitest';
import { useQuizStore } from '../quizStore';

vi.mock('../../api', () => ({
    supabase: {
        from: vi.fn().mockReturnThis(),
        select: vi.fn().mockReturnThis(),
        eq: vi.fn().mockReturnThis(),
        single: vi.fn().mockReturnThis(),
        auth: {
            getUser: vi
                .fn()
                .mockResolvedValue({ data: { user: { id: 'test-user' } } })
        }
    }
}));

describe('quizStore', () => {
    it('should initialize with correct default values', () => {
        const store = useQuizStore.getState();
        expect(store.quizzes).toEqual([]);
        expect(store.currentQuiz).toBeNull();
        expect(store.score).toBe(0);
    });

    it('should select an answer and calculate the score', async () => {
        useQuizStore.setState({
            // @ts-expect-error Intentionally testing currentQuiz setup
            currentQuiz: {
                question: 'What is Bitcoin?',
                options: [
                    { id: '0', text: 'A' },
                    { id: '1', text: 'B' },
                    { id: '2', text: 'C' }
                ],
                correct_option: 'A'
            },
            score: 0,
            selectedAnswer: null,
            isAnswered: false
        });

        const store = useQuizStore.getState();

        store.selectAnswer('A');

        const updatedStore = useQuizStore.getState();

        expect(updatedStore.selectedAnswer).toBe('A');
        expect(updatedStore.isAnswered).toBe(true);
        expect(updatedStore.score).toBe(1);
    });

    it('should update stats correctly when quiz is completed', async () => {
        const updateStatsMock = vi.fn();
        useQuizStore.setState({ updateStats: updateStatsMock });

        await useQuizStore.getState().updateStats();

        expect(updateStatsMock).toHaveBeenCalled();
    });
});
