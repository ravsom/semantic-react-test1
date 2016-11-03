/**
 * Created by rs on 11/10/16.
 */

import React, {Component} from 'react';
import {Dropdown, Menu, Icon, Header, Image} from 'semantic-ui-react';
import './menu-layout.css'
import {connect} from 'react-redux'
import {logoutUser} from '../../ActionCreators/userAuthActionCreator'

class MenuLayout extends Component {

	getDisplayName = (user)=> {
		return user.firstName + ' ' + user.lastName;
	};
	triggerAccount = ()=> (
		<span>
			<Image avatar
						 src={this.props.user ? this.props.user.photoUrl : null}/> <label>{this.props.user ? this.getDisplayName(this.props.user) + ' ' : null}</label>
		</span>
	);

	triggerSessions = (
		<span>Sessions</span>
	);

	redirectRequest = (name, e)=> {
		this.props.history.push(name)
	};

	handleLogout = (e)=> {
		this.props.dispatch(logoutUser());
	};

	authenticatedMenu = ()=> {
		return (
			<Menu.Menu position="right" className="ui container">
				<Menu.Item>
					<Dropdown trigger={this.triggerSessions} pointing="top right" icon={null}>
						<Dropdown.Menu>
							<Dropdown.Item text='Record' icon='calendar'
														 onClick={this.redirectRequest.bind(this, 'record-session')}/>
							<Dropdown.Item text='Members' icon='users' onClick={this.redirectRequest.bind(this, 'members')}/>
						</Dropdown.Menu>
					</Dropdown>
				</Menu.Item>
				<Menu.Item>
					Trackers
				</Menu.Item>
				<Menu.Item>
					<Dropdown trigger={this.triggerAccount()} pointing="top left" icon={null}>
						<Dropdown.Menu>
							<Dropdown.Item text='Account' icon='user'
														 onClick={this.redirectRequest.bind(this, 'user-profile')}/>
							<Dropdown.Item text='Settings' icon='settings'
														 onClick={this.redirectRequest.bind(this, 'settings')}/>
							<Dropdown.Item text='Sign Out' icon='sign out' onClick={this.handleLogout}/>
						</Dropdown.Menu>
					</Dropdown>
				</Menu.Item>
			</Menu.Menu>
		)
	};
	getLoginMenuItem = ()=> {
		return (
			<Menu.Menu position="right" className="ui container">
				<Menu.Item onClick={this.redirectRequest.bind(this, 'login')}>
					Login
				</Menu.Item>
			</Menu.Menu>
		)
	};

	render() {
		const {user} = this.props;
		return (
			<div className="ui">
				<Menu className="ui stackable">
					<Menu.Menu className="ui container">
						<Menu.Item header onClick={this.redirectRequest.bind(this, '/')}>
							<Header as="h2"><Icon name="bicycle"/>Come Spin</Header>
						</Menu.Item>
					</Menu.Menu>
					{user ?
						this.authenticatedMenu()
						: this.getLoginMenuItem()}
				</Menu>
			</div>
		)
	}
}

const mapStateToProps = (state)=> {
	var authenticatedUser = state.default.get('authenticatedUser');
	console.log('authenticated user: ' + (authenticatedUser));
	return {
		user: authenticatedUser
	}
};

const ConnectedMenu = connect(mapStateToProps)(MenuLayout);
export default ConnectedMenu