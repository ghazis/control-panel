import React, { Component } from 'react';
import { connect } from 'react-redux';
import Toggle from 'material-ui/Toggle';
import { setSwState } from '../../actions/buttons';

class SW03Button extends Component {


	render() {

		const sw_device_name = 'Heater';

		return (
			<div>
				<Toggle label={sw_device_name} toggled={this.props.buttonData.toggled} labelPosition="right" style={{marginBottom: 16}} onToggle={() => {this.props.setSwState('http://73.209.181.138/cmd?cmd=sw03'+ this.props.buttonData.cmd, this.props.buttonData.cmd, 'SW03')}}/>
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
        setSwState: (url, cmd, name) => dispatch(setSwState(url, cmd, name))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)
(SW03Button);