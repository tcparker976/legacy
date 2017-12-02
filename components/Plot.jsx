import React, { Component } from 'react';


const Plot = (props) => {
  return (
    <div className="plot">
      <h1>{props.movie.Title} <i>({props.movie.Year})</i></h1>
      <ul>
        <li>{props.movie.Rated}</li>
        <li>{props.movie.Runtime}</li>
        <li>{props.movie.Genre[0]}</li>
      </ul>
      <p>{props.movie.Plot}</p>
    </div>
  )
}

export default Plot;