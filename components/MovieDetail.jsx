import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GraphContainer from '../containers/GraphContainer.jsx';
import MovieInfo from './MovieInfo';
import Ratings from './Ratings';

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
          <img src={movie.Poster} alt="" />
        </div>
        <div className='plot'>
           This is the plot. Lorem ipsum....
        </div>
        <GraphContainer />
        <div className='producedBy'>
          {movie.productionCompanies}
        </div>
      </div>
    );
  }

} 

MovieDetail.propTypes = {
  movie: PropTypes.shape({}).isRequired
};

