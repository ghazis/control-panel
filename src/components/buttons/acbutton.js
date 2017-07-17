import React, { Component } from 'react';
import { connect } from 'react-redux';
import Toggle from 'material-ui/Toggle';
import { runScript } from '../../actions/buttons';
import { get_state } from '../../actions/buttons';

class AcButton extends Component {

	componentDidMount() {
		const intervalID = setInterval(() => this.props.get_state(), 15000);
		this.setState({intervalID: intervalID});
	}

	componentWillUnmount() {
		clearInterval(this.state.intervalID);
	}

	render() {
		return (
			<div>
				<Toggle label="AC" disabled={this.props.disable_toggle} toggled={this.props.buttonData.toggled} labelPosition="right" style={{marginBottom: 16}} onToggle={() => {this.props.runScript('http://73.209.181.138:7000/cmd?cmd=ac'+ this.props.buttonData.cmd, this.props.buttonData.cmd, 'AC')}}/>
			</div>
		)
}
}

const mapStateToProps = (state) => {
    return {
    	buttonData: state.buttonToggle.ac,
    	disable_toggle: state.buttonToggle.toggle_disabled
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        runScript: (url, cmd, name) => dispatch(runScript(url, cmd, name)),
        get_state: () => dispatch(get_state())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)
(AcButton);