import React, { Component } from 'react';
import Header from './components/header';
import Routes from './components/routes';
import { Link } from 'react-router-dom';
import { Nav , NavItem} from 'react-bootstrap';


class App extends Component {


  render() {
    return (
    	<div>
			<Nav bsStyle="tabs">
				<NavItem eventKey="1"><Link to="/">Home</Link></NavItem>
				<NavItem eventKey="2"><Link to="/car">Car</Link></NavItem>
				<NavItem eventKey="3"><Link to="/therm">Therm</Link></NavItem>
			</Nav>
      		{Routes}
       	</div>
    );
  }
}

export default App;
