interface ErrorMessageProps {
    error: string;
    onRetry: () => void;
}

const ErrorMessage = ({ error, onRetry }: ErrorMessageProps) => (
    <div className='text-center'>
        <div className='text-red-500 mb-4'>{error}</div>
        <button
            onClick={onRetry}
            className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors'
        >
            Try Again
        </button>
    </div>
);

export default ErrorMessage;
