import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Login from './Login';
import Sigup from './Signup';

class AuthPage extends Component {
    state = {
        authType: 'login'
    }

    handleLogin = () => {
        this.setState((prevState) => ({
            authType: prevState.authType === 'login' ? 'signup' : 'login'
        }))
    }

    renderAuth = () => {
        const { authType } = this.state;
        const { handleAuth } = this.props;
        if (authType === 'login') {
            return <Login handleAuth={handleAuth} handleLogin={this.handleLogin} />
        }

        return <Sigup handleAuth={handleAuth} handleLogin={this.handleLogin}/>
    }
    render() {

        return (
            <div className="auth-box">
                {this.renderAuth()}
            </div>
        )
    }
};

AuthPage.propTypes = {
    handleAuth: PropTypes.func.isRequired
}

export default AuthPage;
