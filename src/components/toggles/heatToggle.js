import React, { Component } from 'react';
import { connect } from 'react-redux';
import Toggle from 'material-ui/Toggle';
import { setThermState } from '../../actions/thermActions';

class HeatToggle extends Component {


	render() {
		return (
			<div>
				<Toggle label="Heat" disabled={this.props.toggleData.disable} thumbSwitchedStyle={{backgroundColor: 'red'}} trackSwitchedStyle={{backgroundColor: '#ff9d9d'}} toggled={this.props.toggleData.toggled} labelPosition="right" style={{marginBottom: 16}} onToggle={() => {this.props.setThermState('http://73.209.181.138/cmd?cmd=heat'+ this.props.toggleData.cmd, this.props.toggleData.cmd, 'HEAT')}}/>
			</div>
		)
}
}

const mapStateToProps = (state) => {
    return {
    	toggleData: state.thermState.heat
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setThermState: (url, cmd, name) => dispatch(setThermState(url, cmd, name))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)
(HeatToggle);