import React from 'react'
import App from '../src/components/App'
import { shallow } from 'enzyme'

describe('Test for the main App Component', () => {
  it('it renders a a markup', () => {
    shallow(<App />)
  })
  it('should render provider', () => {
    const wrapper = shallow(<App />)
    const len = wrapper.find('Provider')
    expect(len.length).toEqual(1)
  })
})
