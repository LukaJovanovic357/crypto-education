import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

export const shortenText = (text: string) => {
    if (text.length > 100) {
        return text.slice(0, 100) + '...';
    }
    return text;
};

export const findTopic = (
    topics: { id: number; title: string; text: string }[],
    id: string
) => {
    if (!id) return undefined;
    return topics.find(topic => topic.id === parseInt(id, 10));
};
