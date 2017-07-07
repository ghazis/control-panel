import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { runScript } from '../actions/buttons';

class Buttonn extends Component {


	render() {
		return (
			<div>
				{/*<Button onClick={() => {this.props.runScript('http://192.168.0.149:7000/cmd?cmd=sw01_on')}}>{this.props.buttonStatus}</Button>*/}
				<Button className={this.props.buttonClass} onClick={() => {this.props.runScript('http://localhost:7000/cmd?cmd=sw01'+ this.props.buttonCmd)}}>{this.props.buttonStatus} Lights</Button>
			</div>
		)
}
}

const mapStateToProps = (state) => {
	let sw01 = 'sw01';
    return {
    	buttonStatus: state.buttonToggle.status,
    	buttonCmd: state.buttonToggle.cmd,
    	buttonClass: state.buttonToggle.classname
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        runScript: (url) => dispatch(runScript(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)
(Buttonn);