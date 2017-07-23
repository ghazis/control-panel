import React, { Component } from 'react';
import { connect } from 'react-redux';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Minus from 'material-ui/svg-icons/content/remove';
import { decrementTemp } from '../../actions/buttons';

class DecTempButton extends Component {


	render() {
		return (
			<div>
                <FloatingActionButton onTouchTap={() => {this.props.decrementTemp(this.props.buttonData.desired_temp-1)}} style={{ marginTop: 200, marginLeft: 360}}>
                  <Minus />
                </FloatingActionButton>
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
        decrementTemp: (temp) => dispatch(decrementTemp(temp))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)
(DecTempButton);