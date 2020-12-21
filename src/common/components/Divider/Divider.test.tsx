import {describe, expect, it} from '@jest/globals'
import {Divider} from 'common/components/Divider'
import React from 'react'
import renderer from 'react-test-renderer'

describe('<Divider />', () => {
  it('should render as expected', () => {
    const tree = renderer.create(<Divider color="dark" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
