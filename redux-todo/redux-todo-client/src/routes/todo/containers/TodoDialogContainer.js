import { connect } from 'react-redux';
import TodoDialog from '../components/TodoDialog';
import * as actions from '../actions';

function mapStateToProps(state) {
  return {
    isOpened: state.todo.dialog.get('isOpened'),
    todo: state.todo.form.get('todo'),
    limitDate: state.todo.form.get('limitDate')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleAdd: () => dispatch(actions.openDialog()),
    handleCancel: () => {
      dispatch(actions.closeDialog());
      dispatch(actions.clearForm());
    },
    handleSubmit: (todo, limitDate) => {
      dispatch(actions.createTodo(todo, limitDate));
    },
    onChangeTodo: (ev) => dispatch(actions.changeTodo(ev.target.value)),
    onChangeLimitDate: (unused, date) => dispatch(actions.changeLimitDate(date))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoDialog);
