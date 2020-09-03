import React, { Component } from 'react';

import ProjectDetails from '../projectDetails/projectDetails';
import './projects.css';

export class Projects extends Component {
  render () {
    return (
      <div>
        <div className="title-text">
          <h1>Projects</h1>
          <ProjectDetails />
          <p>All projects can be found on <a href="https://github.com/alexakearns">Github</a></p>
        </div>
      </div>
    );
  }
}

export default Projects;
