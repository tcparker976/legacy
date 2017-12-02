import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchBoxOffice } from '../actions/BoxOfficeGraph';
import { clearMovie, fetchRatings, fetchTrends, fetchSentiment } from '../actions/MovieAction';


import BoxOfficeGraph from '../components/BoxOfficeGraph.jsx';

const mapStateToProps = ({ movie, boxoffice }) => {
  return { movie, boxoffice };
}

const mapDispatchToProps = {
  fetchRatings,
  fetchTrends,
  fetchSentiment,
  fetchBoxOffice,
  clearMovie
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoxOfficeGraph));
