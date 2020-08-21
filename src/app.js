import React, { Component } from 'react';
import Home from './components/home/home.js';

import './app.css';

export class App extends Component {
  render () {
    return (
      <div className="intro-text">
        <Home />
      </div>
    );
  }
}

export default App;
