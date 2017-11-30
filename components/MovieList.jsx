<<<<<<< HEAD
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
=======
import React from 'react';
>>>>>>> (feat) added a NavBar component, upsdated README
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
      const movieList = movies.filter(mov => mov.Poster !== "N/A").map(movie => {
      const title = movie.Title.replace(/\s/g, '+');
      const year = movie.Year;
        return (
          <Link key={movie.id} to={`/moviedetails/${movie.imdbID}/${title}`} key={movie.imdbID}>
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

