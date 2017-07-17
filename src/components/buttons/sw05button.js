import React, { Component } from 'react';
import { connect } from 'react-redux';
import Toggle from 'material-ui/Toggle';
import { runScript } from '../../actions/buttons';

class SW05Button extends Component {


	render() {

		const sw_device_name = 'Television';

		return (
			<div>
				<Toggle label={sw_device_name} disabled={this.props.disable_toggle} toggled={this.props.buttonData.toggled} labelPosition="right" style={{marginBottom: 16}} onToggle={() => {this.props.runScript('http://73.209.181.138:7000/cmd?cmd=sw05'+ this.props.buttonData.cmd, this.props.buttonData.cmd, 'SW05')}}/>
			</div>
		)
}
}

const mapStateToProps = (state) => {
    return {
    	buttonData: state.buttonToggle.sw05,
    	disable_toggle: state.buttonToggle.toggle_disabled
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        runScript: (url, cmd, name) => dispatch(runScript(url, cmd, name))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)
(SW05Button);