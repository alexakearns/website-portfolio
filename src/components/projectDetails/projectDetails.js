import React, { Component } from 'react';

import './projectDetails.css';
import MissionCtrl from './images/Mission-ctrl.png';
import TapedIt from './images/Taped-it.png';
import BankTest from './images/Bank-test.png';

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
              <a className="deployed-link" href="http://mission-ctrl.surge.sh/">Play Mission Ctrl here</a>
              <a className="deployed-link" href="https://github.com/hturnbull93/mission-ctrl-api-node">Github Repo</a>
            </div>
          </section>
          <section id="taped-it">
            <div>
              <img src={TapedIt} alt="taped it screenshot" className="project-image"></img>
            </div>
            <div className="project-text">
              <h2>Taped It</h2>
              <p>Slack extension to send voice notes to your colleagues. Group project using Typescript, React, GraphQL, AWS and MongoDB.</p>
              <a className="deployed-link" href="https://tapedit.netlify.app/">Go to Taped-It</a>
              <a className="deployed-link" href="https://github.com/voice-notes">Github Repo</a>
            </div>
          </section>
          <section id="bank-test">
            <div>
              <img src={BankTest} alt="taped it screenshot" className="project-image"></img>
            </div>
            <div className="project-text">
              <h2>Banking Tech Test</h2>
              <p>The aim of this project is to produce well tested, easy to read and easy to change code that is produced through a structured process using TDD and good object orientated design.</p>
              <a className="deployed-link" href="https://github.com/alexakearns/bank_tech_test">Github Repo</a>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default ProjectDetails;
