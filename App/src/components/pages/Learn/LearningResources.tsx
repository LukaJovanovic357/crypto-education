import { learningResources } from '../../../data/learningResources';
import SingleResourceCard from '../Learn/SingleResourceCard';
import learningBg from '../../../assets/images/learning-resources-bg.jpg';

const LearningResource = () => {
    return (
        <div
            className='p-10 lg:min-h-screen flex flex-col'
            style={{
                backgroundImage: `url(${learningBg})`,
                opacity: 1,
                zIndex: -1
            }}
        >
            <h1 className='text-white mb-8 text-2xl font-bold'>
                Learning Resources
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {learningResources.map(resource => (
                    <SingleResourceCard
                        key={resource.title}
                        title={resource.title}
                        description={resource.description}
                        link={resource.link}
                    />
                ))}
            </div>
        </div>
    );
};
export default LearningResource;
