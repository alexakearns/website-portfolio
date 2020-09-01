import React, { Component } from 'react';

import Links from '../links/links';

export class Contact extends Component {
  render () {
    return (
      <div className="title-text">
        <h1>Get in touch!</h1>
        <Links />
      </div>
    );
  }
}

export default Contact;
