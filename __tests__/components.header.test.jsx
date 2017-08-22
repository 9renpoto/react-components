/* @flow */
import { shallow } from 'enzyme'
import { internet, random } from 'faker'

import React from 'react'
import { Header } from '../src/components/Header'

describe('header', () => {
  test('render', () => {
    const wrapper = shallow(
      <Header
        baseUrl={internet.url()}
        Logo={() =>
          <div>
            {random.word()}
          </div>}
        titles={[random.word(), random.word()]}
      />
    )
    expect(wrapper.length).toBe(1)
  })
})
