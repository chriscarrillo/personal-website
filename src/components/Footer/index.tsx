import styles from 'components/Footer/Footer.module.scss'
import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import {FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'

/**
 * Main footer.
 * @return React component
 */
export const Footer: React.FC = () => (
  <footer className={`${styles.footer} bg-dark d-flex text-light`}>
    <Container
      className="
      d-flex flex-column align-items-center justify-content-center
    "
    >
      <Row noGutters>
        <Col className="mx-1">
          <a
            className="text-light"
            href="https://www.github.com/chriscarrillo/"
            rel="noreferrer"
            target="_blank"
          >
            <FaGithub className="social-link" size={32}>
              GitHub
            </FaGithub>
          </a>
        </Col>
        <Col className="mx-1">
          <a
            className="text-light"
            href="https://www.linkedin.com/in/chriscarrillo/"
            rel="noreferrer"
            target="_blank"
          >
            <FaLinkedin className="social-link" size={32}>
              LinkedIn
            </FaLinkedin>
          </a>
        </Col>
        <Col className="mx-1">
          <a
            className="text-light"
            href="https://www.instagram.com/chriscarrillo7/"
            rel="noreferrer"
            target="_blank"
          >
            <FaInstagram className="social-link" size={32}>
              Instagram
            </FaInstagram>
          </a>
        </Col>
      </Row>
      <Row noGutters>
        <Col>
          <p className="mb-0 pt-1">
            <span className="text-primary">Chris Carrillo</span> &copy; 2020
          </p>
        </Col>
      </Row>
    </Container>
  </footer>
)
