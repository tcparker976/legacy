import { connect } from 'react-redux';
import { fetchMovie } from '../actions/MovieAction';

import MovieList from '../components/MovieList.jsx';


const mapStateToProps = ({ movies }) => {
  return { movies }
}

const mapDispatchToProps = {
  fetchMovie
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);