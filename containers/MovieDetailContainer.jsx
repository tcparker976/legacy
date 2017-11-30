import { connect } from 'react-redux';
import { fetchMovie, fetchRatings, clearMovie } from '../actions/MovieAction.js';
import MovieDetail from '../components/MovieDetail.jsx';

const mapStateToProps = ({ movie }) => {
  return { movie };
}

const mapDispatchToProps = {
  fetchMovie,
  fetchRatings,
  clearMovie
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
