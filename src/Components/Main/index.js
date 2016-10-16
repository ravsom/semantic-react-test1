/**
 * Created by rs on 11/10/16.
 */

import React, {Component} from 'react'
import './Main.css'
export default class MainLayout extends Component {
	render() {
		return (
			<div className="Main-layout">
				{this.props.children}
			</div>
		);
	}
}