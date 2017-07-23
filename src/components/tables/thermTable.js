import React, { Component } from 'react';
import { AcButton, HeatButton, AutoButton, IncTempButton, DecTempButton } from '../buttons';
import { Table } from 'react-bootstrap';
import { Col } from 'react-grid-system';
import { connect } from 'react-redux';
import { thermStateListener, getCurrentTemp } from '../../actions/buttons';

class ThermTable extends Component {


  componentWillMount() {
    this.props.thermStateListener();
    this.props.getCurrentTemp();
  }

  componentDidMount() {
    const intervalID = setInterval(this.props.getCurrentTemp(), 30000);
    this.setState({intervalID: intervalID});
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalID);
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
            <td><h3>Temp</h3></td>
            <td><h3>{this.props.buttonData.current_temp}</h3></td>
          </tr>
          <tr>
            <td><AcButton /></td>
            <td><img src={this.props.buttonData.ac.img} style={{ width: 80 }}></img></td>
          </tr>
          <tr>
            <td><HeatButton /></td>
            <td><img src={this.props.buttonData.heat.img} style={{ width: 80 }}></img></td>
          </tr>
         <tr>
            <td><AutoButton /></td>
            <td><img src={this.props.buttonData.auto.img} style={{ width: 80 }}></img></td>
          </tr>
        </tbody>
      </Table>
      <Col sm={1}>
        <DecTempButton />
      </Col>
      <Col sm={1}>
        <h2 style={{marginTop: 210, marginLeft: 360}}>{this.props.buttonData.desired_temp}F</h2>
      </Col>
      <Col sm={1}>
        <IncTempButton />
      </Col>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      buttonData: state.buttonToggle
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        thermStateListener: () => dispatch(thermStateListener()),
        getCurrentTemp: () => dispatch(getCurrentTemp())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)
(ThermTable);