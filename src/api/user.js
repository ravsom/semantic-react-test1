import axios from 'axios'

export const getUser = (likeUser)=> {
	if (likeUser) {
		return axios.get('/api/userByName/' + likeUser)
	}
	return Promise.reject("No query");
};

export const addUser = (firstName, phoneNumber) => {
	return axios.post('/api/users', {
		firstName, phoneNumber
	})
};

export const fetchAuthenticatedUser = ()=> {
	return axios.get('/api/profile');
};

export const logout = ()=> {
	return axios.post('/api/logout');
};

export const fetchUnapprovedUsers = ()=> {
	return axios.get('/api/unapprovedUsers');
};

export const fetchMappableMembers = ()=> {
	return axios.get('/api/mappableusers');
};

export const getMappableUsersLike = (likeUser)=> {
	if (likeUser) {
		return axios.get('/api/mappableuserslike/' + likeUser);
	}
	return Promise.reject("no user query.");
}

export const approveUser = (memberId, mappedMemberId)=> {
	return axios.post('/api/approveuser', {memberId, mappedMemberId});
};