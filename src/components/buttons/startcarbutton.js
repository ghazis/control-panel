import React, { Component } from 'react';
import { connect } from 'react-redux';
import Toggle from 'material-ui/Toggle';
import { runScript } from '../../actions/buttons';

class StartCarButton extends Component {


	render() {
		return (
			<div>
				<Toggle label="Start Car" disabled={this.props.disable_toggle} toggled={this.props.buttonData.toggled} labelPosition="right" style={{marginBottom: 16}} onToggle={() => {this.props.runScript('http://73.209.181.138:7000/cmd?cmd=car'+ this.props.buttonData.cmd, this.props.buttonData.cmd, 'CAR')}}/>
			</div>
		)
}
}

const mapStateToProps = (state) => {
    return {
    	buttonData: state.buttonToggle.car,
    	disable_toggle: state.buttonToggle.toggle_disabled
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        runScript: (url, cmd, name) => dispatch(runScript(url, cmd, name))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)
(StartCarButton);