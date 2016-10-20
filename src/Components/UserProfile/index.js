/**
 * Created by rs on 16/10/16.
 */

import React, {Component} from 'react';
import {Card, Icon, Button} from 'semantic-ui-react'
import './User.css'

import faker from 'faker';

export default class UserComponent extends Component {

	render = ()=> {
		const extra = (
			<a><Icon name="bicycle"/>23 rides</a>
		);
		return (
			<div className="ui container fluid">
				<Card className="centered User-card-text"
							header={faker.name.findName()}
							meta="Rider"
							extra={extra}
				/>
				<Card.Group className="centered">


					<NetworkConnectCard name="Google"
															buttonColor="google plus"
															icon="google"/>

					<NetworkConnectCard name="Apple Healthkit"
															buttonColor="black"
															icon="apple"/>

					<NetworkConnectCard name="Strava"
															buttonColor="orange"/>

					<NetworkConnectCard name="Fibit"
															buttonColor="grey"/>

					<NetworkConnectCard name="Jawbone"
															buttonColor="teal"/>

					<NetworkConnectCard name="Facebook"
															buttonColor="facebook"
															icon="facebook"/>

				</Card.Group>

			</div>
		)
	}
}

class NetworkConnectCard extends Component {

	render = ()=> {
		return (
			<Card>
				<Card.Content>
					<Card.Header>
						{this.props.name}
					</Card.Header>
					<Card.Meta>
						Connect {this.props.name}
					</Card.Meta>
					<Card.Description>
						Enable data to be fetched from {this.props.name} over to Come Spin to get competitive and make it more fun.
					</Card.Description>
				</Card.Content>
				<Card.Content extra>
					<div className="ui User-card-text">
						<Button color={this.props.buttonColor}>
							{this.props.icon ? <Icon name={this.props.icon}/> : null} Connect
						</Button>
					</div>
				</Card.Content>
			</Card>
		);

	}
}