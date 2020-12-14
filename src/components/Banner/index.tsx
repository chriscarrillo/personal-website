import React from 'react'

/**
 * Banner for home page.
 * @return React component
 */
export const Banner: React.FC = () => (
  <div
    className="
      bg-dark
      w-100
      d-flex
      flex-column
      justify-content-center
      align-items-center
      text-center
      half-height
      text-light"
  >
    <h1 className="mb-0">
      I&apos;m <span className="text-primary">Chris Carrillo</span>.
    </h1>
    <h2>I like software.</h2>
  </div>
)
