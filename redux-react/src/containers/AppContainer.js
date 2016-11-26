import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from '../components/App';
import { changeA, changeB } from '../actions/';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => (

// actionCratorをviewのプロパティに紐付けるための設定
bindActionCreators({
  onChangeA: (ev) => changeA(ev.target.value - 0),
  onChangeB: (ev) => changeB(ev.target.value - 0)
}, dispatch)

);

export default connect(mapStateToProps, mapDispatchToProps)(App);
