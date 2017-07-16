import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { runScript } from '../../actions/buttons';
import { get_state } from '../../actions/buttons';

class AcButton extends Component {

	componentDidMount() {
		const intervalID = setInterval(() => this.props.get_state(), 10000);
		this.setState({intervalID: intervalID});
	}

	componentWillUnmount() {
		clearInterval(this.state.intervalID);
	}

	render() {
		return (
			<div>
				<Button className={this.props.buttonData.classname} onClick={() => {this.props.runScript('http://73.209.181.138:7000/cmd?cmd=ac'+ this.props.buttonData.cmd, this.props.buttonData.cmd, 'AC')}}>{this.props.buttonData.name}</Button>
			</div>
		)
}
}

const mapStateToProps = (state) => {
    return {
    	buttonData: state.buttonToggle.ac
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