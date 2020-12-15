import {About} from 'components/About'
import {Contact} from 'components/Contact'
import {Projects} from 'components/Projects'
import React from 'react'
import {Element} from 'react-scroll'

/**
 * Main page.
 * @return React component
 */
export const MainPage: React.FC = () => (
  <>
    <Element name="about">
      <About />
    </Element>
    <Element name="projects">
      <Projects />
    </Element>
    <Element name="contact">
      <Contact />
    </Element>
  </>
)
