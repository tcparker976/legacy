import { connect } from 'react-redux';
import MovieInfo from '../components/MovieInfo.jsx';

const mapStateToProps = ({ movie }) => {
  return { movie };
}

export default connect(mapStateToProps)(MovieInfo);