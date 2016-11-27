import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from '../components/App';
import { changeA, changeB, registIfNeeded } from '../actions/';

const mapStateToProps = state => {
  const stateJS = state.changeA.merge(state.changeB).toJS();
  const calcResult = stateJS.a + stateJS.b - 0;
  const isRegisting = state.regist.get('isRegisting');
  return {
    // jsonを展開
    ...stateJS,
    // 数値から文字列に
    textA: stateJS.a + '',
    textB: stateJS.b + '',
    title: isRegisting ? '登録中' : 'Welcome to React',
    disableSubmit: isRegisting,
    calcResult: Number.isNaN(calcResult) ? '' : calcResult
  }
};

const mapDispatchToProps = (dispatch, ownProps) => (

// actionCratorをviewのプロパティに紐付けるための設定
bindActionCreators({
  onChangeA: (ev) => changeA(ev.target.value),
  onChangeB: (ev) => changeB(ev.target.value),
  onSubmit: registIfNeeded
}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
