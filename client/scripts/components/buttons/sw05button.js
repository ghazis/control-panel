import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { runScript } from '../../actions/buttons';

class SW05Button extends Component {


	render() {

		const sw_device_name = 'Television';

		return (
			<div>
				<Button className={this.props.buttonData.classname} onClick={() => {this.props.runScript('http://73.209.181.138:7000/cmd?cmd=sw05'+ this.props.buttonData.cmd, this.props.buttonData.cmd, 'SW05')}}>{this.props.buttonData.name} {sw_device_name}</Button>
			</div>
		)
}
}

const mapStateToProps = (state) => {
    return {
    	buttonData: state.buttonToggle.sw05
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        runScript: (url, cmd, name) => dispatch(runScript(url, cmd, name))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)
(SW05Button);