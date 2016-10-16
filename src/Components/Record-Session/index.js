/**
 * Created by rs on 11/10/16.
 */

import React, {Component} from 'react'
import {Header, Icon, Form, Label, Segment, Button, Message} from 'semantic-ui-react'

import UserSelect from '../UserSelect'
export default class RecordSession extends Component {
	state = {serializedForm: {}};

	handleSubmit = (e, serializedForm) => {
		e.preventDefault()
		this.setState({serializedForm})
	};


	render() {
		const {serializedForm} = this.state;
		return (
			<div className="ui fluid">
				<Header as='h2'>
					<Icon name='table'/>
					<Header.Content>
						Record Session
					</Header.Content>
				</Header>
				<Segment>
					<Label as="a" color='red' tag>Gold's Gym, RMZ Infinity</Label>
					<Label as="a" color='teal' tag>11th October 2016</Label>
					<Label as="a" color='yellow' tag>7 PM</Label>
				</Segment>
				<Form onSubmit={this.handleSubmit}>
					<UserSelect/>

					<Button className='ui centered' primary type='submit'>Submit</Button>
					<Message>
						<pre>serializedForm: {JSON.stringify(serializedForm, null, 2)}</pre>
					</Message>
				</Form>
			</div>
		)
	}
}