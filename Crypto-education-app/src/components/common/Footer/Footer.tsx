import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-cyan-700 text-white px-4 sm:px-6 lg:px-8 py-10'>
            <div className='max-w-7xl mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    <div className='space-y-3'>
                        <h2 className='text-xl font-bold'>CryptoEdu</h2>
                        <p className='text-sm text-gray-100'>
                            CryptoEdu is your go-to platform to master the
                            basics of cryptocurrency. Learn at your own pace
                            with interactive resources and AI assistance.
                        </p>
                    </div>

                    <div className='space-y-3'>
                        <h2 className='text-xl font-bold'>Quick Links</h2>
                        <ul className='text-sm space-y-2'>
                            <li>
                                <Link
                                    to='/dashboard'
                                    className='hover:underline hover:text-cyan-200 transition-colors duration-200'
                                >
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/ai-assistant'
                                    className='hover:underline hover:text-cyan-200 transition-colors duration-200'
                                >
                                    AI Assistant
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/resources'
                                    className='hover:underline hover:text-cyan-200 transition-colors duration-200'
                                >
                                    Resources
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/quiz'
                                    className='hover:underline hover:text-cyan-200 transition-colors duration-200'
                                >
                                    Quiz
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className='space-y-3'>
                        <h2 className='text-xl font-bold'>Contact Us</h2>
                        <ul className='text-sm space-y-2'>
                            <li>Email: support@cryptoedu.com</li>
                            <li>
                                <a
                                    href='https://twitter.com'
                                    className='hover:underline hover:text-cyan-200 transition-colors duration-200'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a
                                    href='https://linkedin.com'
                                    className='hover:underline hover:text-cyan-200 transition-colors duration-200'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='mt-10 pt-5 border-t border-cyan-600'>
                    <p className='text-sm text-center text-gray-100'>
                        &copy; {new Date().getFullYear()} CryptoEdu. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
