import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { runScript } from '../../actions/buttons';

class HeatButton extends Component {


	render() {
		return (
			<div>
				<Button className={this.props.buttonData.classname} onClick={() => {this.props.runScript('http://73.209.181.138:7000/cmd?cmd=heat'+ this.props.buttonData.cmd, this.props.buttonData.cmd, 'HEAT')}}>{this.props.buttonData.name}</Button>
			</div>
		)
}
}

const mapStateToProps = (state) => {
    return {
    	buttonData: state.buttonToggle.heat
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        runScript: (url, cmd, name) => dispatch(runScript(url, cmd, name))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)
(HeatButton);