/**
 * Created by rs on 12/10/16.
 */
import React, {Component} from 'react';
import {Header, Icon, Segment, Rating, Form, Grid} from 'semantic-ui-react'
import PlaylistFeedback from './playlist-feedback'

export default class SessionFeedback extends Component {
	render() {
		return (
			<div className="ui fluid container">
				<Header as="h2" className="ui centered"><Icon name="thumbs up"/>Feedback</Header>
				<Grid className="ui centered">
					{/*Rate the class*/}
					<Segment>
						<Form>
							{/*How was the workout today - Easy, Moderate, Intense*/}

							<Form.Group inline>
								<label>How did you like the workout today?</label>
								<Rating label='How was your workout today?' icon='star' defaultRating={5} maxRating={5} size='huge'/>
							</Form.Group>
							{/*Playlist*/}

							<PlaylistFeedback/>

							{/*Anything you'd like to let the instructor know*/}
						</Form>
					</Segment>
				</Grid>
			</div>
		);
	}
}