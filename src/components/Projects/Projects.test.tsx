import {describe, expect, it} from '@jest/globals'
import {render, screen} from '@testing-library/react'
import {Projects} from 'components/Projects'
import React from 'react'
import renderer from 'react-test-renderer'
import {projects} from './fixtures'

describe('<Projects />', () => {
  it('should render as expected', () => {
    const tree = renderer.create(<Projects />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render heading', async () => {
    const {findByText} = render(<Projects />)
    await expect(findByText('Projects')).toBeTruthy()
  })

  it('should render all project cards', async () => {
    render(<Projects />)
    const cards = await screen.findAllByTestId('projectCard')
    expect(cards).toBeTruthy()
    expect(cards).toHaveLength(projects.length)
  })
})
