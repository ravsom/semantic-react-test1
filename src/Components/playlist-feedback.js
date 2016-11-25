/**
 * Created by rs on 12/10/16.
 */

import React, {Component} from 'react'
import {Header, Table} from 'semantic-ui-react'
export default class PlayListFeedback extends Component {
	render() {
		return (
			<div>
				<Header as="huge">Playlist Feedback</Header>
				<Table celled padded>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell singleLine>Listen</Table.HeaderCell>
							<Table.HeaderCell>Track</Table.HeaderCell>
							<Table.HeaderCell>Good?</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
				</Table>
			</div>
		);
	}
}