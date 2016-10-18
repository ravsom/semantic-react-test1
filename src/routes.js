/**
 * Created by rs on 11/10/16.
 */
import {Route, IndexRoute} from "react-router"
import React from 'react';
import MainLayout from './Components/Main'
import Menu from './Components/MenuLayout'
import Members from './Components/Members';
import RecordSession from './Components/Record-Session'
import IndexLayout from './Components/DefaultLayout'
import LogoutContainer from './Components/Logout'
import SessionFeedback from './Components/SessionFeedback'
import UserProfile from './Components/UserProfile'

const routes = ()=> {
	return (
		<Route path="/" component={MainLayout}>
			<Route component={Menu} >
				<IndexRoute component={IndexLayout}/>
				<Route path="user-profile" component={UserProfile} pageName="User Profile"/>
				<Route path="members" component={Members} pageName="Members"/>
				<Route path="record-session" component={RecordSession} pageName="Record Session"/>
				<Route path="feedback" component={SessionFeedback} pageName="Ride Feedback"/>
				<Route path="logout" component={LogoutContainer} pageName="Logout"/>
			</Route>
		</Route>
	)
};

export default routes;