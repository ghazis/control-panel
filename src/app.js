import React, { Component } from 'react';
import Routes from './components/routes';
import { Link } from 'react-router-dom';
import { Nav , NavItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {


  render() {
    return (
      <MuiThemeProvider>
    	<div>
			<Nav bsStyle="tabs">
				<LinkContainer to="/home"><NavItem eventKey="1">Home</NavItem></LinkContainer>
				<LinkContainer to="/car"><NavItem eventKey="2">Car</NavItem></LinkContainer>
				<LinkContainer to="/therm"><NavItem eventKey="3">Therm</NavItem></LinkContainer>
			</Nav>
      		{Routes}
       	</div>
        </MuiThemeProvider>
    );
  }
}

export default App;
