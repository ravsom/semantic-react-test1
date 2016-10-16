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

const routes = ()=> {
	return (
		<Route path="/" component={MainLayout}>
			<Route component={Menu} >
				<IndexRoute component={IndexLayout}/>
				<Route path="members" component={Members}/>
				<Route path="record-session" component={RecordSession}/>
				<Route path="feedback" component={SessionFeedback}/>
				<Route path="logout" component={LogoutContainer}/>
			</Route>
		</Route>
	)
};

export default routes;