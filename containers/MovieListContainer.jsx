import { connect } from 'react-redux';
import { fetchMovie } from '../actions/MovieAction';

import MovieList from '../components/MovieList.jsx';


const mapStateToProps = (state) => {
  console.log(state)
  return { movies: state.movies }
}

const mapDispatchToProps = {
  fetchMovie
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);