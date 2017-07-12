import React, { Component } from 'react';
import { AcButton, HeatButton } from './buttons';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';

class ThermTable extends Component {

  render () {
    return (
      <div>
      {this.props.myprop}
      <Table responsive>
        <thead>
          <tr>
            <th>Controls</th>
            <th className="text-center">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><AcButton /></td>
            <td><img className="text-centerr" src={this.props.buttonData.ac.img} style={{ width: 200 }}></img></td>
          </tr>
          <tr>
            <td><HeatButton /></td>
            <td className="text-center"><img src={this.props.buttonData.heat.img} style={{ width: 50 }}></img></td>
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