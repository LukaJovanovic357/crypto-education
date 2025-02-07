interface EducationCardProps {
    title: string;
    description: string;
}

const EducationCard: React.FC<EducationCardProps> = ({
    title,
    description
}) => {
    return (
        <div className='border min-h-32 bg-black rounded-lg p-4 shadow-md hover:shadow-[0_0_10px_4px_rgba(255,255,255,0.5)] transition'>
            <h3 className='text-lg text-white font-bold mb-2'>{title}</h3>
            <p className='text-white'>{description}</p>
        </div>
    );
};

export default EducationCard;
