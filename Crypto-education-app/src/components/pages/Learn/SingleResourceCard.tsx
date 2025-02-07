import { FaExternalLinkAlt } from 'react-icons/fa';

interface SingleResourceCardProps {
    title: string;
    description: string;
    link: string;
}

const SingleResourceCard: React.FC<SingleResourceCardProps> = ({
    title,
    description,
    link
}) => {
    return (
        <div className='border bg-black rounded-lg p-10 shadow-md hover:shadow-lg transition'>
            <h2 className='text-white text-lg font-bold mb-2'>{title}</h2>
            <p className='text-white mb-4'>{description}</p>
            <a
                href={link}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'
            >
                Visit Link
                <FaExternalLinkAlt className='ml-2' />
            </a>
        </div>
    );
};

export default SingleResourceCard;
