import React, { Component } from 'react';
import { AcButton, HeatButton } from './buttons';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';

class ThermTable extends Component {

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
            <td><h1>Temp</h1></td>
            <td><h1>74.536</h1></td>
          </tr>
          <tr>
            <td><AcButton /></td>
            <td><img src={this.props.buttonData.ac.img} style={{ width: 80 }}></img></td>
          </tr>
          <tr>
            <td><HeatButton /></td>
            <td><img src={this.props.buttonData.heat.img} style={{ width: 80 }}></img></td>
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
(ThermTable);