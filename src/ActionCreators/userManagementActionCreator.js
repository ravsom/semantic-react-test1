import axios from 'axios'

const getUserFromAPI = (likeUser)=> {
	if (likeUser) {
		return axios.get('/api/userByName/' + likeUser)
	}
	return Promise.reject("No query");
};


const updateChosenUser = (users)=> {
	return {
		type: 'ATTENDEES',
		users
	}
};

const noUsers = (likeUser, error) => {
	console.error('Problem while retrieving users: ' + error);
	return {
		type: 'NO_USERS',
		users: []
	}
};

export const getUserSimiliarTo = (likeUser) => {
	return (dispatch)=> {
		return getUserFromAPI(likeUser).then((users)=> {
			return dispatch(updateChosenUser(users.data));
		}).catch((error)=> {
			return dispatch(noUsers(likeUser, error));
		})
	}
};