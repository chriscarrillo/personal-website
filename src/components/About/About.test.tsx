import {describe, expect, it} from '@jest/globals'
import {render} from '@testing-library/react'
import React from 'react'
import renderer from 'react-test-renderer'
import {About} from '.'

describe('<About />', () => {
  it('should render as expected', () => {
    const tree = renderer.create(<About />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should show title', async () => {
    const {findByText} = render(<About />)
    await expect(findByText('About')).toBeTruthy()
  })

  it('should show image', async () => {
    const {findByAltText, findByTestId} = render(<About />)
    await expect(findByTestId('chrisPhoto')).toBeTruthy()
    await expect(findByAltText('Chris Carrillo')).toBeTruthy()
  })
})
