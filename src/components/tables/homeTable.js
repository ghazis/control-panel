import React, { Component } from 'react';
import { SW01, SW02, SW03, SW04, SW05 } from '../toggles';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { swStateListener } from '../../actions/swActions';

class HomeTable extends Component {

  componentWillMount() {
    this.props.swStateListener();
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
            <td><SW01 /></td>
            <td><img src={this.props.swState.sw01.img} style={{ width: 50 }}></img></td>
          </tr>
          <tr> 
            <td><SW02 /></td>
            <td><img src={this.props.swState.sw01.img} style={{ width: 50 }}></img></td>
          </tr>
          <tr> 
            <td><SW03 /></td>
            <td><img src={this.props.swState.sw01.img} style={{ width: 50 }}></img></td>
          </tr>
          <tr> 
            <td><SW04 /></td>
            <td><img src={this.props.swState.sw01.img} style={{ width: 50 }}></img></td>
          </tr>
          <tr> 
            <td><SW05 /></td>
            <td><img src={this.props.swState.sw05.img} style={{ width: 50 }}></img></td>
          </tr>
        </tbody>
      </Table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      swState: state.swState
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        swStateListener: () => dispatch(swStateListener())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)
(HomeTable);