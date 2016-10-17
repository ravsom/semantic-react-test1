/**
 * Created by rs on 16/10/16.
 */

import React, {Component} from 'react';
import {Card, Icon, Segment, Button} from 'semantic-ui-react'
import './User.css'

import faker from 'faker';

export default class UserComponent extends Component {

	render = ()=> {
		const extra = (
			<a><Icon name="bicycle"/>23 rides</a>
		);
		return (
			<div className="ui container fluid User-container">
				<Card
					header={faker.name.findName()}
					meta="Rider"
					extra={extra}
				/>

				<Segment>
					<Card.Group>
						<Card>
							<Card.Content>
								<Card.Header>
									Facebook
								</Card.Header>
								<Card.Meta>
									Connect to Facebook
								</Card.Meta>
								<Card.Description>
									Connecting with Facebook will help you connect with your friends on the Come-Spin network.
								</Card.Description>
							</Card.Content>
							<Card.Content extra>
								<div className="ui ">
									<Button color='facebook'>
										<Icon name='facebook'/> Connect
									</Button>
								</div>
							</Card.Content>
						</Card>
					</Card.Group>
				</Segment>

			</div>
		)
	}
}