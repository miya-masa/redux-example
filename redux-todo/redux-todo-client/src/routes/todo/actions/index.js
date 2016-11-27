import axios from 'axios';
import moment from 'moment';
import halfred from 'halfred';
import ajax from '../../../actions/ajax';

export const REFLESH_TODOS = 'todo.REFLESH_TODOS';
export const refleshTodos = (todos) => {
  return {
    type: REFLESH_TODOS,
    payload: todos
  };
};

const loadTodos = () => {
  return ajax(dispatch => axios
    .get('http://localhost:8080/api/todos/')
    .then(response => halfred.parse(response.data))
    .then(todo => todo.allEmbeddedArrays().todos)
    .then(todos => dispatch(refleshTodos(todos)))
  );
};

export const initialize = () => {
  return (dispatch) => {
    dispatch(loadTodos());
  };
};

export const complete = (index, value) => {
  return ajax((dispatch, getState) => axios
    .patch(getState().todo.table.get('todos')[index].link('self').href, {
      complete: value
    })
    .then(() => dispatch(loadTodos()))
  );
};

export function remove(index) {
  return ajax((dispatch, getState) => axios
    .delete(getState().todo.table.get('todos')[index].link('self').href)
    .then(() => dispatch(loadTodos()))
  );
}


export const OPEN_DIALOG = 'todo.OPEN_DIALOG';
export const CLOSE_DIALOG = 'todo.CLOSE_DIALOG';
export const openDialog = () => {
  return {
    type: OPEN_DIALOG
  };
};
export const closeDialog = () => {
  return {
    type: CLOSE_DIALOG
  };
};

export const CLEAR_FORM = 'todo.CLEAR_FORM';
export const clearForm = () => {
  return {
    type: CLEAR_FORM
  };
};

export const CHANGE_TODO = 'todo.CHANGE_TODO';
export const changeTodo = (value) => {
  return {
    type: CHANGE_TODO,
    payload: value
  };
};

export const CHANGE_LIMIT_DATE = 'todo.CHANGE_LIMIT_DATE';
export const changeLimitDate = (value) => {
  return {
    type: CHANGE_LIMIT_DATE,
    payload: value
  };
};

export const createTodo = (todo, limitDate) => {
  const complete = false;
  return ajax((dispatch) => {
    dispatch(clearForm());
    dispatch(closeDialog());
    return axios
      .post('http://localhost:8080/api/todos/', {
        todo,
        limitDate: moment(limitDate).format('YYYY-MM-DDTHH:mm:ss.SSS'),
        complete
      })
      .then(() => dispatch(loadTodos()));
  });
};
