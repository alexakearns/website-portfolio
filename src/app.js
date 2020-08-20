import React, { Component } from 'react';
import Intro from './components/intro';

import './app.css';

export class App extends Component {
  render () {
    return (
      <div className="intro-text">
        <Intro />
      </div>
    );
  }
}

export default App;
