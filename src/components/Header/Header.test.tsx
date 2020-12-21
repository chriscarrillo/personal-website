import {describe, expect, it} from '@jest/globals'
import {render, screen} from '@testing-library/react'
import {Header} from 'components/Header'
import React from 'react'
import renderer from 'react-test-renderer'

describe('<Header />', () => {
  it('should render as expected', () => {
    const tree = renderer.create(<Header />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should show brand', async () => {
    const {findByText} = render(<Header />)
    await expect(findByText('Chris Carrillo')).toBeTruthy()
  })

  it('should show all links', async () => {
    render(<Header />)
    const links = await screen.findAllByTestId('navLink')
    expect(links).toBeTruthy()
    expect(links).toHaveLength(4)
  })
})
