import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './Home';
import Liked from './Liked';
import Navigation from './Navigation';

const blockName = 'app';
class App extends Component {
  render() {
    return (
        <Router>
          <div className={`${blockName}__container`}>
            <Navigation />
            <Switch>
              <Route path="/liked">
                <Liked />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </div>        
        </Router>
    );
  }
}

export default App;