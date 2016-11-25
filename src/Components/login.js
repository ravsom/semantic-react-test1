/**
 * Created by rs on 31/10/16.
 */

import React, {Component} from 'react'

import {Header, Segment} from 'semantic-ui-react'
import AccountCardGroup from './account-card-group'
import {connect} from 'react-redux'

class LoginComponent extends Component {

	revealErrorContent = (error)=> {
		return error ? (<Segment inverted color='red'>{error.message}</Segment>) : null;
	};
	render = ()=> {
		const {error} = this.props;
		return (
			<div>
				<Header as="h1">Login</Header>
				{this.revealErrorContent(error)}
				<AccountCardGroup/>
			</div>
		);
	}
}

const mapStateToProps = (state)=> {
	return {
		error: state.default.get('error')
	}
};

const ConnectedLoginComponent = connect(mapStateToProps)(LoginComponent);
export default ConnectedLoginComponent