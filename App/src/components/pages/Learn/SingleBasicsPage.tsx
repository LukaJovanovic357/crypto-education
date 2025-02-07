import { useParams, useNavigate } from 'react-router-dom';
import { educationTopics } from '../../../data/cryptoCurrencyBasics';
import { findTopic } from '../../../utils';

const SingleBasicsPage = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const topic = findTopic(educationTopics, id || '');

    if (!topic) {
        return <p>Topic not found!</p>;
    }

    return (
        <div
            className='min-h-full flex flex-col justify-center'
            style={{
                backgroundImage:
                    'linear-gradient(180deg, rgba(14,116,144,1) 8%, rgba(34,32,32,1) 85%)'
            }}
        >
            <div className='flex mx-auto w-[700px] flex-col items-center align-middle p-6 h-full'>
                <button
                    onClick={() => navigate('/basics-overview/')}
                    className='self-start mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'
                >
                    Go Back
                </button>

                <div className='border rounded-md shadow-lg border-[#0E7490] py-10 px-5'>
                    <h1 className='text-2xl text-white font-bold mb-4'>
                        {topic.title}
                    </h1>
                    <p className='text-white'>{topic.text}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleBasicsPage;
