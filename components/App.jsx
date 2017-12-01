import React from 'react';
import SearchBarContainer from '../containers/SearchBarContainer';
import MovieListContainer from '../containers/MovieListContainer';

const App = (props) => {
  return (
    <div>
      <h1>MarsKliff</h1>
      {props.children}
    </div>
  );
}

export default App; 
