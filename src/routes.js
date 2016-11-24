/**
 * Created by rs on 11/10/16.
 */
import {Route, IndexRoute} from "react-router"
import React from 'react';
import MainLayout from './Components/Main'
import Members from './Components/Members';
import RecordSession from './Components/Record-Session'
import IndexLayout from './Components/DefaultLayout'
import SessionFeedback from './Components/SessionFeedback'
import UserProfile from './Components/UserProfile'
import LoginComponent from './Components/Login'
import ApproveMembers from './Components/ApproveMembers'
import ApprovedMembers from './Components/approved-users'

const routes = ()=> {
	return (
		<Route path="/" component={MainLayout}>
			<IndexRoute component={IndexLayout}/>
			<Route path="user-profile" component={UserProfile}/>
			<Route path="members" component={Members}/>
			<Route path="record-session" component={RecordSession}/>
			<Route path="feedback" component={SessionFeedback}/>
			<Route path="login" component={LoginComponent}/>
			<Route path="approve-members" component={ApproveMembers}/>
			<Route path="approved-members" component={ApprovedMembers}/>
		</Route>
	)
};

export default routes;