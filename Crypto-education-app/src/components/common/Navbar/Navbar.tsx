import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import logo from '../../../assets/images/Logo.png';
import { FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [showModal, setShowModal] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, signOut } = useAuth();

    const handleSignOut = async () => {
        await signOut();
        setShowModal(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const menuItems = [
        { path: '/dashboard', label: 'Dashboard' },
        { path: '/resources', label: 'Resources' },
        { path: '/quiz', label: 'Quiz' },
        { path: '/glossary', label: 'Glossary' },
        { path: '/crypto-news', label: 'Crypto-news' },
        { path: '/currency-calculator', label: 'Currency-calculator' },
        { path: '/learning-path', label: 'Learning-path' }
    ];

    return (
        <>
            <nav className='bg-cyan-700 pt-2 text-white relative border-b-[1px]'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-2 lg:px-8'>
                    <div className='flex justify-between items-center h-16'>
                        <div className='flex items-center'>
                            <img src={logo} alt='Logo' className='h-28  w-28' />
                            <button
                                onClick={toggleMenu}
                                className='inline-flex items-center mt-5 justify-center  rounded-md hover:bg-cyan-600 focus:outline-none sm:hidden'
                            >
                                <div className='relative w-6 h-6 transform transition-all duration-300'>
                                    <span
                                        className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 ${
                                            isMenuOpen
                                                ? 'rotate-45 translate-y-2.5'
                                                : '-translate-y-2'
                                        }`}
                                    />
                                    <span
                                        className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 ${
                                            isMenuOpen
                                                ? 'opacity-0'
                                                : 'opacity-100'
                                        }`}
                                    />
                                    <span
                                        className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 ${
                                            isMenuOpen
                                                ? '-rotate-45 translate-y-2.5'
                                                : 'translate-y-2'
                                        }`}
                                    />
                                </div>
                            </button>

                            <div className='hidden sm:block ml-6'>
                                <ul className='flex items-center gap-7'>
                                    {menuItems.map(item => (
                                        <li key={item.path}>
                                            <Link
                                                to={item.path}
                                                className='font-semibold hover:text-cyan-200 transition-colors duration-200'
                                            >
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className='flex items-center'>
                            {user ? (
                                <button
                                    className='ml-4 bg-white text-cyan-700 font-bold px-4 py-2 rounded hover:bg-gray-100 transition-colors duration-200'
                                    onClick={() => setShowModal(true)}
                                >
                                    Sign Out
                                </button>
                            ) : (
                                <span className='text-sm'>
                                    Please sign in to access features.
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                {isMenuOpen && (
                    <div
                        className='fixed inset-0 bg-black bg-opacity-50 z-40'
                        onClick={closeMenu}
                    />
                )}

                <div
                    className={`fixed inset-y-0 left-0 transform ${
                        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    } w-64 bg-cyan-800 overflow-y-auto transition-transform duration-300 ease-in-out sm:hidden z-50`}
                >
                    <div className='px-2 pt-6 pb-3 space-y-1'>
                        <div className='flex justify-between items-center px-3'>
                            <img src={logo} alt='Logo' className='h-8' />
                            <button onClick={closeMenu} className='text-white'>
                                <FaTimes size={24} />
                            </button>
                        </div>
                        {menuItems.map(item => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className='block px-3 py-2 rounded-md text-white font-medium hover:bg-cyan-600 transition-colors duration-200'
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>

            {showModal && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
                    <div className='bg-white rounded-lg p-8 shadow-md text-center'>
                        <h2 className='text-xl font-semibold mb-4'>
                            Are you sure you want to sign out?
                        </h2>
                        <div className='flex justify-center gap-4'>
                            <button
                                className='bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition-colors duration-200'
                                onClick={handleSignOut}
                            >
                                Yes
                            </button>
                            <button
                                className='bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition-colors duration-200'
                                onClick={() => setShowModal(false)}
                            >
                                No
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
