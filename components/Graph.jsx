import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { ResponsiveContainer, ReferenceLine, LineChart, Line, CartesianGrid, XAxis, YAxis, Label, Tooltip, Legend } from 'recharts';

const Graph = ({ trends, movie }) => {

  const renderReleaseDateLine = (date) => {
    const formattedDate = moment(date).format('MMM DD, YYYY');
    const year = movie.Released.split(' ')[2];
    if (year < 2017) {
      return null;
    } else {
      return <ReferenceLine x={formattedDate} />
    }
  }

  console.log(trends);
  return (
    <div id="graph">
      <ResponsiveContainer height={200}>
        <LineChart data={trends}>
          <Line name={movie.title || ' '} type="monotone" dataKey="primaryTrendVolume" stroke="#913A24" dot={false} />
          <XAxis dataKey="date" type="category" />
          <YAxis label={{ value: 'Relative Search Volume', angle: -90, position: 'insideLeft' }} domain={['dataMin - 1', 'dataMax + 1']}/>
          {renderReleaseDateLine(movie.Released)}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

Graph.propTypes = {
  trends: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default Graph;