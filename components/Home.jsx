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
        { movies ? movies.map((movie) => {

          return (
            <Link key={movie.id} to={`/moviedetails/${movie.imdbID}/${movie.Title}`} key={movie.imdbID}>
              <div className="recent-movie-entry">
                <img src={movie.Poster} />
                <h2>{movie.Title}</h2>
              </div>
            </Link>
          )
        }) : null }
      </div>
    );
  }
}