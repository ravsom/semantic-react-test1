/**
 * Created by rs on 11/10/16.
 */

import React, {Component} from 'react'
import {Header, Icon, Form, Label, Button, Message, Grid} from 'semantic-ui-react'

import AttendanceSelector from '../Attendance-Selector'
import './record-session.css'

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
				<Grid divided='vertically'>
					<Grid.Row columns={3}>
						<Grid.Column className="align-right"><Label as="a" color='red' tag>Gold's Gym, RMZ
							Infinity</Label></Grid.Column>
						<Grid.Column className="align-center"><Label as="a" color='teal' tag>11th October 2016</Label></Grid.Column>
						<Grid.Column className="align-left"><Label as="a" color='yellow' tag>7 PM</Label></Grid.Column>
					</Grid.Row>
				</Grid>
				<Form onSubmit={this.handleSubmit} id="sessionForm">

					<AttendanceSelector/>
					<Button className='ui align-center' primary type='submit'>Submit</Button>
					<Message>
						<pre>serializedForm: {JSON.stringify(serializedForm, null, 2)}</pre>
					</Message>
				</Form>
			</div>
		)
	}
}