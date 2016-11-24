/**
 * Created by rs on 11/10/16.
 */

import React, {Component} from 'react';
import Menu from '../MenuLayout'
import {connect} from 'react-redux'
import {getAuthenticatedUser} from '../../ActionCreators/auth'

import './Main.css'
class MainLayout extends Component {

	componentWillMount() {
		this.props.dispatch(getAuthenticatedUser());
	};

	render() {
		return (
			<div className="ui Main-top-layout">
				<Menu {...this.props}/>
				<div className="ui container Main-content-layout">
					{this.props.children}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state)=> {
	return {
		authenticatedUser: state.authenticatedUser
	}
};

const ConnectedMainLayout = connect(mapStateToProps)(MainLayout);
export default ConnectedMainLayout;