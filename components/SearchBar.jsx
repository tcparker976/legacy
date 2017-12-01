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
    const query = this.state.term.replace(/\s/g, '+');
    if (query !== this.props.match.params.query) {
      this.props.clearMovies();
      this.props.fetchMovies(query);
    }
    this.props.history.replace(`/movie-list/${query}`);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="Albrey-Junior">
        <input
          className="search-bar-input"
          type="text"
          placeholder="Insert Movie Name . . ."
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
