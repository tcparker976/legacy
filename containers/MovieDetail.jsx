import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Title from '../components/Title';
import Graph from './Graph';
import MovieInfo from '../components/MovieInfo';

const style = { padding: '35px' };

function MovieDetail(props) {
  const { primaryMovie } = props;
  return (
    <div>
      Movie detail component
      <Title primaryMovie={primaryMovie} />
      <Graph primaryMovie={primaryMovie} />
      <MovieInfo primaryMovie={primaryMovie} />
    </div>
  );
}

MovieDetail.propTypes = {
  primaryMovie: PropTypes.shape({}).isRequired
};

function mapStateToProps({ primaryMovie }) {
  return { primaryMovie };
}

export default connect(mapStateToProps)(MovieDetail);
