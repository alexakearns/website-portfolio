import React, { Component } from 'react';

import Navigation from './components/navigation/navigation';
import './app.css';

export class App extends Component {
  render () {
    return (
      <div>
        <Navigation />
      </div>
    );
  }
}

export default App;
