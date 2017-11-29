import React from 'react';
import PropTypes from 'prop-types';

function Title(props) {
  let { title } = props.movie
  return (
    <div>
      <h1 id="title">{title}</h1>
    </div>
  );
}

Title.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired
};

export default Title;
