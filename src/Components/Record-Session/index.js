/**
 * Created by rs on 11/10/16.
 */

import React, {Component} from 'react'
import {Header, Icon, Form, Label, Button, Message, Grid, Modal, Input} from 'semantic-ui-react'
import {connect} from 'react-redux'
import AttendanceSelector from '../Attendance-Selector'
import {bindActionCreators} from 'redux'
import {addUser} from '../../ActionCreators/users'

import './record-session.css'

class RecordSession extends Component {
	state = {serializedForm: {}, userName: ''};

	handleSubmit = (e, serializedForm) => {
		e.preventDefault();
		this.setState({serializedForm})
	};


	addUser = (e)=> {
		e.preventDefault();
		this.props.addUser(this.state.userName, this.state.userNumber);
	};

	handleChange = (e)=> {
		this.setState({[e.target.name]: e.target.value});
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

					<Button.Group>
						<Button className='ui align-center' primary type='submit'>Submit</Button>
						<Modal trigger={<Button secondary>Add</Button>}>
							<Modal.Header>Add a Member</Modal.Header>
							<Modal.Content >
								<Modal.Description>
									<Form>
										<Input placeholder="User name" name="userName"
													 onChange={this.handleChange}/>
										<Input placeholder="Phone Number" name="userNumber"
													 onChange={this.handleChange}/>
										<Button primary onClick={this.addUser}>Add</Button>
									</Form>
								</Modal.Description>
							</Modal.Content>
						</Modal>
					</Button.Group>
					<Message>
						<pre>serializedForm: {JSON.stringify(serializedForm, null, 2)}</pre>
					</Message>
				</Form>
			</div>
		)
	}
}

const mapStateToProps = (state)=> {
	return {
		userAdded: state.userAdded,
		userNotAdded: state.userNotAdded
	};
};

const mapDispatchToProps = (dispatch)=> {
	return bindActionCreators({addUser}, dispatch)
};


const ConnecteddRecordSession = connect(mapStateToProps, mapDispatchToProps)(RecordSession);
export default ConnecteddRecordSession;