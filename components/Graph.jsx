import React from 'react';
import PropTypes from 'prop-types';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Label, Tooltip, Legend } from 'recharts';

const Graph = ({ trends, movie }) => {
  console.log(trends);
  return (
    <div id="graph">
      <LineChart width={1000} height={400} data={trends}>
        <Line name={movie.title || ' '} type="monotone" dataKey="primaryTrendVolume" stroke="#913A24" dot={false} />
        <XAxis dataKey="date">
          <Label value="Date" offset={0} position="insideBottom" />
        </XAxis>
        <YAxis label={{ value: 'Relative Search Volume', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend verticalAlign="top" />
      </LineChart>
    </div>
  );
}

Graph.propTypes = {
  trends: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default Graph;