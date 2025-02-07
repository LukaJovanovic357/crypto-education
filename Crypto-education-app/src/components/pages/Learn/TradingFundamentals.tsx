import { Link, useNavigate } from 'react-router-dom';
import SingleResourceCard from '../../common/SingleResourceCard/SingleResourceCard';
import { tradingFundamentals } from '../../../data/tradingFundamentals';
import { shortenText } from '../../../utils';

const TradingFundamentals = () => {
    const navigate = useNavigate();

    return (
        <div
            style={{
                backgroundImage:
                    'linear-gradient(180deg, rgba(14,116,144,1) 8%, rgba(34,32,32,1) 85%)'
            }}
            className='p-6 h-full flex flex-col pt-20'
        >
            <button
                className='self-start mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'
                onClick={() => navigate('/dashboard')}
            >
                Go Back
            </button>
            <h1 className='text-2xl text-start font-bold my-8 text-white'>
                Cryptocurrency Basics
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {tradingFundamentals.map(topic => (
                    <Link
                        key={topic.id}
                        to={`/trading-fundamentals/${topic.id}`}
                    >
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

export default TradingFundamentals;
