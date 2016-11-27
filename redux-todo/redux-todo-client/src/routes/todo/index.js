import React from 'react';
import TodoTableContainer from './containers/TodoTableContainer';
import TodoDialogContainer from './containers/TodoDialogContainer';

export default (props) => {
  return (
    <div>
      <TodoDialogContainer />
      <TodoTableContainer />
    </div>
    );
}
