import { connect } from 'react-redux';
import { fetchRatings, fetchSentiment, fetchTrends, clearMovie } from '../actions/MovieAction.js';
import MovieDetail from '../components/MovieDetail.jsx';

const mapStateToProps = ({ movie, sentiment, trends }) => {
  return { movie, sentiment, trends };
}

const mapDispatchToProps = {
  fetchRatings,
  fetchTrends,
  fetchSentiment,
  clearMovie
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
