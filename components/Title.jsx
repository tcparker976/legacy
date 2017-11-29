import React from 'react';
import PropTypes from 'prop-types';

function Title(props) {
  let { title } = props.primaryMovie;
  return (
    <div>
      <h1 id="title">{title}</h1>
    </div>
  );
}

Title.propTypes = {
  primaryMovie: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired
};

export default Title;
