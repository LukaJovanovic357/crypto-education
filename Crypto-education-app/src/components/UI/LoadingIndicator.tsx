import { ClipLoader } from 'react-spinners';

const LoadingIndicator = ({ text }: { text: string }) => (
    <div className='min-h-screen flex items-center justify-center'>
        <div className='w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin'></div>
        <ClipLoader color='#3b82f6' size={40} />
        <span className='ml-2 text-gray-600'>{text}</span>
    </div>
);

export default LoadingIndicator;
