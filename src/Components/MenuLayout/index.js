/**
 * Created by rs on 11/10/16.
 */

import React, {Component} from 'react';
import {Menu, Icon} from 'semantic-ui-react';

export default class MenuLayout extends Component {

	state = {};

	handleItemClick = (e, {name})=> {
		this.setState({activeItem: name});
		this.props.history.push(name === 'home' ? '/' : name);
	};

	render() {
		const {activeItem} = this.state;

		return (
			<div className="ui fluid">
				<Menu>
					<Menu.Item icon><Icon circular inverted name="user" color='blue'/></Menu.Item>
					<Menu.Item name="home" onClick={this.handleItemClick} active={activeItem === 'home'} icon>
						<Icon name="home" color='blue' circular inverted/></Menu.Item>
					<Menu.Item name="record-session" onClick={this.handleItemClick} active={activeItem === 'record-session'} icon>
						<Icon circular inverted name="record" color='blue'/></Menu.Item>
					<Menu.Item name="Members" onClick={this.handleItemClick} active={activeItem === 'members'} icon>
						<Icon circular inverted name="users" color='blue'/>
					</Menu.Item>
					<Menu.Item name="Feedback" onClick={this.handleItemClick} active={activeItem === 'feedback'} icon>
						<Icon circular inverted name="thumbs up" color='blue'/>
					</Menu.Item>
					<Menu.Menu position='right'>
						<Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick}/>
					</Menu.Menu>
				</Menu>
				{this.props.children}
			</div>)
	}

}