import React, { Component } from 'react';
import { connect } from 'react-redux';
import Toggle from 'material-ui/Toggle';
import { setCarState } from '../../actions/carActions';

class CarStartToggle extends Component {


	render() {
		return (
			<div>
				<Toggle label="Start Car" thumbStyle={{width: 40, height: 40}} thumbSwitchedStyle={{left: 75}} labelStyle={{left: 50, fontSize: 30, marginTop: 10}} trackStyle={{width: 70, height: 35}} toggled={this.props.toggleData.toggled} labelPosition="right" style={{marginBottom: 16}} onToggle={() => {this.props.setCarState('http://73.209.181.138/cmd?cmd=car'+ this.props.toggleData.cmd, this.props.toggleData.cmd, 'CAR')}}/>
			</div>
		)
}
}

const mapStateToProps = (state) => {
    return {
    	toggleData: state.carState.car
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setCarState: (url, cmd, name) => dispatch(setCarState(url, cmd, name))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)
(CarStartToggle);