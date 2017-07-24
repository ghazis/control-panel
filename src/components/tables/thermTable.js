import React, { Component } from 'react';
import { AcToggle, HeatToggle, AutoToggle, IncTempToggle, DecTempToggle } from '../toggles';
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
            <td><h3>{this.props.toggleData.current_temp}</h3></td>
          </tr>
          <tr>
            <td><AcToggle /></td>
            <td><img src={this.props.toggleData.ac.img} style={{ width: 80 }}></img></td>
          </tr>
          <tr>
            <td><HeatToggle /></td>
            <td><img src={this.props.toggleData.heat.img} style={{ width: 80 }}></img></td>
          </tr>
         <tr>
            <td><AutoToggle /></td>
            <td><img src={this.props.toggleData.auto.img} style={{ width: 80 }}></img></td>
          </tr>
        </tbody>
      </Table>
      <Col sm={1}>
        <DecTempToggle />
      </Col>
      <Col sm={1}>
        <h2 style={{marginTop: 210, marginLeft: 360}}>{this.props.toggleData.desired_temp}F</h2>
      </Col>
      <Col sm={1}>
        <IncTempToggle />
      </Col>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      toggleData: state.thermState
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