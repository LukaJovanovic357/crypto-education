import { describe, expect, it } from 'vitest';
import { findTopic } from '../../../../utils';

describe('findTopic', () => {
    const sampleTopics = [
        { id: 1, title: 'Bitcoin Basics', text: 'Learn about Bitcoin.' },
        {
            id: 2,
            title: 'Ethereum Overview',
            text: 'Explore Ethereum features.'
        }
    ];

    it('should return the correct topic when a matching ID is found', () => {
        expect(findTopic(sampleTopics, '2')).toEqual({
            id: 2,
            title: 'Ethereum Overview',
            text: 'Explore Ethereum features.'
        });
    });

    it('should return undefined when no matching ID is found', () => {
        expect(findTopic(sampleTopics, '99')).toBeUndefined();
    });

    it('should return undefined for an empty or invalid ID', () => {
        expect(findTopic(sampleTopics, '')).toBeUndefined();
        expect(findTopic(sampleTopics, 'invalid')).toBeUndefined();
    });

    it('should return undefined if topics array is empty', () => {
        expect(findTopic([], '1')).toBeUndefined();
    });
});
