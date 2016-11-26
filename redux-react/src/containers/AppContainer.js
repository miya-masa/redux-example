import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from '../components/App';

const mapStateToProps = state => (state);

const mapDispatchToProps = dispatch => (
bindActionCreators({
  onChangeA: (ev) => ({
    type: 'CHANGE_A',
    payload: {
      value: ev.target.value - 0
    }
  }),
  onChangeB: (ev) => ({
    type: 'CHANGE_B',
    payload: {
      value: ev.target.value - 0
    }
  })
},
  dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
