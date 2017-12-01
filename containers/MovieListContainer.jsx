import { connect } from 'react-redux';
import { fetchMovie, fetchMovies } from '../actions/MovieAction';
import { withRouter } from 'react-router-dom';

import MovieList from '../components/MovieList.jsx';


const mapStateToProps = ({ movies }) => {
  return { movies }
}

const mapDispatchToProps = {
  fetchMovie,
  fetchMovies
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieList));