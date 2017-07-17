import React, { Component } from 'react';
import { connect } from 'react-redux';
import Toggle from 'material-ui/Toggle';
import { runScript } from '../../actions/buttons';

class SW02Button extends Component {


	render() {

		const sw_device_name = 'Fan';

		return (
			<div>
				<Toggle label={sw_device_name} toggled={this.props.buttonData.toggle} labelPosition="right" style={{marginBottom: 16}} onToggle={() => {this.props.runScript('http://73.209.181.138:7000/cmd?cmd=sw02'+ this.props.buttonData.cmd, this.props.buttonData.cmd, 'SW02')}}/>
			</div>
		)
}
}

const mapStateToProps = (state) => {
    return {
    	buttonData: state.buttonToggle.sw02
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        runScript: (url, cmd, name) => dispatch(runScript(url, cmd, name))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)
(SW02Button);