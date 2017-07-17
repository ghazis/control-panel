import React, { Component } from 'react';
import { SW01, SW02, SW03, SW04, SW05, StartCarButton, LockCarButton } from '../buttons';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';

class HomeTable extends Component {

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
            <td><SW01 /></td>
            <td><img src={this.props.buttonData.sw01.img} style={{ width: 50 }}></img></td>
          </tr>
          <tr> 
            <td><SW02 /></td>
            <td><img src={this.props.buttonData.sw02.img} style={{ width: 50 }}></img></td>
          </tr>
          <tr> 
            <td><SW03 /></td>
            <td><img src={this.props.buttonData.sw03.img} style={{ width: 50 }}></img></td>
          </tr>
          <tr> 
            <td><SW04 /></td>
            <td><img src={this.props.buttonData.sw04.img} style={{ width: 50 }}></img></td>
          </tr>
          <tr> 
            <td><SW05 /></td>
            <td><img src={this.props.buttonData.sw05.img} style={{ width: 50 }}></img></td>
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
(HomeTable);