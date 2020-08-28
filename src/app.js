import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Home from './components/home/home';
import About from './components/about/about';
import Projects from './components/projects/projects'
import './app.css';

export class App extends Component {
  render () {
    return (
      <div>
        <Router>
          <div className="banner">
            <Navbar bg="dark">
              <Nav mr="auto">
                <Link className='nav-link' to='/'>Home </Link>
                <Link className='nav-link' to='/about'>About </Link>
                <Link className="nav-link" to="/projects">Projects </Link>
              </Nav>
            </Navbar>
          </div>
          <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/about" exact component={ About } />
            <Route path="/projects" exact component={ Projects } />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
