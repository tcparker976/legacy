import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { ResponsiveContainer, ReferenceLine, LineChart, Line, CartesianGrid, XAxis, YAxis, Label, Tooltip, Legend } from 'recharts';

export default class BoxOfficeGraph extends Component {

  componentDidMount() {

  }

  componentWillUnmount() {

  }
  
  render() {
    return (
      <div id="BoxOfficeGraph">
        <ResponsiveContainer height={200}>
          {/* <LineChart data={trends}>
            <Line name={movie.title || ' '} type="monotone" dataKey="primaryTrendVolume" stroke="#913A24" dot={false} />
            <XAxis dataKey="date" type="category" />
            <YAxis label={{ value: 'Relative Search Volume', angle: -90, position: 'insideLeft' }} domain={['dataMin - 1', 'dataMax + 1']}/>
            {renderReleaseDateLine(movie.Released)}
          </LineChart> */}
        </ResponsiveContainer>
      </div>
    );
  }

}

BoxOfficeGraph.propTypes = {
  boxoffice: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default BoxOfficeGraph;