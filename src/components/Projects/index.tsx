import Aos from 'aos'
import {Divider} from 'common/components/Divider'
import React, {useEffect} from 'react'
import {Card, CardDeck, Col, Container, Row} from 'react-bootstrap'
import {FaExternalLinkAlt, FaGithub} from 'react-icons/fa'
import {MdDeveloperMode} from 'react-icons/md'
import {projects} from './fixtures'

/**
 * Projects section.
 * @return React components
 */
export const Projects: React.FC = () => {
  useEffect(() => {
    Aos.init({duration: 1000, easing: 'ease-in-sine', once: true})
  }, [])

  const projectsRow = projects.map(project => {
    const projectImage =
      project.image.length === 0 ? (
        <div className="p-2 text-center text-light bg-dark">
          <Card.Title>
            <MdDeveloperMode size={40} />
          </Card.Title>
          <Card.Text>This project is still in development.</Card.Text>
        </div>
      ) : (
        <Card.Img alt={project.name} src={project.image} />
      )
    const technologies = project.technologies.map((technology, index) => (
      <span key={technology}>
        {technology}
        {index < project.technologies.length - 1 ? ', ' : ''}
      </span>
    ))
    const repoLink = project.repositoryLink !== undefined && project.repositoryLink.length > 0 && (
      <a className="text-dark pr-2" href={project.repositoryLink} rel="noreferrer" target="_blank">
        <FaGithub className="social-link" size={26}>
          GitHub
        </FaGithub>
      </a>
    )
    const projectLink = project.link !== undefined && project.link.length > 0 && (
      <a
        className="text-dark"
        href={project.link}
        rel="noreferrer"
        target="_blank"
        title="See it live!"
      >
        <FaExternalLinkAlt className="social-link" size={26}>
          {project.name}
        </FaExternalLinkAlt>
      </a>
    )

    return (
      <Col key={project.name} as={CardDeck} className="py-2" md={4} sm={12}>
        <Card data-aos="flip-left" data-testid="projectCard">
          <Card.Header className="d-flex justify-content-between">
            <span className="h5 family-semi">{project.name}</span>
            {projectLink}
          </Card.Header>
          {projectImage}
          <Card.Body>
            <Card.Text>{project.description}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <span className="d-block family-semi">Technologies:</span>
            {technologies}
            <div className="pt-1">
              {repoLink}
              {projectLink}
            </div>
          </Card.Footer>
        </Card>
      </Col>
    )
  })

  return (
    <section className="bg-light py-4">
      <Container className="d-flex flex-column align-items-center justify-content-center">
        <h1 className="text-dark text-uppercase family-semi mb-0" data-aos="flip-up">
          Projects
        </h1>
        <Divider color="dark" />
        <Row className="justify-content-center">{projectsRow}</Row>
      </Container>
    </section>
  )
}
