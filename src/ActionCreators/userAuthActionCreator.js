/**
 * Created by rs on 28/10/16.
 */

import axios from 'axios'


const fetchAuthenticatedUser = ()=> {
	return axios.get('/api/profile');
};


const updateAuthenticatedUser = (authenticatedUser)=> {
	return {
		type: 'AUTHENTICATED_SUCCESS',
		authenticatedUser
	}
};

const noAuthenticatedUser = (error)=> {
	return {
		type: 'NO_AUTH_USER',
		error,
		authenticatedUser: {}
	}
};
export const getAuthenticatedUser = ()=> {
	return (dispatch)=> {
		return fetchAuthenticatedUser().then((authenticatedUser)=> {
			return dispatch(updateAuthenticatedUser(authenticatedUser.data));
		}).catch((error)=> {
			const errorStatus = error && error.response ? error.response.status : null;
			const errorMessage = error && error.response && error.response.data ? error.response.data.message : null;
			return dispatch(noAuthenticatedUser({code: errorStatus, message: errorMessage}));
		})
	}
};

const logoutCall = ()=> {
	return axios.post('/api/logout');
};

export const logoutUser = ()=> {
	return (dispatch)=> {
		return logoutCall().then((data)=>dispatch(noAuthenticatedUser()))
	}
}