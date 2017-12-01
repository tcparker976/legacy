import React from 'react';
import { connect } from 'react-redux';

import Graph from '../components/Graph.jsx';


const mapStateToProps = ({ movie, trends }) => {
  return { movie, trends };
}

export default connect(mapStateToProps)(Graph);
