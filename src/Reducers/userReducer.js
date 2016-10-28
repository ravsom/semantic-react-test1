/**
 * Created by rs on 28/10/16.
 */

const userReducer = (state = {}, action)=> {
	console.log('calling user reducer with state ' + state);

	switch (action.type) {
		default :
			return state;
	}
};

export default userReducer;