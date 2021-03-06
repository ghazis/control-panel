import React, { Component } from 'react';
import { connect } from 'react-redux';
import Toggle from 'material-ui/Toggle';
import { setSwState } from '../../actions/swActions';

class SW02Toggle extends Component {


	render() {

		const sw_device_name = 'Living Room Lamp 1';

		return (
			<div>
				<Toggle label={sw_device_name} thumbStyle={{width: 40, height: 40}} thumbSwitchedStyle={{left: 75}} labelStyle={{left: 50, fontSize: 30, marginTop: 10}} trackStyle={{width: 70, height: 35}} toggled={this.props.toggleData.toggled} labelPosition="right" style={{marginBottom: 16}} onToggle={() => {this.props.setSwState('http://gharcontrol.com:3000/cmd?cmd=sw02'+ this.props.toggleData.cmd, this.props.toggleData.cmd, 'SW02')}}/>
			</div>
		)
}
}

const mapStateToProps = (state) => {
    return {
    	toggleData: state.swState.sw02
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setSwState: (url, cmd, name) => dispatch(setSwState(url, cmd, name))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)
(SW02Toggle);