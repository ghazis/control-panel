import React, { Component } from 'react';
import { connect } from 'react-redux';
import Toggle from 'material-ui/Toggle';
import { runScript } from '../../actions/buttons';

class LockCarButton extends Component {


	render() {
		return (
			<div>
				<Toggle label="Lock Car" disabled={this.props.disable_toggle} toggled={this.props.buttonData.toggled} labelPosition="right" style={{marginBottom: 16}} onToggle={() => {this.props.runScript('http://73.209.181.138/cmd?cmd=lock'+ this.props.buttonData.cmd, this.props.buttonData.cmd, 'CAR_LOCK')}}/>
			</div>
		)
}
}

const mapStateToProps = (state) => {
    return {
    	buttonData: state.buttonToggle.car_lock,
    	disable_toggle: state.buttonToggle.toggle_disabled
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        runScript: (url, cmd, name) => dispatch(runScript(url, cmd, name))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)
(LockCarButton);