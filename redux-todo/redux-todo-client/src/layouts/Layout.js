import React from 'react';
import { browserHistory } from 'react-router';
import { Grid, Col, Row } from 'react-bootstrap';
import AppBar from 'material-ui/AppBar';
import LoaderContainer from '../containers/LoaderContainer';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const HeaderMenu = props => {
  return (
    <IconMenu iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}>
      <MenuItem primaryText="Topへ" onTouchTap={() => browserHistory.push('/')} />
      <MenuItem primaryText="Todoリストへ" onTouchTap={() => browserHistory.push('/todo')} />
    </IconMenu>);
};

export default props => {
  return (
    <Grid>
      <Row>
      <Col>
  <AppBar title="Todo" iconElementLeft={<HeaderMenu />} />
      </Col>
      </Row>
      <Row>
      <Col>
      <LoaderContainer />
      {props.children}
      </Col>
      </Row>
      </Grid>
    );
}
