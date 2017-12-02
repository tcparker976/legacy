import { connect } from 'react-redux';
import { fetchMovie, fetchMovies, clearMovies } from '../actions/MovieAction';
import { withRouter } from 'react-router-dom';

import MovieList from '../components/MovieList.jsx';

console.log("RUNNING MOVIE LIST")

const mapStateToProps = ({ movies }) => {
  return { movies }
}

const mapDispatchToProps = {
  fetchMovie,
  fetchMovies,
  clearMovies
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieList));