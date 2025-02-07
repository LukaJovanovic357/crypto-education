interface SingleResourceCardProps {
    title: string;
    text: string;
}

const SingleResourceCard: React.FC<SingleResourceCardProps> = ({
    title,
    text
}: SingleResourceCardProps) => {
    return (
        <div className='border rounded-lg p-4 shadow-md hover:shadow-lg transition'>
            <h2 className='text-lg font-bold mb-2 text-white'>{title}</h2>
            <p className='text-white'>{text}</p>
            <button className='mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'>
                View More
            </button>
        </div>
    );
};

export default SingleResourceCard;
