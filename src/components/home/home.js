import React, { Component } from 'react';

import './home.css';

export class Home extends Component {
  render () {
    return (
      <div>
        <div>
          <h1>Alexa Kearns</h1>
          <h3>Full Stack Developer</h3>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/alexa-kearns/" className="link">LinkedIn</a>
          <a href="https://github.com/alexakearns" className="link">Github</a>
        </div>
      </div>
    );
  }
}

export default Home;
