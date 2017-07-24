import React, { Component } from 'react';
import { connect } from 'react-redux';
import Toggle from 'material-ui/Toggle';
import { setCarState } from '../../actions/carActions';

class CarLockToggle extends Component {


	render() {
		return (
			<div>
				<Toggle label="Lock Car" toggled={this.props.toggleData.toggled} labelPosition="right" style={{marginBottom: 16}} onToggle={() => {this.props.setCarState('http://73.209.181.138/cmd?cmd=lock'+ this.props.toggleData.cmd, this.props.toggleData.cmd, 'CAR_LOCK')}}/>
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