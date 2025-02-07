import { create } from 'zustand';
import { supabase } from '../api';
import { QuizState } from '../types/quiz';

export const useQuizStore = create<QuizState>((set, get) => ({
    quizzes: [],
    currentQuiz: null,
    currentIndex: 0,
    selectedAnswer: null,
    isAnswered: false,
    score: 0,
    stats: null,
    loading: false,
    error: null,
    selectedTopic: null,
    selectedDifficulty: null,

    fetchQuizzes: async (topic: string, difficulty: string) => {
        set({ loading: true, error: null });
        try {
            const { data, error } = await supabase
                .from('quizzes')
                .select('*')
                .eq('topic', topic)
                .eq('difficulty', difficulty);

            if (error) throw error;

            const formattedQuizzes =
                data?.map(quiz => ({
                    ...quiz,
                    options: quiz.options.map(
                        (text: string, index: number) => ({
                            id: String(index),
                            text
                        })
                    )
                })) || [];

            set({
                quizzes: formattedQuizzes,
                currentQuiz: formattedQuizzes[0] || null,
                currentIndex: 0,
                loading: false
            });
        } catch (error) {
            set({ error: (error as Error).message, loading: false });
        }
    },

    setCurrentQuiz: quiz => set({ currentQuiz: quiz }),

    selectAnswer: answer => {
        const { currentQuiz } = get();
        if (!currentQuiz || get().isAnswered) return;

        const isCorrect = answer === currentQuiz.correct_option;
        set(state => ({
            selectedAnswer: answer,
            isAnswered: true,
            score: isCorrect ? state.score + 1 : state.score
        }));
    },

    nextQuestion: () => {
        const { currentIndex, quizzes } = get();
        const nextIndex = currentIndex + 1;

        if (nextIndex < quizzes.length) {
            set({
                currentIndex: nextIndex,
                currentQuiz: quizzes[nextIndex],
                selectedAnswer: null,
                isAnswered: false
            });
        }
    },

    resetQuiz: () => {
        set({
            currentIndex: 0,
            selectedAnswer: null,
            isAnswered: false,
            score: 0,
            currentQuiz: get().quizzes[0] || null
        });
    },

    previousQuestion: () => {
        const { currentIndex, quizzes } = get();
        if (currentIndex > 0) {
            set({
                currentIndex: currentIndex - 1,
                currentQuiz: quizzes[currentIndex - 1],
                selectedAnswer: null,
                isAnswered: false
            });
        }
    },

    updateStats: async () => {
        const { score, quizzes, selectedTopic, selectedDifficulty } = get();

        try {
            const {
                data: { user }
            } = await supabase.auth.getUser();
            if (!user) return;

            const successRate = Math.round((score / quizzes.length) * 100);

            const { data: existingStats } = await supabase
                .from('id')
                .select('*')
                .eq('user_id', user.id)
                .eq('topic', selectedTopic)
                .eq('difficulty', selectedDifficulty)
                .single();

            if (existingStats) {
                const newStreak =
                    score === quizzes.length
                        ? existingStats.current_streak + 1
                        : 0;
                const bestStreak = Math.max(
                    newStreak,
                    existingStats.best_streak
                );

                await supabase
                    .from('id')
                    .update({
                        current_streak: newStreak,
                        best_streak: bestStreak,
                        total_quizes: existingStats.total_quizes + 1,
                        success_rate: Math.round(
                            (existingStats.success_rate *
                                existingStats.total_quizes +
                                successRate) /
                                (existingStats.total_quizes + 1)
                        ),
                        updated_at: new Date()
                    })
                    .eq('id', existingStats.id);
            } else {
                await supabase.from('id').insert({
                    user_id: user.id,
                    topic: selectedTopic,
                    difficulty: selectedDifficulty,
                    current_streak: score === quizzes.length ? 1 : 0,
                    best_streak: score === quizzes.length ? 1 : 0,
                    total_quizes: 1,
                    success_rate: successRate
                });
            }
        } catch (error) {
            console.error('Error updating stats:', error);
            set({ error: (error as Error).message });
        }
    },

    setSelectedTopic: topic => set({ selectedTopic: topic }),
    setSelectedDifficulty: difficulty => set({ selectedDifficulty: difficulty })
}));
