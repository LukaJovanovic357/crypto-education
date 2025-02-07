import { glossary } from './../data/cryptoGlossary';

export const filterGlossaryTerms = (
    terms: typeof glossary,
    searchTerm: string
) => {
    return terms.filter(entry =>
        entry.term.toLowerCase().includes(searchTerm.toLowerCase())
    );
};

export const paginateGlossaryTerms = (
    terms: typeof glossary,
    page: number,
    termsPerPage: number
) => {
    const startIndex = (page - 1) * termsPerPage;
    return terms.slice(startIndex, startIndex + termsPerPage);
};
