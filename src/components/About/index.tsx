import Aos from 'aos'
import chris from 'assets/images/chris.jpg'
import React, {useEffect} from 'react'
import {Col, Container, Image, Row} from 'react-bootstrap'

/**
 * About section.
 * @return React components
 */
export const About: React.FC = () => {
  useEffect(() => {
    Aos.init({duration: 800, easing: 'ease-in-sine', once: true})
  })
  return (
    <section className="py-4">
      <Container className="d-flex flex-column align-items-center justify-content-center">
        <h1 className="text-dark text-uppercase family-semi pb-2 mb-0" data-aos="flip-up">
          About
        </h1>
        <Row className="align-items-center">
          <Col className="d-flex justify-content-center py-2" data-aos="fade-right" md={6} sm={12}>
            <Image fluid rounded alt="Chris Carrillo" className="w-50" src={chris} />
          </Col>
          <Col data-aos="fade-left" md={6} sm={12}>
            <p>I&apos;m Chris, a software engineer based in Dallas, Texas.</p>
            <p>
              I am a coffee lover and enneagram enthusiast that is passionate about the ins and outs
              of applications that you see on the web. That includes front-end libraries and
              frameworks, back-end API&apos;s, and relational and non-relational databases.
            </p>
            <p>
              After graduating from California Baptist University with a Bachelor of Science in
              Software Engineering, I moved to Dallas and started my career as a software engineer,
              creating intentional and meaningful applications.
            </p>
            <p>Just a few of my favorite technologies:</p>
            <Row>
              <Col className="pl-0" md={4} sm={12}>
                <ul>
                  <li>React</li>
                  <li>Angular</li>
                  <li>Gatsby</li>
                </ul>
              </Col>
              <Col className="pl-0" md={4} sm={12}>
                <ul>
                  <li>Commerce.js</li>
                  <li>C#</li>
                  <li>Java</li>
                </ul>
              </Col>
              <Col className="pl-0" md={4} sm={12}>
                <ul>
                  <li>SQL Server</li>
                  <li>Firebase</li>
                  <li>Azure</li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
