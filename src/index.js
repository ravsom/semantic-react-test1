import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import './index.css';
import routes from './routes'
import createStore from './Store/create-store'
import {syncHistoryWithStore} from 'react-router-redux'

import {Provider} from 'react-redux'

const store = createStore();
const history = syncHistoryWithStore(browserHistory, store);
ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			{routes()}
		</Router>
	</Provider>,
	document.getElementById('root')
);
