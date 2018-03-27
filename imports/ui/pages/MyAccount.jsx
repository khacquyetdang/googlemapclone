import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Redirect} from 'react-router-dom';

import {Template} from 'meteor/templating';
import {Card, Row, Col, Button} from 'react-materialize';
import Blaze from 'meteor/gadicc:blaze-react-component';
import {Accounts, STATES} from 'meteor/std:accounts-ui';
import {User} from '../../api/User';
import {Places} from '../../api/Places';
import MyPlaceList from '../components/MyPlaceList/MyPlaceList';
import {withTracker} from 'meteor/react-meteor-data';
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
    openInNewTab(url) {
        let win = window.open(url, '_blank');
    }

    render() {
        if (!this.props.currentUser) {
            return <Redirect push to="/"/>

        }
        return (
            <Row>
                <Col s={12} m={6} offset="m3">
                    <MyPlaceList 
                    onItemClick={this.openInNewTab}
                    places={this.props.myplaces}/>
                    <Card>
                        <Accounts.ui.LoginForm formState={STATES.PROFILE} user={User.get()}/>
                    </Card>
                </Col>
            </Row>
        );
    }
}
export default withTracker(() => {
    Meteor.subscribe('placesByUserId');

    return {
        myplaces: Places
            .find({})
            .fetch(),

        currentUser: User.get()
    };
})(MyAccount);