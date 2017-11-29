import { connect } from 'react-redux';

import MovieDetail from '../components/MovieDetail.jsx';

const mapStateToProps = ({ movie }) => {
  return { movie };
}

export default connect(mapStateToProps)(MovieDetail);
