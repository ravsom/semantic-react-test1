/**
 * Created by rs on 11/10/16.
 */
import React, {Component} from 'react';
import axios from 'axios'

import {Table, Header, Image, Button} from 'semantic-ui-react'
import './members.css';

import faker from 'faker';

export default class Members extends Component {

	fetchMembers = ()=> {

		const _this = this;
		_this.serverRequest = axios.get('/api/users').then((response)=> {
			_this.setState({members: response.data});
		}).catch((err) => {
			console.log('error is ' + err);
		});
	};

	componentDidMount = ()=> {
		this.fetchMembers();
	};

	componentWillUnmount = ()=> {
		this.serverRequest.abort();
	};

	createTableRow = (member) => {
		return (

			<Table.Row key={member._id}>
				<Table.Cell>
					<Header as='h4' image>
						<Image src={faker.internet.avatar()} shape='rounded' size='mini'/>
						<Header.Content>{member.firstName + " " + member.lastName}</Header.Content>
					</Header>
				</Table.Cell>
				<Table.Cell>
					22
				</Table.Cell>
			</Table.Row>
		)
	};

	render() {
		const members = this.state && this.state.members ? this.state.members : null;
		return (
			<div className="ui">
				<Header as="h1" className="align-center">
					Members
				</Header>
				{members ?
					<div className="ui container align-center">
						<Table celled selectable className="members-table">
							<Table.Header>
								<Table.Row>
									<Table.HeaderCell>Name</Table.HeaderCell>
									<Table.HeaderCell>Whatsapp</Table.HeaderCell>
								</Table.Row>
							</Table.Header>

							<Table.Body>
								{members.map(member=>this.createTableRow(member))}
							</Table.Body>
						</Table>
					</div>
					: null
				}

				<div className="ui container align-center Main-content-layout">
					<a href="http://localhost:3333/api/auth/facebook">
						<Button className="primary" icon="add user"/>
					</a>
				</div>
			</div>
		)
	}
}