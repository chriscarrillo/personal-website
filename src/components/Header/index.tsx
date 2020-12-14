import styles from 'components/Header/Header.module.scss'
import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

/**
 * Main header.
 * @return React component
 */
export const Header: React.FC = () => (
  <header className={`text-uppercase ${styles.header}`}>
    <Navbar collapseOnSelect bg="dark" expand="md" sticky="top" variant="dark">
      <Navbar.Brand exact as={NavLink} to="/">
        Chris Carrillo
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link exact activeClassName="text-primary" as={NavLink} to="/">
            Projects
          </Nav.Link>
          <Nav.Link exact activeClassName="text-primary" as={NavLink} to="/about">
            About
          </Nav.Link>
          <Nav.Link exact activeClassName="text-primary" as={NavLink} to="/contact">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
)
