import React from 'react';
import SearchBarContainer from '../containers/SearchBarContainer';
import MovieListContainer from '../containers/MovieListContainer';

const App = () => {
  return (
    <div>
      <h1>CliffOnMars</h1>
      <SearchBarContainer />
      <MovieListContainer />
    </div>
  );
}

export default App; 
