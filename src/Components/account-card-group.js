/**
 * Created by rs on 31/10/16.
 */

import React, {Component} from 'react'
import {Card} from 'semantic-ui-react'

import NetworkConnectCard from './network-connect-card'

export default class AccountCardGroup extends Component {


	render = ()=> {
		return (
			<Card.Group className="centered">


				<NetworkConnectCard name="Google"
														buttonColor="google plus"
														icon="google"
														href="http://localhost:3333/api/auth/google"/>

				<NetworkConnectCard name="Apple Healthkit"
														buttonColor="black"
														icon="apple"
														href="http://localhost:3333/api/auth/apple"/>

				<NetworkConnectCard name="Strava"
														buttonColor="orange"
														href="http://localhost:3333/api/auth/strava"/>

				<NetworkConnectCard name="Fibit"
														buttonColor="grey"
														href="http://localhost:3333/api/auth/fitbit"/>

				<NetworkConnectCard name="Jawbone"
														buttonColor="teal"
														href="http://localhost:3333/api/auth/jawbone"/>

				<NetworkConnectCard name="Facebook"
														buttonColor="facebook"
														icon="facebook"
														href="http://localhost:3333/api/auth/facebook"/>
			</Card.Group>
		)
	}
}
