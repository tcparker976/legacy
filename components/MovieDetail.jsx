import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Title from './Title';
import GraphContainer from '../containers/GraphContainer.jsx';
import MovieInfo from './MovieInfo';

export default class MovieDetail extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.movieid);
  }

  render() {
    const { movie } = this.props;
    if (!movie) {
      return (
        <div>
          Loading...
        </div>
      )
    }
    return (
      <div>
        <Title movie={movie} />
        <GraphContainer />
        <MovieInfo movie={movie} />
      </div>
    );
  }

} 

MovieDetail.propTypes = {
  movie: PropTypes.shape({}).isRequired
};

