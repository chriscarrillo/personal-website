import avatar from 'assets/images/avatar.svg'
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
        text-light`}
    >
      <img alt="Avatar" className="pt-2" src={avatar} />
      <h1 className="pt-2 pb-1 mb-0 family-semi">Chris Carrillo</h1>
      <h2 className="h6 pb-2">Software Engineer - Coffee Lover - Enneagram Enthusiast</h2>
    </div>
  </Element>
)
