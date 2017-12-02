import { connect } from 'react-redux';
import MovieInfo from '../components/MovieInfo.jsx';

const mapStateToProps = ({ movie, trends, sentiment }) => {
  return { movie, trends, sentiment };
}

export default connect(mapStateToProps)(MovieInfo);