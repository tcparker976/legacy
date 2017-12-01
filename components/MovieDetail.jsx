import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Title from './Title';
import GraphContainer from '../containers/GraphContainer.jsx';
import MovieInfo from './MovieInfo';
import NavBar from './NavBar';

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
          <h1>Loading...</h1>
          <img src="spinner.gif"></img>
        </div>
      )
    }
    return (
      <div className="movie-grid">
        <div className="poster">
          <h3>{movie.title}</h3>
          <img src={movie.Poster} alt="" />
        </div>
        <div className="ratings">
            <h3>{movie.Title}</h3>
            <h3>Ratings</h3>
        </div>
        <div className='plot'>
           This is the plot. Lorem ipsum....
        </div>
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

