import React from 'react';
import CountDown from './CountDown';

const World: React.FC = () => {
    return (
        <div className="container">
            <strong>World</strong>
            <CountDown />
        </div>
    );
};

export default World;