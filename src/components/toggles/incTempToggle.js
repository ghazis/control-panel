import React, { Component } from 'react';
import { connect } from 'react-redux';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Add from 'material-ui/svg-icons/content/add';
import { incrementTemp } from '../../actions/thermActions';

class IncTempToggle extends Component {


	render() {
		return (
			<div>
                <FloatingActionButton onTouchTap={() => {this.props.incrementTemp(this.props.thermState.desired_temp+1)}} style={{ marginTop: 40, marginLeft: 350}}>
                  <Add />
                </FloatingActionButton>
			</div>
		)
}
}

const mapStateToProps = (state) => {
    return {
    	thermState: state.thermState
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        incrementTemp: (temp) => dispatch(incrementTemp(temp))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)
(IncTempToggle);