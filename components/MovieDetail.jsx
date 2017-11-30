import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Title from './Title';
import GraphContainer from '../containers/GraphContainer.jsx';
import MovieInfo from './MovieInfo';

const url = 'https://image.tmdb.org/t/p/w154';

export default class MovieDetail extends Component {

  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.movieid);
  }

  render() {
    const { movie, match } = this.props;
    console.log(movie);
    if (!movie) {
      return (
        <div>
          Loading...
        </div>
      )
    }
    return (
      <div className="movie-grid">
        <div className="poster">
          <img src={`${url}/${match.params.movieposter}.jpg`} alt="" />
        </div>
        <div className="ratings">
          <h3>{movie.title}</h3>
          ratings box 
        </div>
      </div>
    );
  }

} 

MovieDetail.propTypes = {
  movie: PropTypes.shape({}).isRequired
};

