import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from '../components/Header/Header';
import MyFooter from '../components/MyFooter/MyFooter';
import Home from '../pages/Home.jsx';
import NotFound from '../pages/NotFound.jsx';
import AccountsUiWrapper from '../components/AccountsUi/AccountsUIWrapper';
import MyAccount from '../pages/MyAccount';

import Register from '../components/AccountsUi/Register.jsx';

export default class MainLayout extends React.Component {
  render() {
    return (
      <Router>
        <div className="main">
          <Header/>
          <main>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path="/signin" component={AccountsUiWrapper}/>
              <Route path="/myaccount" component={MyAccount}/>
              <Route component={NotFound}/>
            </Switch>
          </main>
          <MyFooter/>
        </div>
      </Router>
    )
  }
}
