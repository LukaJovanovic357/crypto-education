import { Link, useNavigate } from 'react-router-dom';
import SingleResourceCard from '../../common/SingleResourceCard/SingleResourceCard';
import { educationTopics } from '../../../data/cryptoCurrencyBasics';
import { shortenText } from '../../../utils';

const BasicsOverview = () => {
    const navigate = useNavigate();

    return (
        <div
            style={{
                backgroundImage:
                    'linear-gradient(180deg, rgba(14,116,144,1) 8%, rgba(34,32,32,1) 85%)'
            }}
            className='p-6 h-full flex flex-col items-center pt-20'
        >
            <button
                className='self-start mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'
                onClick={() => navigate('/dashboard')}
            >
                Go Back
            </button>
            <h1 className='text-2xl font-bold mb-4 text-white'>
                Cryptocurrency Basics
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {educationTopics.map(topic => (
                    <Link key={topic.id} to={`/basics-overview/${topic.id}`}>
                        <SingleResourceCard
                            title={topic.title}
                            text={shortenText(topic.text)}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default BasicsOverview;
