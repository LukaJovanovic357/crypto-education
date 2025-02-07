const ProgressBar = ({ progress }: { progress: number }) => (
    <div className='w-full h-4 bg-gray-200 rounded-full overflow-hidden'>
        <div
            className='h-full bg-blue-500 transition-all duration-500'
            style={{ width: `${progress}%` }}
        />
    </div>
);

export default ProgressBar;
