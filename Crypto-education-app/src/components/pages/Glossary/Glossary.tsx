import { useState } from 'react';
import { glossary } from '../../../data/cryptoGlossary';
import {
    filterGlossaryTerms,
    paginateGlossaryTerms
} from '../../../types/glossaryUtils';

const Glossary: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');

    const termsPerPage = 10;

    const filteredTerms = filterGlossaryTerms(glossary, searchTerm);
    const paginatedTerms = paginateGlossaryTerms(
        filteredTerms,
        currentPage,
        termsPerPage
    );

    const totalPages = Math.ceil(filteredTerms.length / termsPerPage);

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    return (
        <div
            style={{
                backgroundImage:
                    'linear-gradient(180deg, rgba(14,116,144,1) 8%, rgba(34,32,32,1) 85%)'
            }}
            className='lg:min-h-screen flex flex-col items-center justify-center py-24'
        >
            <h1 className='text-white text-2xl mb-5 font-bold mx-auto'>
                Cryptocurrency Glossary
            </h1>
            <div>
                <div className='flex items-center justify-start rounded-md w-[90%] mx-auto mb-4'>
                    <input
                        type='text'
                        placeholder='Search for a term...'
                        value={searchTerm}
                        onChange={e => {
                            setSearchTerm(e.target.value);
                            setCurrentPage(1);
                        }}
                        className='p-4 border border-gray-300 w-full rounded-md mb-2'
                    />
                </div>
                <div className='bg-white p-7 rounded-md w-[90%] mx-auto'>
                    {paginatedTerms.length > 0 ? (
                        paginatedTerms.map(entry => (
                            <div key={entry.id} className='mb-4'>
                                <h2 className='text-xl font-semibold'>
                                    {entry.term}
                                </h2>
                                <p className='text-gray-700'>
                                    {entry.definition}
                                </p>
                            </div>
                        ))
                    ) : (
                        <p className='text-gray-500'>
                            No terms found for "{searchTerm}".
                        </p>
                    )}
                </div>

                {totalPages > 1 && (
                    <div className='flex justify-center items-center mt-4 space-x-4'>
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={`px-4 py-2 border rounded text-white ${
                                currentPage === 1
                                    ? 'text-gray-400 cursor-not-allowed'
                                    : 'hover:bg-gray-200 hover:text-black'
                            }`}
                        >
                            Previous
                        </button>
                        <p className='text-white'>
                            Page {currentPage} of {totalPages}
                        </p>
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className={`px-4 py-2 border rounded text-white ${
                                currentPage === totalPages
                                    ? 'text-gray-400 cursor-not-allowed'
                                    : 'hover:bg-gray-200 hover:text-black'
                            }`}
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Glossary;
