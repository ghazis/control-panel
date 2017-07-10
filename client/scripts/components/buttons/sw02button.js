import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { runScript } from '../../actions/buttons';

class SW02Button extends Component {


	render() {

		const sw_device_name = 'Fan';

		return (
			<div>
				<Button className={this.props.buttonData.classname} onClick={() => {this.props.runScript('http://localhost:7000/cmd?cmd=sw02'+ this.props.buttonData.cmd, this.props.buttonData.cmd, 'SW02')}}>{this.props.buttonData.name} {sw_device_name}</Button>
			</div>
		)
}
}

const mapStateToProps = (state) => {
    return {
    	buttonData: state.buttonToggle.sw02
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        runScript: (url, cmd, name) => dispatch(runScript(url, cmd, name))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)
(SW02Button);