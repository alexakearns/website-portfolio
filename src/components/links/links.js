import React, { Component } from 'react';
import Linkedin from '../../images/linkedin_logo.png';
import Github from '../../images/github_logo.png';

import './links.css';

export class Links extends Component {
  render () {
    return (
      <div>
        <a href="https://www.linkedin.com/in/alexa-kearns/" className="link">
          <img src={Linkedin} alt="linkedin" />
        </a>
        <a href="https://github.com/alexakearns" className="link">
          <img src={Github} alt="github" />
        </a>
      </div>
    );
  }
}
