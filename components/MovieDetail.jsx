import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GraphContainer from '../containers/GraphContainer';
import Reviews from './Reviews';
import MovieInfoContainer from '../containers/MovieInfoContainer';

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
    console.log('MOVIE DATA: ', movie);
    if (!movie) {
      return (
        <div>
          <img src="/spinner.gif"></img>
        </div>
      )
    }
    return (
      <div className="movie-grid">
        <div className="poster">
          <img src={movie.Poster} alt="Image Unavailiable" />
        </div>
        <Reviews reviews={movie.Ratings} />
        <MovieInfoContainer />
      </div>
    );
  }

} 

MovieDetail.propTypes = {
  movie: PropTypes.shape({}).isRequired
};

