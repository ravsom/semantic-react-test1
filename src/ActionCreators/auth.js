/**
 * Created by rs on 28/10/16.
 */
import {fetchAuthenticatedUser, logout} from '../api/user'
import * as aT from '../types/authTypes'

export const getAuthenticatedUser = ()=> {
	return {
		types: [aT.AUTH_USER_REQUEST, aT.AUTHENTICATED_SUCCESS, aT.AUTH_USER_FAIL],
		promise: ()=> {
			return fetchAuthenticatedUser();
		}
	}
};


export const logoutUser = ()=> {
	return {
		types: [aT.LOGOUT_REQUEST, aT.LOGOUT_SUCCESS, aT.LOGOUT_FAIL],
		promise: ()=> {
			return logout();
		}
	}
};