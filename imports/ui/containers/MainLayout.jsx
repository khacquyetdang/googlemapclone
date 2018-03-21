import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from '../components/Header/Header';
import Home from '../pages/Home.jsx';
import NotFound from '../pages/NotFound.jsx';
import {Accounts, STATES} from 'meteor/std:accounts-material';
import Login from '../components/AccountsUi/Login.jsx';
import Register from '../components/AccountsUi/Register.jsx';
import AccountsUI from '../components/AccountsUi/index.jsx';
Accounts
  .ui
  .config({passwordSignupFields: 'EMAIL_ONLY'});

class SignUp extends React.Component {
  render() {
    return (
      <div>
        SignUp
      </div>
    )
  }
};
export default class MainLayout extends React.Component {
  render() {
    return (
      <Router>
        <div className="main">
          <Header/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path="/signin" component={Login}/>
            <Route path="/signup" component={Register}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </Router>
    )
  }
}
