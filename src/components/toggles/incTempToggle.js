import React, { Component } from 'react';
import { connect } from 'react-redux';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Add from 'material-ui/svg-icons/content/add';
import { incrementTemp } from '../../actions/thermActions';

class IncTempToggle extends Component {


	render() {
		return (
			<div>
                <FloatingActionButton onTouchTap={() => {this.props.incrementTemp(this.props.toggleData.desired_temp+1)}} style={{ marginTop: 200, marginLeft: 350}}>
                  <Add />
                </FloatingActionButton>
			</div>
		)
}
}

const mapStateToProps = (state) => {
    return {
    	toggleData: state.thermState
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        incrementTemp: (temp) => dispatch(incrementTemp(temp))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)
(IncTempToggle);