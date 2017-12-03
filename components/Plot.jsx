import React, { Component } from 'react';


const Plot = (props) => {
  return (
    <div className="plot">
      <h1 className="movie-title">{props.movie.Title} <i>({props.movie.Year})</i></h1>
      <ul>
        <li>{props.movie.Rated}</li>
        <li>{props.movie.Runtime}</li>
        <li>{props.movie.Genre[0]}</li>
        <li>{props.movie.Released} ({props.movie.Country})</li>
      </ul>
      <div class="line"></div>
      <div class="plot-actual">
        <p>{props.movie.Plot}</p>
      </div>
    </div>
  )
}

export default Plot;
