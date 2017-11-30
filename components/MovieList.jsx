import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieList = ({ movies, fetchMovie }) => {

  const renderMovieList = () => {
    if (movies) {
      console.log(movies);
      const movieList = movies.filter(mov => mov.Poster !== "N/A").map(movie => {
        return (
          <Link to={`/moviedetails/${movie.imdbID}`} key={movie.imdbID}>
            <div>
              <img src={movie.Poster} alt={movie.title} />
              <h2>{movie.Title}</h2>
            </div>
          </Link>
        );
      });
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
  })),
  fetchMovie: PropTypes.func.isRequired,
};

export default MovieList;
