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
            <th>Controls</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><SW01 /></td>
            <td><img src={this.props.toggleData.sw01.img} style={{ width: 50 }}></img></td>
          </tr>
          <tr> 
            <td><SW02 /></td>
            <td><img src={this.props.toggleData.sw02.img} style={{ width: 50 }}></img></td>
          </tr>
          <tr> 
            <td><SW03 /></td>
            <td><img src={this.props.toggleData.sw03.img} style={{ width: 50 }}></img></td>
          </tr>
          <tr> 
            <td><SW04 /></td>
            <td><img src={this.props.toggleData.sw04.img} style={{ width: 50 }}></img></td>
          </tr>
          <tr> 
            <td><SW05 /></td>
            <td><img src={this.props.toggleData.sw05.img} style={{ width: 50 }}></img></td>
          </tr>
        </tbody>
      </Table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      toggleData: state.swState
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        swStateListener: () => dispatch(swStateListener())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)
(HomeTable);