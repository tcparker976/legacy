import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import NavBar from './NavBar.jsx';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.props.fetchRecentMovies();
  }
  
  render() {
    let movies = this.props.recents 
      ? this.props.recents.length >= 9
      ? this.props.recents
      : null
      : null;
    console.log('MOVITOS')
    console.log(movies)
    return (
      <div className="home-grid-container">
        { movies ? movies
        .filter(mov => {
          let img = new Image();
          img.src = mov.Poster;
          return mov.Poster !== "N/A" && img.height >= 400
        })
        .map((movie, index) => {

          return (
            <Link key={index} to={`/moviedetails/${movie.imdbID}/${movie.Title}`}>
                <div className="recent-movie-entry">
                  <div className="recent-movie-entry-flex">
                    <img src={movie.Poster} />
                  </div>
                  <h2 className="recent-movie-title">{movie.Title}</h2>
                </div>
            </Link>
          )
        }) : null }
      </div>
    );
  }
}