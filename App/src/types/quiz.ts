export interface QuizOption {
    id: string;
    text: string;
}

export interface Quiz {
    id: string;
    topic: string;
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    question: string;
    options: QuizOption[];
    correct_option: string;
}

export interface QuizStats {
    id: string;
    user_id: string;
    topic: string;
    difficulty: string;
    current_streak: number;
    best_streak: number;
    total_quizes: number;
    success_rate: number;
    updated_at: string;
}

export interface QuizState {
    quizzes: Quiz[];
    currentQuiz: Quiz | null;
    currentIndex: number;
    selectedAnswer: string | null;
    isAnswered: boolean;
    score: number;
    stats: QuizStats | null;
    loading: boolean;
    previousQuestion: () => void;
    error: string | null;
    selectedTopic: string | null;
    selectedDifficulty: string | null;
    fetchQuizzes: (topic: string, difficulty: string) => Promise<void>;
    setCurrentQuiz: (quiz: Quiz) => void;
    selectAnswer: (answer: string) => void;
    nextQuestion: () => void;
    resetQuiz: () => void;
    updateStats: () => Promise<void>;
    setSelectedTopic: (topic: string | null) => void;
    setSelectedDifficulty: (difficulty: string | null) => void;
}
