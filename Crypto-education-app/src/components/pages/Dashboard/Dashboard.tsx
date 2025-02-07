import MarketOverview from './MarketOverview';
import EducationCard from '../../common/EducationCard/EducationCard';
import { Link } from 'react-router-dom';
import bgImage from '../../../assets/images/market-bg.webp';

const Dashboard = () => {
    return (
        <main
            className='min-h-screen px-10 py-20 flex flex-col justify-center items-center'
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover'
            }}
        >
            <section className='w-full max-w-7xl'>
                <MarketOverview />
            </section>

            <section className='w-full max-w-7xl mt-10'>
                <h2 className='text-white text-2xl font-bold mb-5 '>
                    Educational Resources
                </h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                    <Link to={'/basics-overview'}>
                        <EducationCard
                            title={'Cryptocurrency Basics'}
                            description={
                                'Learn the fundamentals of blockchain technology and how cryptocurrencies work.'
                            }
                        />
                    </Link>
                    <Link to={'/trading-fundamentals/'}>
                        <EducationCard
                            title={'Trading Fundamentals'}
                            description={
                                'Understand the basics of cryptocurrency trading and market analysis.'
                            }
                        />
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default Dashboard;
