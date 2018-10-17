import React from 'react'
import renderer from 'react-test-renderer'
import Transaction from './components/Transaction'
import { FeedList } from './components/FeedList'

it('renders correctly', () => {
  const tree = renderer
    .create(<Transaction data={[]} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly', () => {
  const tree = renderer
    .create(<FeedList transactions={[]} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
