import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './Home';
import Liked from './Liked';
import Navigation from './Navigation';

class App extends Component {
  render() {
    return (
        <Router>
          <Navigation />
          <Switch>
            <Route path="/liked">
              <Liked />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
    );
  }
}

export default App;