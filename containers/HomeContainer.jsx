import { connect } from 'react-redux';
import { fetchRecentMovies } from '../actions/MovieAction.js';
import Home from '../components/Home.jsx';

const mapStateToProps = ({ recents }) => {
  return { recents }
}

const mapDispatchToProps = { fetchRecentMovies };

export default connect(mapStateToProps, mapDispatchToProps)(Home);