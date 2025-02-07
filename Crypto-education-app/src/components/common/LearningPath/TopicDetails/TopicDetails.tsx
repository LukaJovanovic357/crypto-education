import { Lightbulb, BookOpen, ArrowRight } from 'lucide-react';
import type { Topic } from '../../../../types/learningPath';

type SingleResource = {
    title: string;
    url: string;
    type: string;
};

const TopicDetails = ({
    topic,
    onClose
}: {
    topic: Topic;
    onClose: () => void;
}) => (
    <div
        className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50'
        onClick={onClose}
    >
        <div
            className='bg-white rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto'
            onClick={e => e.stopPropagation()}
        >
            <h2 className='text-2xl font-bold mb-4'>{topic.title}</h2>
            <p className='text-gray-600 mb-6'>{topic.description}</p>

            <div className='space-y-6'>
                <div>
                    <h3 className='text-lg font-semibold mb-3 flex items-center'>
                        <Lightbulb className='w-5 h-5 mr-2' />
                        Learning Tips
                    </h3>
                    <ul className='list-disc pl-5 space-y-2'>
                        {topic.tips.map((tip: string, i: number) => (
                            <li key={i} className='text-gray-600'>
                                {tip}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className='text-lg font-semibold mb-3 flex items-center'>
                        <BookOpen className='w-5 h-5 mr-2' />
                        Resources
                    </h3>
                    <div className='space-y-2'>
                        {topic.resources.map(
                            (resource: SingleResource, i: number) => (
                                <a
                                    key={i}
                                    href={resource.url}
                                    className='flex items-center p-2 hover:bg-gray-50 rounded'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <ArrowRight className='w-4 h-4 mr-2 text-blue-500' />
                                    <span>{resource.title}</span>
                                    <span className='ml-2 text-xs text-gray-500'>
                                        ({resource.type})
                                    </span>
                                </a>
                            )
                        )}
                    </div>
                </div>
            </div>

            <button
                onClick={onClose}
                className='mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors'
            >
                Close
            </button>
        </div>
    </div>
);

export default TopicDetails;
