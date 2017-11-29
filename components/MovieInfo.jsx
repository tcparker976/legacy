import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const translateToCurrency = (value) => {
  let num = value;
  let commaCounter = 0;
  let res = '';
  while (num > 0) {
    const dig = num % 10;

    commaCounter += 1;
    if (commaCounter > 3) {
      res = `,${res}`;
      commaCounter %= 3;
    }
    res = dig + res;

    num = Math.floor(num / 10);
  }
  return `$${res}`;
};

const MovieInfo = ({ movie }) => {
  const primaryTitle = movie.title;
  return (
    <div>
      <h1>{primaryTitle}</h1>
    </div>
  );
}

MovieInfo.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    revenue: PropTypes.number,
    releaseDate: PropTypes.string,
    emotion: PropTypes.shape({}),
    genres: PropTypes.arrayOf(PropTypes.string),
    productionCompanies: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default MovieInfo;
