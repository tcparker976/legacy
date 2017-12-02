import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BoxOfficeGraphContainer from '../containers/BoxOfficeGraphContainer.jsx';
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
    const renderBoxOffice = () => {
      if (parseInt(movie.Year) >= 1980 && parseInt(movie.Year) < 2017) {
        return <BoxOfficeGraphContainer />
      } else {
        return <h3>Box office graph not available.</h3>
      }
    }
    return (
    <div>
      <div className="movie-grid">
        <div className="poster">
          <img src={movie.Poster} alt="Image Unavailiable" />
        </div>
        <Reviews reviews={movie.Ratings} />
        <MovieInfoContainer />
      </div>
      {renderBoxOffice()}
    </div>
    );
  }

} 

MovieDetail.propTypes = {
  movie: PropTypes.shape({}).isRequired
};

