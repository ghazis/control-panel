import React, { Component } from 'react';
import { Nav , NavItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class SignInPage extends Component {


  signIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithRedirect(provider);
  }

	render() {
	    return (
	      <MuiThemeProvider>
	    	<div>
	        <AppBar showMenuIconButton={false} style={{marginBottom: 10}} className="text-center" title="Ashhad's Control Panel" iconElementRight={<FlatButton label="Sign In" onClick={this.signIn} />} />
				<Nav bsStyle="tabs">
					<LinkContainer to="/home" style={{fontSize: 30}}><NavItem eventKey="1">Home</NavItem></LinkContainer>
					<LinkContainer to="/car" style={{fontSize: 30}}><NavItem eventKey="2">Car</NavItem></LinkContainer>
					<LinkContainer to="/therm" style={{fontSize: 30}}><NavItem eventKey="3">Therm</NavItem></LinkContainer>
				</Nav>
				<h1 className="text-center">Please Log In to View Controls!</h1>
	       	</div>
	        </MuiThemeProvider>
	    );
	}
}

export default SignInPage;