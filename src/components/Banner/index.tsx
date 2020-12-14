import styles from 'components/Banner/Banner.module.scss'
import React from 'react'
import {Element} from 'react-scroll'

/**
 * Banner for home page.
 * @return React component
 */
export const Banner: React.FC = () => (
  <Element name="home">
    <div
      className={`
        ${styles.banner}
        bg-dark
        w-100
        d-flex
        flex-column
        justify-content-center
        align-items-center
        text-center
        half-height
        text-light`}
    >
      <h1 className="mb-0">
        I&apos;m <span className="text-primary">Chris Carrillo</span>.
      </h1>
      <h2>I like software.</h2>
    </div>
  </Element>
)
