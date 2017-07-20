import React, { Component } from 'react';
import { StartCarButton, LockCarButton } from '../buttons';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';

class CarTable extends Component {

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
            <td><StartCarButton /></td>
            <td><img src={this.props.buttonData.car.img} style={{ width: 200 }}></img></td>
          </tr>
          <tr>
            <td><LockCarButton /></td>
            <td><img src={this.props.buttonData.car_lock.img} style={{ width: 50 }}></img></td>
          </tr>
        </tbody>
      </Table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      buttonData: state.buttonToggle
    };
};

export default connect(mapStateToProps)
(CarTable);