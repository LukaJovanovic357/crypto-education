import { Award, GraduationCap, Star, BookOpen } from 'lucide-react';

const ExpertCelebration = ({ onClose }: { onClose: () => void }) => (
    <div className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50'>
        <div className='bg-white rounded-lg p-8 max-w-2xl w-full text-center'>
            <div className='inline-block mb-4'>
                <Award className='w-16 h-16 text-yellow-500' />
            </div>

            <h2 className='text-3xl font-bold mb-4'>
                Congratulations, Crypto Expert! 🎉
            </h2>
            <p className='text-xl text-gray-600 mb-6'>
                You've completed all levels and become a cryptocurrency expert!
            </p>

            <div className='bg-gray-50 p-6 rounded-lg mb-6'>
                <h3 className='text-xl font-semibold mb-4'>
                    Next Steps for Your Journey
                </h3>
                <ul className='text-left space-y-4'>
                    <li className='flex items-start'>
                        <GraduationCap className='w-6 h-6 mr-2 text-blue-500 flex-shrink-0 mt-1' />
                        <span>
                            Consider becoming a mentor on platforms like{' '}
                            <a
                                href='#'
                                className='text-blue-500 hover:underline'
                            >
                                CryptoMentor
                            </a>
                        </span>
                    </li>
                    <li className='flex items-start'>
                        <Star className='w-6 h-6 mr-2 text-blue-500 flex-shrink-0 mt-1' />
                        <span>
                            Contribute to open-source blockchain projects on{' '}
                            <a
                                href='https://github.com/topics/blockchain'
                                className='text-blue-500 hover:underline'
                            >
                                GitHub
                            </a>
                        </span>
                    </li>
                    <li className='flex items-start'>
                        <BookOpen className='w-6 h-6 mr-2 text-blue-500 flex-shrink-0 mt-1' />
                        <span>
                            Join research communities on{' '}
                            <a
                                href='https://ethereum.org/en/community/research/'
                                className='text-blue-500 hover:underline'
                            >
                                Ethereum Research
                            </a>
                        </span>
                    </li>
                </ul>
            </div>

            <button
                onClick={onClose}
                className='px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors'
            >
                Continue Learning
            </button>
        </div>
    </div>
);

export default ExpertCelebration;
