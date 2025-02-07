import React from 'react';
import { useNavigate } from 'react-router-dom';

type ButtonProps = {
    name: string;
    route: string;
};

const Button: React.FC<ButtonProps> = ({ name, route }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(route);
    };

    return <button onClick={handleClick}>{name}</button>;
};

export default Button;
