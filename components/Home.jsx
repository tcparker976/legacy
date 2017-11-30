import React from 'react';
import MovieListContainer from '../containers/MovieListContainer';
import NavBar from './NavBar.jsx';

const Home = () => {
  return (
    <div>
      <NavBar />
      <MovieListContainer />
    </div>
  );
}

export default Home; 