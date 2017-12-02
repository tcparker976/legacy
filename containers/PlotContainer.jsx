import { connect } from 'react-redux';
import Plot from '../components/Plot';

const mapStateToProps = ({ movie }) => {
  return { movie };
}

export default connect(mapStateToProps)(Plot);