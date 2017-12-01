import { connect } from 'react-redux';
import { fetchMovie, fetchRatings, fetchSentiment, fetchTrends, clearMovie } from '../actions/MovieAction.js';
import MovieDetail from '../components/MovieDetail.jsx';

const mapStateToProps = ({ movie, sentiment, trends }) => {
  return { movie, sentiment, trends };
}

const mapDispatchToProps = {
  fetchMovie,
  fetchRatings,
  fetchTrends,
  fetchSentiment,
  clearMovie
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
