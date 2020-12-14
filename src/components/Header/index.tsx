import styles from 'components/Header/Header.module.scss'
import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import {Link} from 'react-scroll'

/**
 * Main header.
 * @return React component
 */
export const Header: React.FC = () => (
  <header className="text-uppercase">
    <Navbar
      collapseOnSelect
      bg="dark"
      className={styles.navbar}
      expand="md"
      fixed="top"
      variant="dark"
    >
      <Navbar.Brand exact as={NavLink} to="/">
        Chris Carrillo
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link
            smooth
            spy
            activeClass="text-primary"
            as={Link}
            className={styles.navLink}
            to="home"
          >
            Home
          </Nav.Link>
          <Nav.Link
            smooth
            spy
            activeClass="text-primary"
            as={Link}
            className={styles.navLink}
            to="projects"
          >
            Projects
          </Nav.Link>
          <Nav.Link
            smooth
            spy
            activeClass="text-primary"
            as={Link}
            className={styles.navLink}
            to="about"
          >
            About
          </Nav.Link>
          <Nav.Link
            smooth
            spy
            activeClass="text-primary"
            as={Link}
            className={styles.navLink}
            to="contact"
          >
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
)
