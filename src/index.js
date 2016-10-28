import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import './index.css';
import routes from './routes'
import createStore from './Store/create-store'

import {Provider} from 'react-redux'

const store = createStore();

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			{routes()}
		</Router>
	</Provider>,
	document.getElementById('root')
);
