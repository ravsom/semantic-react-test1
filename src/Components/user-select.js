/**
 * Created by rs on 11/10/16.
 */

import React, {Component} from 'react'
import {Grid, Segment, Input, List, Image, Label, Header} from 'semantic-ui-react'

export default class UserSelect extends Component {

	render() {
		return (
			<Segment raised>
				<Header as='h3'>Attendance</Header>
				<Grid columns={2} relaxed>
					<Grid.Column>
						<Input name='nameSearch' placeholder='Search...'/>
						<Segment basic>
							<List selection divided verticalAlign='middle'>
								<List.Item>
									<Image avatar src='http://semantic-ui.com/images/avatar/small/helen.jpg'/>
									<List.Content>
										<List.Header>Helen</List.Header>
									</List.Content>
								</List.Item>
								<List.Item>
									<Image avatar src='http://semantic-ui.com/images/avatar/small/christian.jpg'/>
									<List.Content>
										<List.Header>Christian</List.Header>
									</List.Content>
								</List.Item>
								<List.Item>
									<Image avatar src='http://semantic-ui.com/images/avatar/small/daniel.jpg'/>
									<List.Content>
										<List.Header>Daniel</List.Header>
									</List.Content>
								</List.Item>
								<List.Item>
									<Image avatar src='http://semantic-ui.com/images/avatar/small/daniel.jpg'/>
									<List.Content>
										<List.Header>Daniel</List.Header>
									</List.Content>
								</List.Item>
								<List.Item>
									<Image avatar src='http://semantic-ui.com/images/avatar/small/daniel.jpg'/>
									<List.Content>
										<List.Header>Daniel</List.Header>
									</List.Content>
								</List.Item>
								<List.Item>
									<Image avatar src='http://semantic-ui.com/images/avatar/small/daniel.jpg'/>
									<List.Content>
										<List.Header>Daniel</List.Header>
									</List.Content>
								</List.Item>
							</List>
						</Segment>
					</Grid.Column>
					<Grid.Column>
						<Segment basic>
							<Label as='a'>
								Attendees
								<Label.Detail>22</Label.Detail>
							</Label>
							<List selection divided verticalAlign='middle'>
								<List.Item>
									<Image avatar src='http://semantic-ui.com/images/avatar/small/helen.jpg'/>
									<List.Content>
										<List.Header>Helen</List.Header>
									</List.Content>
								</List.Item>
								<List.Item>
									<Image avatar src='http://semantic-ui.com/images/avatar/small/christian.jpg'/>
									<List.Content>
										<List.Header>Christian</List.Header>
									</List.Content>
								</List.Item>
							</List>
						</Segment>
					</Grid.Column>
				</Grid>
			</Segment>
		);
	}
}