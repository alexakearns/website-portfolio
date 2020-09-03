import React, { Component } from 'react';
// import Card from 'react-bootstrap/Card';

import './projectDetails.css';
import MissionCtrl from './images/Mission-ctrl.png';
import TapedIt from './images/Taped-it.png';

export class ProjectDetails extends Component {
  render () {
    return (
      <div>
        <div>
          <section id="mission-ctrl">
            <div>
              <img src={MissionCtrl} alt="mission ctrl screenshot" className="project-image"></img>
            </div>
            <div className="project-text">
              <h2>Mission Ctrl</h2>
              <p>Still using your mouse in VS Code? Learning shortcuts the hard way? Mission Ctrl is a fun arcade style game to learn VS Code shortcuts. This group project was built using MERN stack.</p>
              <button className="deployed-link" href="http://mission-ctrl.surge.sh/">Play Mission Ctrl here</button>
              <button className="deployed-link" href="https://github.com/hturnbull93/mission-ctrl-api-node">Github Repo</button>
            </div>
          </section>
          <section id="taped-it">
            <div>
              <img src={TapedIt} alt="taped it screenshot" className="project-image"></img>
            </div>
            <div className="project-text">
              <h2>Taped It</h2>
              <p>Slack extension to send voice notes to your colleagues. Group project using Typescript, React, GraphQL, AWS and MongoDB.</p>
              <button className="deployed-link" href="https://tapedit.netlify.app/">Go to Taped-It</button>
              <button className="deployed-link" href="https://github.com/voice-notes">Github Repo</button>
            </div>
          </section>
          <section id="bank-test">
            <div>
              <img src={TapedIt} alt="taped it screenshot" className="project-image"></img>
            </div>
            <div className="project-text">
              <h2>Banking Tech Test</h2>
              <p>The aim of this project is to produce well tested, easy to read and easy to change code that is produced through a structured process using TDD and good object orientated design.</p>
              <button className="deployed-link" href="https://github.com/alexakearns/bank_tech_test">Github Repo</button>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default ProjectDetails;
