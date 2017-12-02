import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { ResponsiveContainer, ReferenceLine, LineChart, Line, CartesianGrid, XAxis, YAxis, Label, Tooltip, Legend } from 'recharts';

const Graph = ({ trends, movie }) => {
  console.log('i am here..?');
  return (
    <div id="graph">
      <h2>Google Trends</h2>
      <ResponsiveContainer height={300}>
        <LineChart data={trends}>
          <Line name={movie.title || ' '} type="monotone" dataKey="primaryTrendVolume" stroke="#913A24" dot={false} />
          <XAxis dataKey="date" type="category" />
          <YAxis label={{ value: 'Relative Search Volume', angle: -90, position: 'insideLeft' }} domain={['dataMin - 1', 'dataMax + 1']}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

Graph.propTypes = {
  trends: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default Graph;