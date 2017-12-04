import { connect } from 'react-redux';
import SentimentView from '../components/SentimentView';

const mapStateToProps = ({ sentiment }) => {
  return { sentiment };
}

export default connect(mapStateToProps)(SentimentView);