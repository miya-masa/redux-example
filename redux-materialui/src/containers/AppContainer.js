import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from '../components/App';
import { changeA, changeB, regist } from '../actions/';

// 状態から表示に利用する値を算出する。
const mapStateToProps = state => {
  // 状態=ImmutableJSのMapをjsonに変換
  const stateJS = state.toJS();

  // 足し算
  // -0は数値に変換するシュガーシンタックス
  const calcResult = stateJS.a + stateJS.b - 0;

  return {
    // jsonを展開のキーを展開する
    // const obj1 = {
    //   aaa : 'aaa'
    // };
    //
    // const obj2 = {
    //   ...obj1
    // };
    //
    // console.log(obj2.aaa); // 'aaa'
    ...stateJS,

    // 数値から文字列に
    // + '' は文字列変換のシュガーシンタックス
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
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(App);
