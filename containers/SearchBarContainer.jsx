import { connect } from 'react-redux';
import { fetchMovies, clearMovies } from '../actions/MovieAction';
import { withRouter } from 'react-router-dom';

import SearchBar from '../components/SearchBar';

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = {
  fetchMovies,
  clearMovies
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));
