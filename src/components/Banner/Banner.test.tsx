import {describe, expect, it} from '@jest/globals'
import {render} from '@testing-library/react'
import React from 'react'
import renderer from 'react-test-renderer'
import {Banner} from '.'

describe('<Banner />', () => {
  it('should render as expected', () => {
    const tree = renderer.create(<Banner />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should show image', async () => {
    const {findByAltText, findByTestId} = render(<Banner />)

    await expect(findByTestId('avatar')).toBeTruthy()
    await expect(findByAltText('Avatar')).toBeTruthy()
  })
})
