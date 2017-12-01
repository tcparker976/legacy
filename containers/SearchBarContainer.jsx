import { connect } from 'react-redux';
import { fetchMovies } from '../actions/MovieAction';
import { withRouter } from 'react-router-dom';

import SearchBar from '../components/SearchBar';

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = {
  fetchMovies
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));
