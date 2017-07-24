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
            <th>Controls</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><h3>Temp</h3></td>
            <td><h3>{this.props.thermState.current_temp}</h3></td>
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
      <h2 className="text-center" style={{marginTop: 30}}>Set Temperature</h2>
      <Col sm={1}>
        <DecTempToggle />
      </Col>
      <Col sm={1}>
        <h2 style={{marginTop: 50, marginLeft: 360}}>{this.props.thermState.desired_temp}F</h2>
      </Col>
      <Col sm={1}>
        <IncTempToggle />
      </Col>
      <h2 className="text-center" style={{marginTop: 170}}>{this.props.thermState.dp_msg}</h2>
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