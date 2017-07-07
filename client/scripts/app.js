import React, { Component } from 'react';
import Button from './components/button';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

class App extends Component {


  render() {
    return (
      <Provider store={store}>
        <Button />
      </Provider>
    );
  }
}

export default App;
