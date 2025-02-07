import { useEffect } from 'react';
import useCryptoStore from '../../../contexts/cryptoStore';

const MarketOverview = () => {
    const { marketData, fetchMarketData, isLoading, error } = useCryptoStore();

    useEffect(() => {
        fetchMarketData();
    }, [fetchMarketData]);

    if (isLoading) {
        return (
            <div className='min-h-[50vh] flex items-center justify-center'>
                <div className='text-center space-y-4'>
                    <div className='w-12 h-12 border-4 border-cyan-700 border-t-transparent rounded-full animate-spin mx-auto'></div>
                    <p className='text-gray-600'>Loading market data...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className='min-h-[50vh] flex items-center justify-center'>
                <div className='bg-red-50 text-red-700 px-6 py-4 rounded-lg max-w-md text-center'>
                    <h3 className='font-semibold mb-2'>Error Loading Data</h3>
                    <p className='text-sm'>{error}</p>
                    <button
                        onClick={fetchMarketData}
                        className='mt-4 bg-red-100 px-4 py-2 rounded hover:bg-red-200 transition-colors duration-200'
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className='max-w-7xl mx-auto'>
            <div className='mb-6'>
                <h2 className='text-2xl font-bold text-white'>
                    Market Overview
                </h2>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {marketData?.map(coin => (
                    <div
                        key={coin.id}
                        className='bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden'
                    >
                        <div className='p-4'>
                            <div className='flex justify-between items-start'>
                                <div>
                                    <h3 className='font-bold text-lg text-gray-900'>
                                        {coin.name}
                                    </h3>
                                    <p className='text-sm text-gray-500'>
                                        {coin.symbol.toUpperCase()}
                                    </p>
                                </div>
                                <div
                                    className={`px-2 py-1 rounded text-sm ${
                                        coin.price_change_percentage_24h >= 0
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-red-100 text-red-800'
                                    }`}
                                >
                                    {coin.price_change_percentage_24h.toFixed(
                                        2
                                    )}
                                    %
                                </div>
                            </div>

                            <div className='mt-4'>
                                <div className='flex justify-between items-baseline'>
                                    <p className='text-2xl font-bold text-gray-900'>
                                        $
                                        {coin.current_price.toLocaleString(
                                            undefined,
                                            {
                                                minimumFractionDigits: 2,
                                                maximumFractionDigits: 2
                                            }
                                        )}
                                    </p>
                                    <p className='text-sm text-gray-500'>
                                        24h change
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MarketOverview;
