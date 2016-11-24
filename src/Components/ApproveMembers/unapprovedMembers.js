/**
 * Created by rs on 19/11/16.
 */

import React, {Component} from 'react'
import {Table, Image, Button, Dropdown} from 'semantic-ui-react'
import {List} from 'immutable'
import {bindActionCreators} from 'redux';

import {connect} from 'react-redux'
import {fetchMappableMembers, approveUser, getMappableUsersLike} from '../../ActionCreators/users'

class UnApprovedMembers extends Component {

	state = {};

	componentWillMount() {
		this.props.fetchMappableMembers();
	}

	approveClicked(memberId) {
		if (this.state[memberId] && this.state[memberId].value) {
			this.props.approveUser(memberId, this.state[memberId].value);
		} else {
			this.setState({[memberId]: {valid: false}});
			console.log('approve clicked: ' + JSON.stringify(this.state));
		}
	};

	getMappableMembersAsOptions() {
		const arr = this.props.mappableMembers ? this.props.mappableMembers.map((member)=> {
			return {
				text: member.firstName,
				value: member._id
			}
		}) : [];
		return List.isList(arr) ? List.of(...arr).toArray() : [];
	};

	handleMappedUserChange(memId, event, optionSelected) {
		this.setState({[memId]: {value: optionSelected.value, valid: true}})
	}

	handleSearchChange(e, value) {
		this.props.getMappableUsersLike(value);
	}

	isDropDownError(memberId) {
		console.log('this.state.iserror:' + JSON.stringify(this.state));
		const isError = this.state[memberId] ? !this.state[memberId].valid : false;
		console.log('isError: ' + isError);
		return isError;
	}

	render() {

		const {unapprovedUsers} = this.props;
		return (unapprovedUsers) ?
			(
				<Table celled>
					<Table.Body>
						{ unapprovedUsers.map(
							member=> {
								const memberId = member._id;
								return (
									<Table.Row key={memberId}>
										<Table.Cell>{member.firstName + ' ' + member.lastName}</Table.Cell>
										<Table.Cell><Image avatar src={member.social[0].photoUrl}/></Table.Cell>
										<Table.Cell>
											<Dropdown
												fluid
												selection
												search={true}
												onSearchChange={this.handleSearchChange.bind(this)}
												value={this.state[memberId] ? this.state[memberId].value : null}
												multiple={false}
												options={this.getMappableMembersAsOptions()}
												placeholder='Map Users'
												error={this.isDropDownError.call(this, memberId)}
												onChange={this.handleMappedUserChange.bind(this, memberId)}
											/>
										</Table.Cell>
										<Table.Cell>
											<Button primary
															onClick={this.approveClicked.bind(this, memberId)}>Approve</Button>
										</Table.Cell>

									</Table.Row>
								)
							}
						)}
					</Table.Body>
				</Table>)
			: null;
	}
}


const mapStateToProps = (state)=> {
	return {
		unapprovedUsers: state.default.get('unapprovedUsers'),
		mappableMembers: state.default.get('mappableMembers')
	}
};

const mapDispatchToProps = (dispatch)=> {
	return bindActionCreators({fetchMappableMembers, approveUser, getMappableUsersLike}, dispatch);
};

const UnApprovedMemberTable = connect(mapStateToProps, mapDispatchToProps)(UnApprovedMembers);
export default UnApprovedMemberTable;