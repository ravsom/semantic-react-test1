/**
 * Created by rs on 28/10/16.
 */

import {List, Map} from 'immutable'

import * as uT from '../types/userTypes'
import * as aT from '../types/authTypes'

const getMainUser = (users = [])=> {
	return (users.length > 0) ? users[0] : '';
};
const userReducer = (state = Map(), action)=> {
	switch (action.type) {
		case aT.AUTHENTICATED_SUCCESS:
			return state.set('authenticatedUser', action.result.data).delete('error');
		case aT.AUTH_USER_FAIL:
		case aT.LOGOUT_SUCCESS:
			return state.delete('authenticatedUser');
		case 'ATTENDEES':
			return state.set('selectedUsers', Map.of('userList', List.of(action.users), 'mainUser', getMainUser(action.users)));
		case 'NO_USERS':
			return state.delete('selectedUsers');
		case uT.USER_ADD_REQUEST:
			return state;
		case uT.USER_ADD_SUCCESS:
			return state.set('userAdded', action.user);
		case uT.USER_ADD_FAIL:
			const userNotAdded = Map.of('userName', action.userName, 'error', action.error);
			return state.set('userNotAdded', userNotAdded);
		case aT.AUTH_USER_REQUEST:
			return state;
		case uT.GET_UNAPPROVED_USERS_SUCCESS:
		case uT.APPROVE_MEMBER_SUCCESS:
			return state.set('unapprovedUsers', List(action.result.data));
		case uT.GET_MAPPABLE_MEMBERS_SUCCESS:
		case uT.LIKE_MAPPABLE_USERS_SUCCESS:
			return state.set('mappableMembers', List(action.result.data));
		case uT.GET_UNAPPROVED_USERS_FAIL:
		case uT.GET_UNAPPROVED_USERS_REQ:
		case uT.GET_MAPPABLE_MEMBERS_REQ:
		case uT.GET_MAPPABLE_MEMBERS_FAIL:
		default :
			return state;
	}
};

export default userReducer;