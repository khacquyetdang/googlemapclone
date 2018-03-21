import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Accounts} from 'meteor/std:accounts-material';

export default class AccountsUI extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card">
                        <Accounts.ui.LoginForm formState={this.props.formState}/>
                    </div>
                </div>
            </div>
        )
    }
}