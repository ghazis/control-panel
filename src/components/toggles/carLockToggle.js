import React, { Component } from 'react';
import { connect } from 'react-redux';
import Toggle from 'material-ui/Toggle';
import { setCarState } from '../../actions/carActions';

class CarLockToggle extends Component {


	render() {
		return (
			<div>
				<Toggle label="Lock Car" thumbStyle={{width: 40, height: 40}} thumbSwitchedStyle={{left: 75}} labelStyle={{left: 50, fontSize: 30, marginTop: 10}} trackStyle={{width: 70, height: 35}} toggled={this.props.toggleData.toggled} labelPosition="right" style={{marginBottom: 16}} onToggle={() => {this.props.setCarState('http://gharcontrol.com/cmd?cmd=lock'+ this.props.toggleData.cmd, this.props.toggleData.cmd, 'CAR_LOCK')}}/>
			</div>
		)
}
}

const mapStateToProps = (state) => {
    return {
    	toggleData: state.carState.car_lock
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setCarState: (url, cmd, name) => dispatch(setCarState(url, cmd, name))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)
(CarLockToggle);