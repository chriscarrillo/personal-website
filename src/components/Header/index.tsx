import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

/**
 * Main header.
 * @return React component
 */
export const Header: React.FC = () => (
  <header className="full-height" id="menu">
    <Navbar collapseOnSelect bg="dark" expand="lg" variant="dark">
      <Navbar.Brand exact as={NavLink} to="/">
        Chris Carrillo
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link exact activeClassName="text-primary" as={NavLink} to="/projects">
            Projects
          </Nav.Link>
          <Nav.Link exact activeClassName="text-primary" as={NavLink} to="/about">
            About
          </Nav.Link>
          <Nav.Link exact activeClassName="text-primary" as={NavLink} to="/blog">
            Blog
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
)
