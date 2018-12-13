import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Table from './table.js';

class App extends Component {
	render() {
		return (
            <div>
            	<Table />
            </div>
        );
	}
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);