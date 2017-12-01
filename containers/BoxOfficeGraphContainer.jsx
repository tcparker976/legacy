import React from 'react';
import { connect } from 'react-redux';

import BoxOfficeGraph from '../components/BoxOfficeGraph.jsx';

const mapStateToProps = ({ movie, trends }) => {
  return { movie, trends };
}

export default connect(mapStateToProps)(BoxOfficeGraph);
