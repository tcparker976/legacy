import { connect } from 'react-redux';

import MovieDetail from '../components/MovieDetail.jsx';

const mapStateToProps = (state) => {
  return { movie: state.movie };
}

export default connect(mapStateToProps)(MovieDetail);
