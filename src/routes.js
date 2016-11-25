/**
 * Created by rs on 11/10/16.
 */
import {Route, IndexRoute} from "react-router"
import React from 'react';
import MainLayout from './Components/main'
import Members from './Components/members';
import RecordSession from './Components/record-session'
import IndexLayout from './Components/default-layout'
import SessionFeedback from './Components/session-feedback'
import UserProfile from './Components/user-profile'
import LoginComponent from './Components/login'
import ApproveMembers from './Components/approve-members'
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