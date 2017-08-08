import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import SignInPage from './SignInPage.js';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
	  	if (user.email=='ashhad.ghazi@gmail.com' || user.email=='bushra.ghazi@gmail.com' || user.email=='rizwana.ghazi@gmail.com' || user.email=='qurratulann.butt@gmail.com' || user.email=='zaydghazi04@gmail.com') {
			ReactDOM.render(
				<Provider store={store}>
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</Provider>,
			  document.getElementById('root')
			);
		} else {
			ReactDOM.render(
				<Provider store={store}>
					<BrowserRouter>
						<SignInPage />
					</BrowserRouter>
				</Provider>,
			  document.getElementById('root')
			);
		}
    } else {
    }
  });

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<SignInPage />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);

