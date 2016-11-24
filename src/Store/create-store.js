/**
 * Created by rs on 28/10/16.
 */

import {createStore, applyMiddleware} from 'redux';
import {combinedReducers} from '../Reducers/index';
import thunk from 'redux-thunk'
import promiseMiddleware from '../middleware/promise-middleware'
import {composeWithDevTools} from 'remote-redux-devtools';


const store = ()=> {
	return createStore(combinedReducers, composeWithDevTools(applyMiddleware(thunk, promiseMiddleware)));
};

export default store;