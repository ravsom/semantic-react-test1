/**
 * Created by rs on 11/10/16.
 */

import React, {Component} from 'react';
import {Dropdown, Image, Menu, Icon, Header} from 'semantic-ui-react';
import axios from 'axios'
import './menu-layout.css'

import faker from 'faker';

export default class MenuLayout extends Component {

	triggerAccount = (
		<span>
			<Image avatar src={faker.internet.avatar()}/> <label>{faker.name.findName()}</label>
		</span>
	);

	triggerSessions = (
		<span>Sessions</span>
	);

	redirectRequest = (name, e)=> {
		this.props.history.push(name)
	};

	handleLogout = (e)=> {
		axios.post('/api/logout').then((json)=> {
			console.log('menu handle logout -> ' + json);
		}).catch((error)=> {
			console.log('error while logging out' + JSON.stringify(error));
		});
	};

	render() {
		return (
			<div className="ui">
				<Menu className="ui stackable">
					<Menu.Menu className="ui container">
						<Menu.Item header>
							<Header as="h2"><Icon name="bicycle"/>Come Spin</Header>
						</Menu.Item>
					</Menu.Menu>
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
							<Dropdown trigger={this.triggerAccount} pointing="top left" icon={null}>
								<Dropdown.Menu>
									<Dropdown.Item text='Account' icon='user' onClick={this.redirectRequest.bind(this, 'user-profile')}/>
									<Dropdown.Item text='Settings' icon='settings' onClick={this.redirectRequest.bind(this, 'settings')}/>
									<Dropdown.Item text='Sign Out' icon='sign out' onClick={this.handleLogout}/>
								</Dropdown.Menu>
							</Dropdown>
						</Menu.Item>
					</Menu.Menu>
				</Menu>
			</div>
		)
	}

}