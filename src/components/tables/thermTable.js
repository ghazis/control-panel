import React, { Component } from 'react';
import { AcToggle, HeatToggle, IncTempToggle, DecTempToggle } from '../toggles';
import { Table } from 'react-bootstrap';
import { Col } from 'react-grid-system';
import { connect } from 'react-redux';
import { thermStateListener, getCurrentTemp } from '../../actions/thermActions';

class ThermTable extends Component {


  componentWillMount() {
    this.props.getCurrentTemp();
    this.props.thermStateListener();
  }

  componentDidMount() {
    const intervalID = setInterval(() => this.props.getCurrentTemp(), 20000);
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
            <th style={{fontSize: 30}}>Controls</th>
            <th style={{fontSize: 30}}>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><h1>Temp</h1></td>
            <td><h1>{this.props.thermState.current_temp}</h1></td>
          </tr>
          <tr>
            <td><AcToggle /></td>
            <td><img src={this.props.thermState.ac.img} style={{ width: 80 }}></img></td>
          </tr>
          <tr>
            <td><HeatToggle /></td>
            <td><img src={this.props.thermState.heat.img} style={{ width: 80 }}></img></td>
          </tr>
        </tbody>
      </Table>
      <h1 className="text-center" style={{marginTop: 30}}>Set Temperature</h1>
      <Col sm={1}>
        <DecTempToggle />
      </Col>
      <Col sm={1}>
        <h1 style={{marginTop: 50, marginLeft: 350}}>{this.props.thermState.desired_temp}F</h1>
      </Col>
      <Col sm={1}>
        <IncTempToggle />
      </Col>
      <h1 className="text-center" style={{marginTop: 170}}>{this.props.thermState.dp_msg}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      thermState: state.thermState
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