import klawWeb from 'assets/images/klaw-web.png'
import napkin from 'assets/images/napkin.png'
import portfolio from 'assets/images/portfolio.png'
import reciplease from 'assets/images/reciplease.png'
import {Project} from 'models'

/**
 * Projects.
 */
export const projects: Project[] = [
  {
    description: `
      An e-commerce, business website for a life and ennegram coach in which customers can buy
      typing sessions and learn more about the enneagram.`,
    image: '',
    link: '',
    name: 'Kenna Ledbetter Coaching',
    repositoryLink: '',
    technologies: ['React', 'TypeScript', 'Commerce.js', 'Stripe'],
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
    description: 'A personal website that showcases my projects and shares more info about me.',
    image: portfolio,
    link: '',
    name: 'Portfolio',
    repositoryLink: 'https://github.com/chriscarrillo/personal-website',
    technologies: ['React', 'TypeScript', 'Bootstrap'],
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
    description: `
      Android GUI Calculator for frequently used calculations. This includes lifestyle,
      finance, school, and conversion calculators.`,
    image: napkin,
    link: '',
    name: 'Napkin',
    repositoryLink: 'https://github.com/chriscarrillo/Napkin',
    technologies: ['Java'],
  },
  {
    description: `
      A recipe finder website that allows users to quickly and easily find recipes that fit into
      their dietary restrictions and/or what they have available to them.`,
    image: reciplease,
    link: '',
    name: 'Reciplease',
    repositoryLink: 'https://github.com/chriscarrillo/Reciplease',
    technologies: ['PHP', 'JavaScript'],
  },
]
