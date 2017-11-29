import React from 'react';
import SearchBarContainer from '../containers/SearchBarContainer';
import MovieListContainer from '../containers/MovieListContainer';
import MovieDetailContainer from '../containers/MovieDetailContainer';

const App = () => {
  return (
    <div>
      <h1>MarsKliff</h1>
      <SearchBarContainer />
      <MovieListContainer />
      <MovieDetailContainer />
    </div>
  );
}

export default App; 
