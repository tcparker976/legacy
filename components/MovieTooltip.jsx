import React from 'react';

const MovieTooltip = (props) => { 
  const { active } = props;
  if (active) {
    const { payload } = props.payload[0];
    return (
      <div className="movie-tooltip">
        <h2>{payload.Title}</h2>
        <hr />
        <h4>Box Office: ${payload.BoxOffice.toLocaleString()}</h4>
        <h5 className="text-muted">Release Date: {payload.Released}</h5>
      </div>
    )
  }
  return null;
}

export default MovieTooltip;