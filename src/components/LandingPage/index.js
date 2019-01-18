import React, { Component } from 'react';

import AuthPage from '../AuthPage';

class LandingPage extends Component {
  handleAuth = () => {
    const { history } = this.props;
    history.push('/table');
  };
  render() {
    return (
      <div className="lp-layout">
        <AuthPage handleAuth={this.handleAuth} />
      </div>
    );
  }
}

export default LandingPage;
