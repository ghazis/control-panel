import React, { Component } from 'react';
import { connect } from 'react-redux';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Minus from 'material-ui/svg-icons/content/remove';
import { decrementTemp } from '../../actions/thermActions';

class DecTempToggle extends Component {


	render() {
		return (
			<div>
                <FloatingActionButton onTouchTap={() => {this.props.decrementTemp(this.props.thermState.desired_temp-1)}} style={{ marginTop: 40, marginLeft: 360}}>
                  <Minus />
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
        decrementTemp: (temp) => dispatch(decrementTemp(temp))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)
(DecTempToggle);