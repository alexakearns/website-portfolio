import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/home.js';

import './app.css';

export class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={ Home } />
        </Switch>
      </Router>

    );
  }
}

export default App;
