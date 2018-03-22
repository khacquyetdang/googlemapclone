import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {Template} from 'meteor/templating';
import {Card, Row, Col, Button} from 'react-materialize';
import Blaze from 'meteor/gadicc:blaze-react-component';
import {Accounts, STATES} from 'meteor/std:accounts-ui';
import {User} from '../../../api/User';
// Accounts.config({sendVerificationEmail: false, forbidClientAccountCreation:
// false});


class MyAccount extends React.Component
{

    constructor() {
        super();
        this.state = {
            formState: STATES.PROFILE
        }
    }

    render() {
        return (
            <Row>
                <Col s={12} m={6} offset="m3">
                    <Card>
                        {/*<Blaze template="atForm" state="changePwd"/> */}
                        {/*<Accounts.ui.LoginForm formState={STATES.PASSWORD_CHANGE}/> */}
                        <Accounts.ui.LoginForm formState={STATES.PROFILE} user={User.get()}/>

                    </Card>
                </Col>
            </Row>
        );
    }
}
export default MyAccount;