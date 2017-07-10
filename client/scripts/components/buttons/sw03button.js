import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { runScript } from '../../actions/buttons';

class SW03Button extends Component {


	render() {

		const sw_device_name = 'Heater';

		return (
			<div>
				<Button className={this.props.buttonData.classname} onClick={() => {this.props.runScript('http://localhost:7000/cmd?cmd=sw03'+ this.props.buttonData.cmd, this.props.buttonData.cmd, 'SW03')}}>{this.props.buttonData.name} {sw_device_name}</Button>
			</div>
		)
}
}

const mapStateToProps = (state) => {
    return {
    	buttonData: state.buttonToggle.sw03
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        runScript: (url, cmd, name) => dispatch(runScript(url, cmd, name))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)
(SW03Button);