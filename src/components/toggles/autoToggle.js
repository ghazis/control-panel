import React, { Component } from 'react';
import { connect } from 'react-redux';
import Toggle from 'material-ui/Toggle';
import { setThermState } from '../../actions/thermActions';

class AutoToggle extends Component {

	render() {

		const sw_device_name = 'Dining Room Lights';

		return (
			<div>
				<Toggle label="Auto" disabled={false} toggled={this.props.toggled} labelPosition="right" style={{marginBottom: 16}} onToggle={() => {this.props.setThermState('http://73.209.181.138/cmd?cmd=auto'+ this.props.toggleData.cmd, this.props.toggleData.cmd, 'AUTO')}}/>
			</div>
		)
}
}

const mapStateToProps = (state) => {
    return {
    	toggleData: state.thermState.auto,
    	toggled: state.thermState.auto.toggled
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setThermState: (url, cmd, name) => dispatch(setThermState(url, cmd, name))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)
(AutoToggle);