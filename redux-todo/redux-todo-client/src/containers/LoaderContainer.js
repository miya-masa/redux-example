import { connect } from 'react-redux';
import Loader from '../components/Loader';

function mapStateToProps(state) {
  return {
    status: state.loader.get('status')
  };
}

export default connect(mapStateToProps)(Loader);
