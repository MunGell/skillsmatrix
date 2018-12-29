import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, browserHistory, Switch } from 'react-router-dom';
import Table from './table/table.js';
import Profile from './profile/profile.js';
import Search from './search/search.js';

class App extends Component {
	render() {
		return (
            <Router>
                <div className="contain">
                    <Switch>
                        <Route exact={true} path="/(|table)" render={(props) => (
                            <Table {...props} />
                        )}/>
                        
                        <Route exact={true} path="/profile" render={(props) => (
                            <Profile {...props} />
                        )}/>

                        <Route exact={true} path="/search" render={(props) => (
                            <Search {...props} />
                        )}/>
                    </Switch>
                </div>
            </Router>
        );
	}
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);