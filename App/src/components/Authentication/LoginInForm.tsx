import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

const LoginForm = ({ closeModal }: { closeModal: () => void }) => {
    const { signIn } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await signIn(email, password);
            closeModal();
        } catch (error: unknown) {
            if (error instanceof Error) {
                setError(error.message);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 className='text-2xl font-bold mb-4'>Sign In</h2>
            <div className='mb-4'>
                <label
                    htmlFor='email'
                    className='block mb-2 text-sm text-zinc-700'
                >
                    Email
                </label>
                <input
                    type='email'
                    id='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className='border rounded p-2 w-full'
                    required
                />
            </div>
            <div className='mb-4'>
                <label
                    htmlFor='password'
                    className='block mb-2 text-sm text-zinc-700'
                >
                    Password
                </label>
                <input
                    type='password'
                    id='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className='border rounded p-2 w-full'
                    required
                />
            </div>
            {error && <p className='text-red-500 text-sm'>{error}</p>}
            <div className='flex align-bottom justify-start'>
                <button
                    type='submit'
                    className='bg-cyan-700 mr-4 text-white px-6 py-3 rounded hover:bg-cyan-600'
                >
                    Sign In
                </button>
                <button
                    type='button'
                    onClick={closeModal}
                    className='text-cyan-700 underline mt-4'
                >
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default LoginForm;
