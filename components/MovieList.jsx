import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const url = 'https://image.tmdb.org/t/p/w154';

const MovieList = ({ movies, fetchMovie }) => {

  const renderMovieList = () => {
    if (movies) {
      const movieList = movies.filter(movie => movie.poster_path).map(movie => (
        <div key={movie.id} onClick={() => fetchMovie(movie.id)}>
          <Link to={`/moviedetails/${movie.id}`}>
            <img src={url + movie.poster_path} alt={movie.title} />
            <h2>{movie.title}</h2> 
          </Link>  
        </div>
      ));
      return movieList;
    } else {
      return (
        <div />
      )
    }
  }

  return (
    <div className="movie-list-grid">
      {renderMovieList()}
    </div>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  })).isRequired,
  fetchMovie: PropTypes.func.isRequired,
};

export default MovieList;
