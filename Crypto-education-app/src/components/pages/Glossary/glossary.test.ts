import { describe, it, expect } from 'vitest';
import {
    filterGlossaryTerms,
    paginateGlossaryTerms
} from '../../../types/glossaryUtils';

const mockGlossary = [
    { id: 1, term: 'Bitcoin', definition: 'A cryptocurrency' },
    { id: 2, term: 'Ethereum', definition: 'A decentralized platform' },
    { id: 3, term: 'NFT', definition: 'Non-fungible token' }
];

describe('filterGlossaryTerms', () => {
    it('should filter terms based on search input', () => {
        const result = filterGlossaryTerms(mockGlossary, 'bit');
        expect(result).toEqual([
            { id: 1, term: 'Bitcoin', definition: 'A cryptocurrency' }
        ]);
    });

    it('should return an empty array if no terms match', () => {
        const result = filterGlossaryTerms(mockGlossary, 'nonexistent');
        expect(result).toEqual([]);
    });
});

describe('paginateGlossaryTerms', () => {
    it('should return correct terms for page 1 with 2 terms per page', () => {
        const result = paginateGlossaryTerms(mockGlossary, 1, 2);
        expect(result).toEqual([
            { id: 1, term: 'Bitcoin', definition: 'A cryptocurrency' },
            { id: 2, term: 'Ethereum', definition: 'A decentralized platform' }
        ]);
    });

    it('should return the correct term for page 2', () => {
        const result = paginateGlossaryTerms(mockGlossary, 2, 2);
        expect(result).toEqual([
            { id: 3, term: 'NFT', definition: 'Non-fungible token' }
        ]);
    });

    it('should return an empty array if page is out of bounds', () => {
        const result = paginateGlossaryTerms(mockGlossary, 3, 2);
        expect(result).toEqual([]);
    });
});
