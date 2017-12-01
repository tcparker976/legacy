import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class MovieList extends Component {

  componentDidMount() {
    const { query } = this.props.match.params;
    this.props.fetchMovies(query);
  }

  componentWillUnmount() {
    this.props.clearMovies();
  }

  renderMovieList() {
    const { movies, fetchMovie, fetchMovies } = this.props
    if (movies) {
      const movieList = movies
        .filter(mov => {
          let img = new Image();
          img.src = mov.Poster;
          return mov.Poster !== "N/A" && img.height >= 400
        })
        .slice(0, 12)
        .map((movie, index) => {
        const title = movie.Title.replace(/\s/g, '+');
        const year = movie.Year;
          return (
            <Link key={index} to={`/moviedetails/${movie.imdbID}/${title}`}>
              <div className="recent-movie-entry">
                <div className="recent-movie-entry-flex">
                  <img src={movie.Poster} />
                </div>
                <h2 className="recent-movie-title">{movie.Title}</h2>
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

  render() {
    return (
      <div className="movie-list-grid">
        {this.renderMovieList()}
      </div>
    );
  }

}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  })),
  fetchMovie: PropTypes.func.isRequired,
  fetchMovies: PropTypes.func.isRequired,
};

