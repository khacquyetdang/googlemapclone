import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Header from '../components/Header/Header';
import Home from '../pages/Home.jsx';
import NotFound from '../pages/NotFound.jsx';

export default class MainLayout extends React.Component {
  render() {
    return (
      <Router>
        <div className="main">
          <Header/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </Router>
    );
  }
}
