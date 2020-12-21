import {describe, expect, it} from '@jest/globals'
import {Contact} from 'components/Contact'
import React from 'react'
import renderer from 'react-test-renderer'

describe('<Contact />', () => {
  it('should render as expected', () => {
    const tree = renderer.create(<Contact />)
    expect(tree).toMatchSnapshot()
  })
})
