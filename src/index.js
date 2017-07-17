import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { saveState } from './localStorage';

const store = configureStore();

store.subscribe(() => {
	saveState(store.getState());
});

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
  document.getElementById('root')
);
