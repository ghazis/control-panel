import React, { Component } from 'react';
import { connect } from 'react-redux';
import Toggle from 'material-ui/Toggle';
import { setThermState } from '../../actions/thermActions';

class AcToggle extends Component {

	render() {
		return (
			<div>
				<Toggle label="AC" disabled={this.props.toggleData.disable} toggled={this.props.toggleData.toggled} labelPosition="right" style={{marginBottom: 16}} onToggle={() => {this.props.setThermState('http://73.209.181.138/cmd?cmd=ac'+ this.props.toggleData.cmd, this.props.toggleData.cmd, 'AC')}}/>
			</div>
		)
}
}

const mapStateToProps = (state) => {
    return {
    	toggleData: state.thermState.ac
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setThermState: (url, cmd, name) => dispatch(setThermState(url, cmd, name))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)
(AcToggle);