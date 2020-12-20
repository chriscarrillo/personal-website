import klawWeb from 'assets/images/klaw-web.png'
import {Project} from 'models'
import React from 'react'
import {Card, CardDeck, Col, Container, Row} from 'react-bootstrap'
import {FaExternalLinkAlt, FaGithub} from 'react-icons/fa'
import {MdDeveloperMode} from 'react-icons/md'

const projects: Project[] = [
  {
    description: 'A personal website that showcases my projects and shares more info about me.',
    image: '',
    link: '',
    name: 'Portfolio',
    repositoryLink: 'https://github.com/chriscarrillo/personal-website',
    technologies: ['React', 'TypeScript'],
  },
  {
    description: `
      A web application to create meal plans and add meals for those corresponding plans.`,
    image: '',
    link: '',
    name: 'Swole Your Rolls',
    repositoryLink: 'https://github.com/chriscarrillo/swole-your-rolls',
    technologies: ['React', 'TypeScript', 'Firebase'],
  },
  {
    description: `
      An e-commerce, business website for a life and ennegram coach in which customers can buy
      typing sessions and learn more about the enneagram.`,
    image: '',
    link: '',
    name: 'Kenna Ledbetter Coaching',
    repositoryLink: '',
    technologies: ['React', 'TypeScript', 'Commerce.js'],
  },
  {
    description: `
      An educational website designed to help STEM students and hobbyists learn about
      robotics and programming.`,
    image: klawWeb,
    link: 'https://klaw-web.herokuapp.com/',
    name: 'KLAW-Web',
    repositoryLink: 'https://github.com/chriscarrillo/KLAW-Web',
    technologies: ['Angular', 'JavaScript', 'Blockly', 'Flask', 'Python', 'WebGL'],
  },
  {
    description: 'Android GUI Calculator for frequently used calculations.',
    image: '',
    link: '',
    name: 'Napkin',
    repositoryLink: 'https://github.com/chriscarrillo/Napkin',
    technologies: ['Java'],
  },
  {
    description: `
      A recipe finder website that allows users to quickly and easily find recipes that fit into
      their dietary restrictions and/or what they have available to them.`,
    image: '',
    link: '',
    name: 'Reciplease',
    repositoryLink: 'https://github.com/chriscarrillo/Reciplease',
    technologies: ['PHP', 'Python'],
  },
]

/**
 * Projects section.
 * @return React components
 */
export const Projects: React.FC = () => {
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
        {index < project.technologies.length - 1 ? ' — ' : ''}
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
        <Card>
          <Card.Header className="d-flex justify-content-between">
            <span className="h4 family-semi">{project.name}</span>
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
      <Container fluid className="d-flex flex-column align-items-center justify-content-center">
        <h1 className="text-dark text-uppercase family-semi pb-2 mb-0">Projects</h1>
        <Row className="justify-content-center">{projectsRow}</Row>
      </Container>
    </section>
  )
}
