import React, { Component } from 'react';

import ProjectDetails from '../projectDetails/projectDetails';
import './projects.css';

export class Projects extends Component {
  render () {
    return (
      <div className="title-text">
        <h1>Projects</h1>
        <ProjectDetails />
        <p>All projects can be found on github</p>
      </div>
    );
  }
}

export default Projects;
