import 'babel-polyfill';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Table from './table/table.js';
import Profile from './profile/profile.js';
import Search from './search/search.js';
import LandingPage from './components/LandingPage';
import './styles/styles.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route
              exact={true}
              path="/table"
              render={props => <Table {...props} />}
            />
            <Route
              exact={true}
              path="/profile"
              render={props => <Profile {...props} />}
            />

            <Route
              exact={true}
              path="/profile"
              render={props => <Profile {...props} />}
            />

            <Route
              exact={true}
              path="/search"
              render={props => <Search {...props} />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
