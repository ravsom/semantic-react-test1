/**
 * Created by rs on 28/10/16.
 */

import * as reducers from './userReducer'
import {combineReducers} from 'redux'

export const combinedReducers = combineReducers(reducers);
