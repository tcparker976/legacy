import { connect } from 'react-redux';
import { fetchMovie, clearMovie } from '../actions/MovieAction.js';
import MovieDetail from '../components/MovieDetail.jsx';

const mapStateToProps = (state) => {
  return { movie: state.movie };
}

const mapDispatchToProps = {
  fetchMovie,
  clearMovie
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
