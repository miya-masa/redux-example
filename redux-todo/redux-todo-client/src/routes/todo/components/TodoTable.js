import React from 'react';
import _ from 'lodash';
import TodoRow from './TodoRow';
import Table from 'material-ui/Table/Table';
import TableHeaderColumn from 'material-ui/Table/TableHeaderColumn';
import TableHeader from 'material-ui/Table/TableHeader';
import TableBody from 'material-ui/Table/TableBody';
import TableRow from 'material-ui/Table/TableRow';


export default props => {
  const rows = props.todos.map((e, index) => <TodoRow todo={e} index={index}  key={e.code} onTouchRemove={props.onTouchRemove} onChangeComplete={props.onChangeComplete} />);
  return (
    <Table selectable={false}>
    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
      <TableRow >
        <TableHeaderColumn>No</TableHeaderColumn>
        <TableHeaderColumn>Code</TableHeaderColumn>
        <TableHeaderColumn>Todo</TableHeaderColumn>
        <TableHeaderColumn>Limit Date</TableHeaderColumn>
        <TableHeaderColumn>Complete</TableHeaderColumn>
        <TableHeaderColumn>Delete</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false} >
      {rows}
    </TableBody>
  </Table>);
};
