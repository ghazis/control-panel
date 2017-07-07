import React, { Component } from 'react';
import Table from './components/table';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

class App extends Component {


  render() {
    return (
      <Provider store={store}>
        <Table />
      </Provider>
    );
  }
}

export default App;
