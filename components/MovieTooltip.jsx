import React from 'react';

const MovieTooltip = (props) => { 
  const { active } = props;
  if (active) {
    const { payload } = props.payload[0];
    return (
      <div className="movie-tooltip">
        <h4 style={{margin: "0px"}}>{payload.Title}</h4>
        <hr className="text-muted" />
        <h5 style={{margin: "0px"}}>Box Office: ${payload.BoxOffice.toLocaleString()}</h5>
        <h5 style={{margin: "0px"}}className="text-muted">Release Date: {payload.Released}</h5>
      </div>
    )
  }
  return null;
}

export default MovieTooltip;