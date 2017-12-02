import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { ResponsiveContainer, ReferenceLine, BarChart, Bar, Cell, XAxis, YAxis, Tooltip } from 'recharts';
import MovieTooltip from './MovieTooltip';

export default class BoxOfficeGraph extends Component {

  componentDidMount() {
    this.props.fetchBoxOffice(this.props.movie.imdbID);
  }

  componentWillUnmount() {
    this.props.clearMovie();
  }

  handleBarClick(e) {
    const data = e.activePayload[0].payload;
    const title = data.Title.replace(/\s/g, '+');
    console.log(data.imdbID);
    if (title !== this.props.movie.Title) {
      this.props.clearMovie();
      this.props.fetchRatings(data.imdbID);
      this.props.fetchBoxOffice(data.imdbID);
      this.props.fetchTrends(data.Title);
      this.props.fetchSentiment(data.Title);
    }
    this.props.history.replace(`/moviedetails/${data.imdbID}/${title}`);
  }
  
  render() {
    const { boxoffice } = this.props;
    if (!boxoffice) {
      return (
        <div>
          Loading...
        </div>
      )
    }

    return (
      <div className="BoxOfficeGraph">
        <ResponsiveContainer height={500} width={'75%'}>
          <BarChart data={boxoffice} onClick={this.handleBarClick.bind(this)}>
            <Bar type="monotone" dataKey="BoxOffice" stroke="#502014" fill="#502014">
              {boxoffice.map(movie => (
                <Cell
                  onClick={() => this.props.history.replace(`/moviedetails/${movie.imdbID}/${this.props.movie.Title.replace(/\s/g, '+')}`)}
                  key={movie.imdbID}
                  fill={
                    movie.Title === this.props.movie.Title
                      ? '#913A24'
                      : '#35160E'
                  }
                  stroke={
                    movie.Title === this.props.movie.Title 
                      ? '#913A24'
                      : '#35160E'
                  }
                />
              ))}
            </Bar>
            <XAxis dataKey="title" type="category" />
            <YAxis dataKey="BoxOffice" />
            <Tooltip content={<MovieTooltip />} cursor={{ fill: 'rgba(250, 250, 250, 0.05)' }} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }

}

BoxOfficeGraph.propTypes = {
  boxoffice: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

// dark red: #35160E
// highlighted red: #913A24