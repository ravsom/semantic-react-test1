/**
 * Created by rs on 28/10/16.
 */

import {List, Map} from 'immutable'


const getMainUser = (users = [])=> {
	return (users.length > 0) ? users[0] : '';
};
const userReducer = (state = Map(), action)=> {
	switch (action.type) {
		case 'AUTHENTICATED_SUCCESS':
			return state.set('authenticatedUser', action.authenticatedUser).delete('error');
		case 'NO_AUTH_USER':
			return state.delete('authenticatedUser');
		case 'ATTENDEES':
			return state.set('selectedUsers', List.of(action.users)).set('mainUser', getMainUser(action.users));
		case 'NO_USERS':
			return state.delete('selectedUsers').delete('mainUser');
		default :
			return state;
	}
};

export default userReducer;