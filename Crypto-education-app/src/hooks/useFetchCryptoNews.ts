import { useEffect, useState } from 'react';
import axios from 'axios';

const API = import.meta.env.VITE_CRYPTO_NEWS_API;

interface Article {
    article_id: string;
    title: string;
    description: string | null;
    image_url: string | null;
    link: string;
    pubDate: string;
}

const API_URL = `https://newsdata.io/api/1/latest?apikey=${API}&q=crypto`;

const getTodayDateString = () => new Date().toISOString().slice(0, 10);

export const useFetchCryptoNews = () => {
    const [news, setNews] = useState<Article[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            try {
                const response = await axios.get(API_URL);
                const fetchedNews = response.data.results.slice(0, 10);

                localStorage.setItem('newsData', JSON.stringify(fetchedNews));
                localStorage.setItem('newsFetchDate', getTodayDateString());

                setNews(fetchedNews);
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    console.error(
                        'API Error:',
                        error.response?.data || error.message
                    );
                }
                setError('Failed to fetch news. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        const loadNewsFromLocalStorage = () => {
            const savedNews = localStorage.getItem('newsData');
            const savedDate = localStorage.getItem('newsFetchDate');
            const today = getTodayDateString();

            if (savedNews && savedDate === today) {
                setNews(JSON.parse(savedNews));
                console.log('Loaded news from local storage');
            } else {
                console.log('Fetching fresh news from API');
                fetchNews();
            }
        };

        loadNewsFromLocalStorage();
    }, []);

    return {
        news,
        loading,
        error
    };
};
