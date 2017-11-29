import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  constructor() {
    super();

    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({ term: e.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.fetchMovies(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          type="text"
          placeholder="Insert Movie Name"
          value={this.state.term}
          onChange={this.onInputChange}
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  fetchMovies: PropTypes.func.isRequired
};

export default SearchBar;
