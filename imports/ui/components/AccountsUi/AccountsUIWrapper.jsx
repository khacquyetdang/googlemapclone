import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {Template} from 'meteor/templating';
import {Card, Row, Col} from 'react-materialize';
import Blaze from 'meteor/gadicc:blaze-react-component';
import {Accounts, STATES} from 'meteor/std:accounts-ui';
import {Redirect} from 'react-router-dom';
import {User} from '../../../api/User';
import '../Accounts/index.jsx';
Accounts
    .ui
    .config({
        passwordSignupFields: 'EMAIL_ONLY',
        profilePath: '/profile',
        minimumPasswordLength: 6
    })

class AccountsUIWrapper extends React.Component
{
    constructor() {
        super();
        this.state = {
            loggedIn: User.isLoggedIn()
        }
        this.onSignedIn = this
            .onSignedIn
            .bind(this);
    }
    /*
    componentDidMount() {
        this.view = Blaze.render(Template.atForm, ReactDOM.findDOMNode(this.refs.container));
    }

    componentWillUnmount() {
        Blaze.remove(this.view);
    }*/

    onSignedIn(event) {
        this.setState({loggedIn: true});
    }

    render() {
        if (this.state.loggedIn) {
            return <Redirect push to="/"/>
        }
        return (
            <Row>
                <Col s={12} m={6} offset="m3">
                    <Card>
                        <Accounts.ui.LoginForm onSignedInHook={this.onSignedIn}></Accounts.ui.LoginForm>
                    </Card>
                </Col>
            </Row>
        );
    }
}
export default AccountsUIWrapper;