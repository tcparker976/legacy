import React, { Component } from 'react';

const Ratings = (props) => {
  return (
    <div className="ratings">
      <h3>Ratings</h3>
      <ul>
        <li>{props.movie.Ratings[0].Source}: {props.movie.Ratings[0].Value}</li>
      </ul>
    </div>
  )
}

export default Ratings;