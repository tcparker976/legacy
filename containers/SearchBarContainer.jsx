import { connect } from 'react-redux';
import { fetchMovies } from '../actions/MovieAction';

import SearchBar from '../components/SearchBar';

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = {
  fetchMovies
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
