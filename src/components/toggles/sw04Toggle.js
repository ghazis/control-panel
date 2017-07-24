import React, { Component } from 'react';
import { connect } from 'react-redux';
import Toggle from 'material-ui/Toggle';
import { setSwState } from '../../actions/swActions';

class SW04Toggle extends Component {


	render() {

		const sw_device_name = 'Living Room Lights';

		return (
			<div>
				<Toggle label={sw_device_name} toggled={this.props.toggleData.toggled} labelPosition="right" style={{marginBottom: 16}} onToggle={() => {this.props.setSwState('http://73.209.181.138/cmd?cmd=sw04'+ this.props.toggleData.cmd, this.props.toggleData.cmd, 'SW04')}}/>
			</div>
		)
}
}

const mapStateToProps = (state) => {
    return {
    	toggleData: state.swState.sw04
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setSwState: (url, cmd, name) => dispatch(setSwState(url, cmd, name))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)
(SW04Toggle);