import React, { Component } from 'react';
import Routes from './components/routes';
import { Link } from 'react-router-dom';
import { Nav , NavItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {

    signOut = () => {
    firebase.auth().signOut().then(function() {
    window.location = "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=http://gharcontrol.com"
    }).catch(function(error) {
      // An error happened.
    });
  }

  render() {
    return (
      <MuiThemeProvider>
    	<div>
        <AppBar showMenuIconButton={false} style={{marginBottom: 10}} className="text-center" title="Ashhad's Control Panel" iconElementRight={<FlatButton label="Sign Out" onClick={this.signOut} />} />
			<Nav bsStyle="tabs">
				<LinkContainer to="/home" style={{fontSize: 30}}><NavItem eventKey="1">Home</NavItem></LinkContainer>
				<LinkContainer to="/car" style={{fontSize: 30}}><NavItem eventKey="2">Car</NavItem></LinkContainer>
				<LinkContainer to="/therm" style={{fontSize: 30}}><NavItem eventKey="3">Therm</NavItem></LinkContainer>
        <LinkContainer to="/garage" style={{fontSize: 30}}><NavItem eventKey="4">Garage</NavItem></LinkContainer>
			</Nav>
      		{Routes}
       	</div>
        </MuiThemeProvider>
    );
  }
}

export default App;
