import React from 'react';
import PropTypes from 'prop-types';

import Title from './Title';
import GraphContainer from '../containers/GraphContainer.jsx';
import MovieInfo from './MovieInfo';


const MovieDetail = (props) => {
  const { movie } = props;
  return (
    <div>
      Movie detail component
      <Title movie={movie} />
      <GraphContainer />
      <MovieInfo movie={movie} />
    </div>
  );
}

MovieDetail.propTypes = {
  movie: PropTypes.shape({}).isRequired
};

export default MovieDetail;
