import { useFetchCryptoNews } from '../../../hooks/useFetchCryptoNews';
import { shortenText } from '../../../utils';
import LoadingIndicator from '../../UI/LoadingIndicator';

const CryptoNewsPage = () => {
    const { news, loading, error } = useFetchCryptoNews();

    return (
        <div
            style={{
                backgroundImage:
                    'linear-gradient(180deg, rgba(14,116,144,1) 8%, rgba(34,32,32,1) 85%)'
            }}
        >
            <div className='min-h-full mx-auto  py-32  max-w-[1440px]'>
                <h1 className='text-2xl font-bold mb-4 text-white'>
                    Crypto News
                </h1>
                {loading && <LoadingIndicator text='Loading news...' />}
                {error && <p className='text-red-500'>{error}</p>}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols3 gap-4'>
                    {news.map(article => (
                        <div
                            key={article.article_id}
                            className='rounder-lg p-4 shadow-md bg-cyan-600'
                        >
                            {article.image_url && (
                                <img
                                    src={article.image_url}
                                    alt={article.title}
                                    className='w-full h-48 object-cover mb-4 '
                                />
                            )}
                            <h2 className='text-lg text-white font-semibold mb-2'>
                                {article.title}
                            </h2>
                            <p className='text-sm mb-4 text-white'>
                                {shortenText(
                                    article.description ||
                                        'No description available.'
                                )}
                            </p>
                            <a
                                href={article.link}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-blue-300 hover:underline'
                            >
                                Read more
                            </a>
                            <p className='text-xs text-white mt-2'>
                                Published:{' '}
                                {new Date(article.pubDate).toLocaleString()}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default CryptoNewsPage;
