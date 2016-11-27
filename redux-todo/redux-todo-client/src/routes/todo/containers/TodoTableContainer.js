import { connect } from 'react-redux';
import { complete, remove } from '../actions';
import TodoTable from '../components/TodoTable';

function mapStateToProps(state) {
  return {
    todos: state.todo.table.get('todos').map(e => ({
      id: e.code,
      code: e.code,
      todo: e.todo,
      limitDate: e.limitDate,
      complete: e.complete
    }))
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onTouchRemove: (todoIndex) => dispatch(remove(todoIndex)),
    onChangeComplete: (todoIndex, value) => dispatch(complete(todoIndex, value))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoTable);
