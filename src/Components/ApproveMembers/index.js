/**
 * Created by rs on 13/11/16.
 */

import React, {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchUnapprovedUsers} from '../../ActionCreators/users'

import UnapprovedMemberTable from './unapprovedMembers'
import {Header} from 'semantic-ui-react'

class ApproveMembers extends Component {

	state = {};

	componentWillMount() {
		this.props.fetchUnapprovedUsers();
	};

	renderMembers(unapprovedUsers) {
		return unapprovedUsers ? (
			<UnapprovedMemberTable/>
		) : null;
	};

	validate() {
		return this.props.unapprovedUsers.every(user=> {
			const retValue = !(typeof this.state[user._id] === 'undefined');
			if (retValue) this.setState({[user._id]: {valid: false}});
			return retValue;
		});
	}

	render() {
		const {unapprovedUsers} = this.props;
		return (
			<div>
				<Header as="h1" className="align-center">Map Users</Header>
				{this.renderMembers(unapprovedUsers)}
			</div>
		);
	}
}

const mapStateToProps = (state)=> {
	return {
		unapprovedUsers: state.default.get('unapprovedUsers')
	}
};

const mapDispatchToProps = (dispatch)=> {
	return bindActionCreators({fetchUnapprovedUsers}, dispatch);
};

const ConnectedApproveMembers = connect(mapStateToProps, mapDispatchToProps)(ApproveMembers);
export default ConnectedApproveMembers;