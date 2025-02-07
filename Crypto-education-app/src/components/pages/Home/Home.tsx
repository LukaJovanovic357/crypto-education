import { useState } from 'react';

import Modal from '../../common/Modal/Modal';
import SignUpForm from '../../Authentication/SignUpForm';
import LoginForm from '../../Authentication/LoginInForm';

const Home = () => {
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const openSignUp = () => setIsSignUpOpen(true);
    const closeSignUp = () => setIsSignUpOpen(false);

    const openLogin = () => setIsLoginOpen(true);
    const closeLogin = () => setIsLoginOpen(false);

    return (
        <div className='flex items-center justify-center min-h-screen bg-gradient-to-br from-cyan-100 via-white to-cyan-100'>
            <div className='text-center'>
                <h1 className='text-zinc-950 text-5xl font-bold mb-8'>
                    Welcome to Learn Cryptocurrency
                </h1>
                <p className='text-zinc-950 text-lg mb-6'>
                    Start your journey to mastering cryptocurrency.
                </p>
                <div className='flex flex-col items-center gap-4'>
                    <button
                        onClick={openSignUp}
                        className='bg-cyan-700 text-white px-6 py-3 rounded hover:bg-cyan-600 hover:cursor-pointer'
                    >
                        Sign Up
                    </button>
                    <p className='text-zinc-950'>
                        Already registered?{' '}
                        <button
                            onClick={openLogin}
                            className='text-cyan-700 underline hover:text-cyan-500 hover:cursor-pointer'
                        >
                            Sign In
                        </button>
                    </p>
                </div>
            </div>

            <Modal isOpen={isSignUpOpen} onClose={closeSignUp}>
                <SignUpForm closeModal={closeSignUp} />
            </Modal>

            <Modal isOpen={isLoginOpen} onClose={closeLogin}>
                <LoginForm closeModal={closeLogin} />
            </Modal>
        </div>
    );
};

export default Home;
