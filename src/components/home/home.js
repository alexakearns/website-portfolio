import React, { Component } from 'react';

import './home.css';
import { Links } from '../links/links';

export class Home extends Component {
  render () {
    return (
      <div className="intro-text">
        <div>
          <h1>Alexa Kearns</h1>
          <h3>Full Stack Developer</h3>
        </div>
        <div>
          <Links />
        </div>
      </div>
    );
  }
}

export default Home;
