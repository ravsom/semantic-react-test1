/**
 * Created by rs on 18/10/16.
 */

import React, {Component} from 'react'
import _ from 'lodash'
import faker from 'faker'
import {Dropdown} from 'semantic-ui-react'

const getOptions = () => _.times(3, () => {
	const name = faker.name.findName();
	console.log("name is: " + name);
	return {text: name, value: _.snakeCase(name)}
})
export default class AttendanceSelector extends Component {
	componentWillMount() {
		this.setState({
			isFetching: false,
			multiple: true,
			search: true,
			searchQuery: null,
			value: [],
			options: getOptions(),
		})
	};

	handleChange = (e, {value}) => {
		this.setState({value});
	};
	handleSearchChange = (e, value) => {
		this.setState({searchQuery: value});
	};

	render = ()=> {
		const { options, isFetching, search, value} = this.state;

		return (
			<Dropdown
				fluid
				name='user-selection'
				selection
				multiple
				search={search}
				options={options}
				value={value}
				placeholder='Add Users'
				onChange={this.handleChange}
				onSearchChange={this.handleSearchChange}
				disabled={isFetching}
				loading={isFetching}
				additionPosition='bottom'
				additionLabel=''
			/>
		)
	}
}