import {describe, expect, it} from '@jest/globals'
import {render, screen} from '@testing-library/react'
import {Footer} from 'components/Footer'
import React from 'react'
import renderer from 'react-test-renderer'

describe('<Footer />', () => {
  it('should render as expected', () => {
    const tree = renderer.create(<Footer />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should show all social links', async () => {
    render(<Footer />)

    const socialLinks = await screen.findAllByTestId('socialLink')
    expect(socialLinks).toHaveLength(3)
  })

  it('should have copyright', async () => {
    const {findByText} = render(<Footer />)

    await expect(findByText('Chris Carrillo</span> &copy; 2020')).toBeTruthy()
  })
})
