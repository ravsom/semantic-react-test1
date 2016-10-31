/**
 * Created by rs on 11/10/16.
 */
import React, {Component} from 'react'
import {Header, Table, Icon} from 'semantic-ui-react'
import {Form} from 'semantic-ui-react'
import {List} from 'immutable'
import {connect} from 'react-redux'
import {getUserSimiliarTo} from '../../ActionCreators/userManagementActionCreator'

class DefaultLayout extends Component {

	handleTextChange = (e)=> {
		this.props.dispatch(getUserSimiliarTo(e.target.value));
	};

	getSelectedRow = (user)=> {
		return (
			<Table.Row key={user._id}>
				<Table.Cell collapsing>
					<Icon name='user'/> {user.firstName}
				</Table.Cell>
			</Table.Row>
		)
	};

	getSelectedUsersTable = (selectedUsers)=> {
		return (
			<Table>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell>Users</Table.HeaderCell>
					</Table.Row>
				</Table.Header>

				<Table.Body>
					{selectedUsers.map(user=>this.getSelectedRow(user))}
				</Table.Body>
			</Table>
		);
	};

	render() {
		const {mainUser, selectedUsers} = this.props;
		return (
			<div>
				<Header as="h1">
					Default Layout
				</Header>
				{mainUser ? <h2>{mainUser.firstName}</h2> : <h2>NOOOO</h2>}
				<Form>
					<Form.Field>
						<label>Search</label>
						<input placeholder='Search' onChange={this.handleTextChange}/>
					</Form.Field>

					{selectedUsers ?
						this.getSelectedUsersTable(selectedUsers) : null
					}
				</Form>
			</div>
		)
	}
}

const mapStateToProps = (state)=> {
	var mainUser = state.default.get('mainUser');
	var selectedUsers = List(...state.default.get('selectedUsers'));

	return {
		mainUser: mainUser,
		selectedUsers: selectedUsers
	};
};

const DefaultConnectedLayout = connect(mapStateToProps)(DefaultLayout);
export default DefaultConnectedLayout
