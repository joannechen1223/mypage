import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import Header from './Header';
import Hompage from './Homepage';

class MypageApp extends Component {
  
  render() {
    return (
      <div className="mypageApp">
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" render={() => (<Hompage />)} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default withRouter(MypageApp);