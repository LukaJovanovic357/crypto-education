import { HomeIcon } from 'lucide-react';

const NotFound = () => {
    return (
        <div className='min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4'>
            <div className='text-center space-y-6 max-w-2xl'>
                <h1 className='text-8xl font-bold text-gray-900'>404</h1>

                <div className='space-y-2'>
                    <h2 className='text-3xl font-semibold text-gray-800'>
                        Page Not Found
                    </h2>
                    <p className='text-gray-600 text-lg'>
                        Sorry, we couldn't find the page you're looking for. The
                        page might have been removed, renamed, or doesn't exist.
                    </p>
                </div>

                <div className='flex justify-center'>
                    <div className='w-24 h-1 bg-blue-500 rounded-full'></div>
                </div>

                <div className='pt-4'>
                    <button
                        onClick={() => (window.location.href = '/dashboard')}
                        className='inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-150 ease-in-out shadow-sm'
                    >
                        <HomeIcon className='w-5 h-5 mr-2' />
                        Back to Home
                    </button>
                </div>

                <p className='text-sm text-gray-500 pt-8'>
                    If you believe this is a mistake, please contact our support
                    team.
                </p>
            </div>
        </div>
    );
};

export default NotFound;
