import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Title from './Title';
import GraphContainer from '../containers/GraphContainer.jsx';
import MovieInfo from './MovieInfo';

export default class MovieDetail extends Component {

  componentDidMount() {
    const { imdbId, title } = this.props.match.params;
    this.props.fetchRatings(imdbId);
    this.props.fetchTrends(title);
    this.props.fetchSentiment(title);
  }

  componentWillUnmount() {
    this.props.clearMovie(); 
  }

  render() {
    const { movie, sentiment, trends } = this.props;
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
          <img src={movie.Poster} alt="" />
        </div>
        <div className="ratings">
          <h3>{movie.Title}</h3>
          ratings box 
        </div>
      </div>
    );
  }

} 

MovieDetail.propTypes = {
  movie: PropTypes.shape({}).isRequired
};

