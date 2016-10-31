/**
 * Created by rs on 28/10/16.
 */

import {List, Map} from 'immutable'


const getMainUser = (users = [])=> {
	return (users.length > 0) ? users[0] : '';
};
const userReducer = (state = {}, action)=> {

	switch (action.type) {
		case 'ATTENDEES':
			return Map({
				...state,
				selectedUsers: List.of(action.users),
				mainUser: getMainUser(action.users)
			});
		case 'NO_USERS':
			return new Map({
				...state,
				selectedUsers: []
			});
		default :
			console.log('returning default state');
			return Map({
				state: {},
				selectedUsers: [],
				mainUser: null
			});
	}
};

export default userReducer;