import React, {Component} from 'react';
import './App.css';
import {Button, Icon} from 'semantic-ui-react';
class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<h2>Welcome to React</h2>
				</div>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				<Button primary>
					<Icon name="download"/>
					Download
				</Button>
			</div>
		);
	}
}

export default App;
