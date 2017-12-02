import React, { Component } from 'react';
import PlotContainer from '../containers/PlotContainer';

class MovieInfo extends Component {
  constructor(props) {
    super(props);

    this.handleDirectorsDataType.bind(this);
  }

  handleDirectorsDataType(directorsData, movie) {
    if(typeof directorsData === "string" && (directorsData.indexOf(',') !== -1)) {
      return <h6>Directors: {movie.Director}</h6>
    } else if(Array.isArray(directorsData) && directorsData.length === 1) {
      if (directorsData[0].indexOf(',') !== -1) {
        return <h6>Directors: {movie.Director[0]}</h6>
      } else {
        return <h6>Director: {movie.Director[0]}</h6> 
      }
    } else if(Array.isArray(directorsData) && directorsData.length > 1) {
      return <h5>Directors: <p>{movie.Director.join(' ')}</p></h5>
    } else {
      return <h5>Director: <p>{movie.Director}</p></h5>
    }
  }

  render() {
    const { movie } = this.props
    return (
      <div className="movie-info">
        <PlotContainer />
        <div>
          <ul>
            <li>{this.handleDirectorsDataType(movie.Director, movie)}</li>
            <li><h5>Stars:</h5> <p>{movie.Actors}</p></li>
            <li><h5>Revenue:</h5> <p>{movie.BoxOffice}</p></li>
          </ul>
        </div>  
      </div>
      ) 
  }
}

export default MovieInfo;