import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Panel } from 'muicss/react'
import PropTypes from 'prop-types'
import Transaction from './Transaction'

const PanelComponent = styled.div`
  margin: 1em;
  padding: 3em;
`
const StyledLink = styled(Link)`
  color: #000;
`
const Header = styled.div`
  background-color: #e6f4ff;
`

export class FeedList extends React.PureComponent {
  static propTypes = {
    // define model schema for validation transactions. temporary eslint omit line
    transactions: PropTypes.array.isRequired, // eslint-disable-line
  }
  render () {
    const transactions = []
    let newData = {}
    this.props.transactions.forEach((item) => {
      newData = {
        borrowerId: item.borrowerId,
        creditUsed: item.creditUsed,
        currency: item.currency,
        fromDate: item.fromDate.slice(0, 10),
        lenderId: item.lenderId,
        price: item.price
      }
      transactions.push(
        <div key={item.id}>
          <StyledLink to={`/${item.id}`}>
            <Transaction data={newData} />
          </StyledLink>
        </div>
      )
    })
    return (
      <Panel>
        <PanelComponent>
          <Header>
            <Transaction data={Object.keys(newData)} />
          </Header>
          {transactions}
        </PanelComponent>
      </Panel>
    )
  }
}
