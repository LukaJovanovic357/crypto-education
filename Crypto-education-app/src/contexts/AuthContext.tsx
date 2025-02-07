import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState
} from 'react';
import { supabase } from '../api';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { User } from '@supabase/supabase-js';

interface AuthContextType {
    user: User | null;
    loading: boolean;
    signUp: (email: string, password: string) => Promise<void>;
    signIn: (email: string, password: string) => Promise<void>;
    signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: true,
    signUp: async () => {},
    signIn: async () => {},
    signOut: async () => {}
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        const getSession = async () => {
            try {
                const { data, error } = await supabase.auth.getSession();

                console.log(`Data: ${JSON.stringify(data?.session?.user)}`);

                if (error) {
                    console.error('Error fetching session:', error.message);
                    setUser(null);
                } else {
                    setUser(data?.session?.user || null);
                }
            } catch (err) {
                console.error('Unexpected error fetching session:', err);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        getSession();

        const {
            data: { subscription }
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user || null);
        });

        return () => {
            subscription.unsubscribe();
        };
    }, []);

    const signUp = async (email: string, password: string) => {
        try {
            const { error } = await supabase.auth.signUp({
                email,
                password
            });
            if (error) {
                if (error.message.includes('already registered')) {
                    throw new Error(
                        'This email is already registered. Please sign in.'
                    );
                }
                throw new Error(error.message);
            }

            setUser(null);
            toast.success(
                `Sign-up successful! A confirmation email has been sent to ${email}.`,
                { duration: 5000 }
            );
        } catch (error: unknown) {
            if (error instanceof Error) {
                toast.error(`Sign-up failed: ${error.message}`, {
                    duration: 3000
                });
            }
        }
    };

    const signIn = async (email: string, password: string) => {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password
            });
            if (error) throw new Error(error.message);

            if (!data.user?.email_confirmed_at) {
                throw new Error(
                    `Your email is not confirmed. Please check your inbox (${email}) for the confirmation link.`
                );
            }

            setUser(data.user);
            toast.success('Log-in successful! Redirecting...', {
                duration: 3000
            });
            setTimeout(() => navigate('/dashboard'), 1000);
        } catch (error: unknown) {
            if (error instanceof Error) {
                toast.error(`Log-in failed: ${error.message}`, {
                    duration: 3000
                });
            }
        }
    };

    const signOut = async () => {
        try {
            await supabase.auth.signOut();
            setUser(null);
            toast.success('You have been signed out successfully.', {
                duration: 3000
            });
            navigate('/');
        } catch {
            toast.error('Failed to sign out. Please try again.', {
                duration: 3000
            });
        }
    };

    return (
        <AuthContext.Provider
            value={{ user, loading, signUp, signIn, signOut }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
