import React, { Component } from 'react';
import { connect } from 'react-redux';
import Toggle from 'material-ui/Toggle';
import { runScript } from '../../actions/buttons';

class SW03Button extends Component {


	render() {

		const sw_device_name = 'Heater';

		return (
			<div>
				<Toggle label={sw_device_name} toggled={this.props.buttonData.toggle} labelPosition="right" style={{marginBottom: 16}} onToggle={() => {this.props.runScript('http://73.209.181.138:7000/cmd?cmd=sw03'+ this.props.buttonData.cmd, this.props.buttonData.cmd, 'SW03')}}/>
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