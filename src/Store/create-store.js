/**
 * Created by rs on 28/10/16.
 */

import {createStore} from 'redux';
import {combinedReducers} from '../Reducers/index';



const store = ()=>{
	return createStore(combinedReducers);
};

export default store;