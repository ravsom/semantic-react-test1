import * as userAPI from '../api/user'

import * as uT from '../types/userTypes';

export const getUserSimiliarTo = (likeUser) => {
	return {
		types: [uT.SIMILAR_TO_GET_REQUEST, uT.SIMILAR_TO_GET_SUCCESS, uT.SIMILAR_TO_GET_FAIL],
		promise: ()=> {
			return userAPI.getUser(likeUser);
		}
	};
};

export const getMappableUsersLike = (likeUser) =>{
	return {
		types: [uT.LIKE_MAPPABLE_USERS_REQ, uT.LIKE_MAPPABLE_USERS_SUCCESS, uT.LIKE_MAPPABLE_USERS_FAIL],
		promise: ()=> {
			return userAPI.getMappableUsersLike(likeUser);
		}
	};
};

export const addUser = (userName, userNumber) => {
	return {
		types: [uT.USER_ADD_REQUEST, uT.USER_ADD_SUCCESS, uT.USER_ADD_FAIL],
		promise: ()=> {
			return userAPI.addUser(userName, userNumber);
		}
	};
};

export const fetchUnapprovedUsers = ()=> {
	return {
		types: [uT.GET_UNAPPROVED_USERS_REQ, uT.GET_UNAPPROVED_USERS_SUCCESS, uT.GET_UNAPPROVED_USERS_FAIL],
		promise: ()=> {
			return userAPI.fetchUnapprovedUsers();
		}
	};
};

export const fetchMappableMembers = ()=> {
	return {
		types: [uT.GET_MAPPABLE_MEMBERS_REQ, uT.GET_MAPPABLE_MEMBERS_SUCCESS, uT.GET_MAPPABLE_MEMBERS_FAIL],
		promise: ()=> {
			return userAPI.fetchMappableMembers();
		}
	};
};

export const approveUser = (memberId, mappedMemberId) => {
	return {
		types:[uT.APPROVE_MEMBER_REQ, uT.APPROVE_MEMBER_SUCCESS, uT.APPROVE_MEMBER_FAIL],
		promise:()=>{
			return userAPI.approveUser(memberId, mappedMemberId);
		}
	}
};
