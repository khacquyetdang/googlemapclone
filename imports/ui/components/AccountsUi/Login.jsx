import React, {Component} from 'react';
import {
    Navbar,
    NavItem,
    Row,
    Col,
    Button,
    Icon,
    Card,
    Input
} from 'react-materialize';
import './index.scss';

export default class Login extends Component {

    render() {
        return (
            <div className="container">
                <Row>
                    <Col m={6} offset="m3" s={12}>
                        <form>
                            <Card>
                                <Row>
                                    <Input s={12} label="Email" ref="email">
                                        <Icon>email</Icon>
                                    </Input>

                                    <Input s={12} label="Password" type="password">
                                        <Icon>lock</Icon>
                                    </Input>
                                    <div className="forgotPassContainer right-align">

                                        <label className="waves-effect waves-teal">
                                            <a className='pink-text'>
                                                <b>Forgot password?</b>
                                            </a>
                                        </label>
                                    </div>
                                    <div className="btnContainer right-align">
                                        <Button waves='light'>Send<Icon right>send</Icon></Button>
                                    </div>
                                </Row>
                            </Card>
                        </form>
                    </Col>
                </Row>
            </div>
        );
    }
}