import React from 'react';
import Africa from './Africa';
import World from './World';
import Movies from './Movies';
import './ExploreContainer.css';

import { Route, Switch } from 'react-router';

// interface ContainerProps {
//   name: string;
// }

// const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
//   return (
//     <div className="container">
//       <strong>{name}</strong>
//     </div>
//   );
// };
const ExploreContainer: React.FC = () => {
  return(
      <Switch>
        <Route path="/page/africa" component={Africa} />
        <Route path="/page/world" component={World} />
        <Route path="/page/movies" component={Movies} />
      </Switch>
  );
};
export default ExploreContainer;
