import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Home from '../home/home';
import About from '../about/about';
import Projects from '../projects/projects';
import Contact from '../contact/contact';

export class Navigation extends Component {
  render () {
    return (
      <div>
        <Container className='p-0' fluid={true}>
          <Router>
            <div className='banner'>
              <Navbar inverse fluid bg="dark">
                <Navbar.Brand id="initials">AK</Navbar.Brand>
                <Navbar.Collapse id="navbar-toggle" >
                  <Nav mr="auto">
                    <Link className='nav-link' to='/'>Home </Link>
                    <Link className='nav-link' to='/about'>About </Link>
                    <Link className="nav-link" to="/projects">Projects </Link>
                    <Link className="nav-link" to="/contact">Contact</Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
            <Switch>
              <Route path="/" exact component={ Home } />
              <Route path="/about" exact component={ About } />
              <Route path="/projects" exact component={ Projects } />
              <Route path="/contact" exact component= { Contact } />
            </Switch>
          </Router>
        </Container>
      </div>
    );
  }
}

export default Navigation;
