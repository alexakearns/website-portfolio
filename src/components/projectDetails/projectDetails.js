import React, { Component } from 'react';
// import Card from 'react-bootstrap/Card';

import './projectDetails.css';
import MissionCtrl from './images/Mission-ctrl.png';

export class ProjectDetails extends Component {
  render () {
    return (
      <div>
        <div>
          <section id="mission-ctrl">
            <div>
              <img src={MissionCtrl} alt="mission ctrl screenshot" className="project-image"></img>
            </div>
            <h2>Mission Ctrl</h2>
            <p>Still using your mouse in VS Code? Learning shortcuts the hard way? Mission Ctrl is a fun arcade style game to learn VS Code shortcuts. This group project was built using MERN stack.</p>
            <button className="deployed-link" href="http://mission-ctrl.surge.sh/">Play Mission Ctrl here</button>
            <button className="deployed-link" href="https://github.com/hturnbull93/mission-ctrl-api-node">Github Repo</button>
          </section>
        </div>
      </div>
    );
  }
}

export default ProjectDetails;
