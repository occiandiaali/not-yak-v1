import React from 'react';
import CountDown from './CountDown';

const Movies: React.FC = () => {
  return (
    <div className="container">
      <strong>Movies</strong>
      <CountDown/>
    </div>
  );
};

export default Movies;