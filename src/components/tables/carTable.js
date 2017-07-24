import React, { Component } from 'react';
import { CarStartToggle, CarLockToggle } from '../toggles';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { carStateListener } from '../../actions/carActions';

class CarTable extends Component {

  componentWillMount() {
    this.props.carStateListener();
  }

  render () {

    return (
      <div>
      <Table responsive>
        <thead>
          <tr>
            <th>Controls</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><CarStartToggle /></td>
            <td><img src={this.props.carState.car.img} style={{ width: 200 }}></img></td>
          </tr>
          <tr>
            <td><CarLockToggle /></td>
            <td><img src={this.props.carState.car_lock.img} style={{ width: 50 }}></img></td>
          </tr>
        </tbody>
      </Table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      carState: state.carState
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        carStateListener: () => dispatch(carStateListener())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)
(CarTable);