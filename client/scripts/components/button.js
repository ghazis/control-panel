import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { runScript } from '../actions/buttons';

class Buttonn extends Component {


	render() {
		return (
			<div>
				{/*<Button onClick={() => {this.props.runScript('http://localhost:7000/cmd?cmd=sw01_on')}}>{this.props.buttonStatus}</Button>*/}
				<Button className={this.props.buttonData.sw01.classname} onClick={() => {this.props.runScript('http://localhost:7000/cmd?cmd=sw01'+ this.props.buttonData.sw01.cmd, this.props.buttonData.sw01.cmd, 'SW01')}}>{this.props.buttonData.sw01.status} Lights</Button>
				<Button className={this.props.buttonData.sw02.classname} onClick={() => {this.props.runScript('http://localhost:7000/cmd?cmd=sw02'+ this.props.buttonData.sw02.cmd, this.props.buttonData.sw02.cmd, 'SW02')}}>{this.props.buttonData.sw02.status} Lights</Button>
				<Button className={this.props.buttonData.sw03.classname} onClick={() => {this.props.runScript('http://localhost:7000/cmd?cmd=sw03'+ this.props.buttonData.sw03.cmd, this.props.buttonData.sw03.cmd, 'SW03')}}>{this.props.buttonData.sw03.status} Lights</Button>
				<Button className={this.props.buttonData.sw04.classname} onClick={() => {this.props.runScript('http://localhost:7000/cmd?cmd=sw04'+ this.props.buttonData.sw04.cmd, this.props.buttonData.sw04.cmd, 'SW04')}}>{this.props.buttonData.sw04.status} Lights</Button>
				<Button className={this.props.buttonData.sw05.classname} onClick={() => {this.props.runScript('http://localhost:7000/cmd?cmd=sw05'+ this.props.buttonData.sw05.cmd, this.props.buttonData.sw05.cmd, 'SW05')}}>{this.props.buttonData.sw05.status} Lights</Button>
				<Button className={this.props.buttonData.car.classname} onClick={() => {this.props.runScript('http://localhost:7000/cmd?cmd=car'+ this.props.buttonData.car.cmd, this.props.buttonData.car.cmd, 'CAR')}}>{this.props.buttonData.car.status} Car</Button>
				<Button className={this.props.buttonData.car_lock.classname} onClick={() => {this.props.runScript('http://localhost:7000/cmd?cmd=lock'+ this.props.buttonData.car_lock.cmd, this.props.buttonData.car_lock.cmd, 'CAR_LOCK')}}>{this.props.buttonData.car_lock.status} Car Lock</Button>
			</div>
		)
}
}

const mapStateToProps = (state) => {
    return {
    	buttonData: state.buttonToggle
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        runScript: (url, cmd, name) => dispatch(runScript(url, cmd, name))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)
(Buttonn);