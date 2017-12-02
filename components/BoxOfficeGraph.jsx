import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { ResponsiveContainer, ReferenceLine, CartesianGrid, BarChart, Label, Bar, Cell, XAxis, YAxis, Tooltip } from 'recharts';
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
    const { boxoffice, movie } = this.props;
    if (!boxoffice) {
      return (
        <div>
          Loading...
        </div>
      )
    }
    let rank;
    boxoffice.forEach((mov, i) => {
      if (mov.Title === movie.Title) {
        rank = i+1;
      }
    });
    return (
      <div className="box-office-graph">
        <h2 style={{marginBottom: '0px'}}>Box Office: {movie.BoxOffice}</h2>
        <h4 style={{marginTop: '0px'}}className="text-muted">Rank for {movie.Year}: {rank}</h4>
        <h2 className="text-muted">Box Office Rankings for {movie.Year}</h2>
        <ResponsiveContainer height={300}>
          <BarChart 
            data={boxoffice} 
            margin={{ top: 20, right: 0, bottom: 0, left: 45 }}
            onClick={this.handleBarClick.bind(this)}>
            <Bar type="monotone" dataKey="BoxOffice" stroke="#502014" fill="#502014">
              {boxoffice.map(movie => (
                <Cell
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
            <XAxis dataKey="title" type="category" tickLine={false} />
            <YAxis 
              dataKey="BoxOffice" 
              axisLine={false} 
              tickLine={false}
              tickFormatter={tick => `$${tick.toLocaleString()}`}
               />
            <CartesianGrid vertical={false} style={{opacity: 0.15}} />
            <Tooltip 
            content={<MovieTooltip />} 
            cursor={{ fill: 'rgba(250, 250, 250, 0.05)' }} />
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