import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from '../components/App';
import { changeA, changeB, regist } from '../actions/';

const mapStateToProps = state => {
  const stateJS = state.toJS();
  const calcResult = stateJS.a + stateJS.b - 0;
  return {
    // jsonを展開
    ...stateJS,
    // 数値から文字列に
    textA: stateJS.a + '',
    textB: stateJS.b + '',
    calcResult: Number.isNaN(calcResult) ? '' : calcResult
  }
};

const mapDispatchToProps = (dispatch, ownProps) => (

// actionCratorをviewのプロパティに紐付けるための設定
bindActionCreators({
  onChangeA: (ev) => changeA(ev.target.value),
  onChangeB: (ev) => changeB(ev.target.value),
  onSubmit: regist
}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
