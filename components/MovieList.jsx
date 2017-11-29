import React from 'react';
import PropTypes from 'prop-types';


const url = 'https://image.tmdb.org/t/p/w154';

function MovieList({ movies, fetchMovie }) {
  const movieList = movies.filter(movie => movie.poster_path).map(movie => (
    <div key={movie.id} onClick={() => fetchMovie(movie.id)}>
      <img src={url + movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
    </div>
  ));

  return (
    <div className="movie-list-grid">
      {movieList}
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
