import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import TableRowColumn from 'material-ui/Table/TableRowColumn';
import TableRow from 'material-ui/Table/TableRow';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Checkbox from 'material-ui/Checkbox';
import ContentRemove from 'material-ui/svg-icons/content/remove';

export default props => {
  const lineThroughStyle = {
    'textDecoration': props.todo.complete ? 'line-through' : 'none'
  };
  const limitDate = moment(props.todo.limitDate).format('YYYY/MM/DD');
  return (<TableRow key={props.todo.id}>
        <TableRowColumn style={lineThroughStyle}>{_.padStart(props.index + 1, 4, '0')}</TableRowColumn>
        <TableRowColumn style={lineThroughStyle}>{props.todo.code}</TableRowColumn>
        <TableRowColumn style={lineThroughStyle}>{props.todo.todo}</TableRowColumn>
        <TableRowColumn style={lineThroughStyle}>{limitDate}</TableRowColumn>
        <TableRowColumn>
          <Checkbox defaultChecked={props.todo.complete} onCheck={(event, value) => props.onChangeComplete(props.index, value) }/>
        </TableRowColumn>
        <TableRowColumn>
          <FloatingActionButton mini={true} secondary={true} onTouchTap={(event, value) => props.onTouchRemove(props.index) }>
            <ContentRemove />
          </FloatingActionButton>
        </TableRowColumn>
  </TableRow>);

};
