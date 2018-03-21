import React, {Component} from 'react';
import {Navbar, NavItem, Row, Icon, Card} from 'react-materialize';
import Button from 'react-materialize/lib/Button';

export default class Register extends Component {

    render() {
        return (
            <div className="container">
                <Card>
                    <Row>
                        <form className="col s12">
                            <Row>
                                <Row>
                                    <Input s={12} label="Email" ref="email">
                                        <Icon>email</Icon>
                                    </Input>
                                </Row>

                                <Row>
                                    <Input s={12} label="Password" type="password"/>
                                </Row>
                                <Row>
                                    <Input s={12} label="Confirm Password" type="password"/>
                                </Row>

                                <Row>
                                    <Button waves='light'>Register</Button>
                                    <Button waves='light'>Login</Button>
                                </Row>
                            </Row>
                        </form>
                    </Row>
                </Card>
            </div>
        );
    }
}