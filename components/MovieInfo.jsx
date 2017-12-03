import React, { Component } from 'react';
import PlotContainer from '../containers/PlotContainer';

class MovieInfo extends Component {
  constructor(props) {
    super(props);

    this.handleDirectorsDataType = this.handleDirectorsDataType.bind(this);
    this.handleWritersDataType = this.handleWritersDataType.bind(this);
    this.handleDataType = this.handleDataType.bind(this);
  }

  handleDirectorsDataType(data, movie) {
    if(typeof data === "string" && (data.indexOf(',') !== -1)) {
      return <li><b>Directors:</b> <p>{movie.Director}</p></li>
    } else if(Array.isArray(data) && data.length === 1) {
      if (data[0].indexOf(',') !== -1) {
        return <li><b>Directors:</b> <p>{movie.Director[0]}</p></li>
      } else {
        return <li><b>Director:</b> <p>{movie.Director[0]}</p></li> 
      }
    } else if(Array.isArray(data) && data.length > 1) {
      return <li><b>Directors:</b> <p>{movie.Director.join(' ')}</p></li>
    } else {
      return <li><b>Director:</b> <p>{movie.Director}</p></li>
    }
  }

  handleWritersDataType(data, movie) {
    if(typeof data === "string" && (data.indexOf(',') !== -1)) {
      return <li><b>Writers:</b> <p>{movie.Writer}</p></li>
    } else if(Array.isArray(data) && data.length === 1) {
      if (data[0].indexOf(',') !== -1) {
        return <li><b>Writers:</b> <p>{movie.Writer[0]}</p></li>
      } else {
        return <li><b>Writer:</b> <p>{movie.Writer[0]}</p></li> 
      }
    } else if(Array.isArray(data) && data.length > 1) {
      return <li><b>Writers:</b> <p>{movie.Writer.join(' ')}</p></li>
    } else {
      return <li><b>Writer:</b> <p>{movie.Writer}</p></li>
    }
  }

  handleDataType(data, movie, dataToDisplay) {
    //WILL REFACTOR ASAP
  }

  render() {
    const { movie, trends, sentiment } = this.props
    console.log('SENTIMENT: ', sentiment);
    return (
      <div className="movie-info">
        <PlotContainer />
        <ul className="movie-info-credits">
            {this.handleDirectorsDataType(movie.Director, movie)}
            {this.handleWritersDataType(movie.Writer, movie)}
            <li><b>Stars:</b> <p>{movie.Actors}</p></li>
            <li><b>Awards:</b> <p>{movie.Awards}</p> </li>
        </ul>  
      </div>  
      ) 
  }
}

export default MovieInfo;