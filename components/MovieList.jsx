import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const url = 'https://image.tmdb.org/t/p/w154';

const MovieList = ({ movies, fetchMovie }) => {

  const renderMovieList = () => {
    if (movies) {
      const movieList = movies.filter(movie => movie.poster_path).map(movie => (
        <Link to={`/moviedetails/${movie.id}/${movie.poster_path.substr(1, movie.poster_path.length - 5)}`}>
          <div key={movie.id}>
            <img src={url + movie.poster_path} alt={movie.title} />
            <h2>{movie.title}</h2>
          </div>
        </Link>
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
