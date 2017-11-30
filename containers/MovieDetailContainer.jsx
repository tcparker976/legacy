import { connect } from 'react-redux';
import { fetchMovie } from '../actions/MovieAction.js';
import MovieDetail from '../components/MovieDetail.jsx';

const mapStateToProps = (state) => {
  return { movie: state.movie };
}

const mapDispatchToProps = {
  fetchMovie
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
