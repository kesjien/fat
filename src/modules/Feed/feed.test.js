import React from 'react'
import renderer from 'react-test-renderer'
import { Feed } from './components/Feed'

it('renders correctly', () => {
  const tree = renderer
    .create(<Feed data={{}} changeField={() => console.log('mocked')} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
