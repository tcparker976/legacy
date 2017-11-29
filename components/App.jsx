import React from 'react';
import SearchBox from '../containers/SearchBox';
import MovieDetail from '../containers/MovieDetail';

export default function App() {
  return (
    <div>
      <h1>Movie Stuff</h1>
      <SearchBox />
      <MovieDetail />
    </div>
  );
}
