import React from 'react';
import { connect } from 'react-redux';

import Graph from '../components/Graph.jsx';


const mapStateToProps = ({ movie, graphData }) => {
  return { movie, graphData };
}

export default connect(mapStateToProps)(Graph);
