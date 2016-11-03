/**
 * Created by rs on 16/10/16.
 */

import React, {Component} from 'react';
import {Card, Icon} from 'semantic-ui-react'
import './User.css'
import AccountCardGroup from '../AccountCardGroup/index'

export default class UserComponent extends Component {

	render = ()=> {
		const extra = (
			<a><Icon name="bicycle"/>23 rides</a>
		);
		return (
			<div className="ui container fluid">
				<Card className="centered User-card-text"
							meta="Rider"
							extra={extra}
				/>
				<AccountCardGroup/>
			</div>
		)
	}
}

