import { useParams, useNavigate } from 'react-router-dom';
import { tradingFundamentals } from '../../../data/tradingFundamentals';
import { findTopic } from '../../../utils';

const SingleFundamentalsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const topic = findTopic(tradingFundamentals, id || '');

    if (!topic) {
        return <p>Topic not found.</p>;
    }

    return (
        <div
            style={{
                backgroundImage:
                    'linear-gradient(180deg, rgba(14,116,144,1) 8%, rgba(34,32,32,1) 85%)'
            }}
            className='h-full'
        >
            <div
                items-center
                className='flex mx-auto w-[700px] flex-col pt-14 items-center align-middle p-6 h-full'
            >
                <button
                    onClick={() => navigate('/trading-fundamentals/')}
                    className='self-start mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'
                >
                    Go Back
                </button>
                <div className='border rounded-md border-[#fff] py-10 px-5'>
                    <h1 className='text-2xl text-white font-bold mb-4'>
                        {topic.title}
                    </h1>
                    <p className='text-white'>{topic.text}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleFundamentalsPage;
