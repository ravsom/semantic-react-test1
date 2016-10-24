/**
 * Created by rs on 11/10/16.
 */

import React, {Component} from 'react';
import Menu from '../MenuLayout'

import './Main.css'
export default class MainLayout extends Component {

	render() {
		return (
			<div className="ui Main-top-layout">
				<Menu {...this.props}/>
				<div className="ui container Main-content-layout">
					<div className="ui">
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
}