/**
 * Created by rs on 31/10/16.
 */
import React, {Component} from 'react'
import {Card, Button, Icon} from 'semantic-ui-react'

export default class NetworkConnectCard extends Component {

	render = ()=> {

		const {name, icon, buttonColor, href} = this.props;
		return (
			<Card>
				<Card.Content>
					<Card.Header>
						{name}
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
						<a href={href}>
							<Button color={buttonColor}>
								{icon ? <Icon name={icon}/> : null} Connect
							</Button>
						</a>
					</div>
				</Card.Content>
			</Card>
		);

	}
}
