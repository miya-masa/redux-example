import React from 'react';
import { PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const TodoDialog = (props) => {
  const style = {
    marginLeft: 20,
    marginTop: 10
  };
  const actions = [
    <FlatButton
    label="Cancel"
    secondary={true}
    onTouchTap={props.handleCancel}
    />,
    <FlatButton
    label="Submit"
    primary={true}
    disabled={false}
    onTouchTap={() => props.handleSubmit(props.todo, props.limitDate)}
    />
  ];
  return (
    <div>
        <FloatingActionButton style={style} onTouchTap={props.handleAdd} >
            <ContentAdd />
        </FloatingActionButton>
      <Dialog title="Todo追加" actions={actions} autoOk={true} open={props.isOpened} >
          <h3>Todoを追加してみよう</h3>
          <TextField name="todo" onChange={props.onChangeTodo} value={props.todo}/>
          <DatePicker name="limitDate" onChange={props.onChangeLimitDate} value={props.limitDate}/>
      </Dialog>
    </div>
    );
};
TodoDialog.propTypes = {
  handleCancel: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleAdd: PropTypes.func,
  onChangeTodo: PropTypes.func,
  onChangeLimitDate: PropTypes.func,

  isOpened: PropTypes.bool,
  openDialog: PropTypes.bool,
  todo: PropTypes.string,
  limitDate: PropTypes.object
}
export default TodoDialog;
