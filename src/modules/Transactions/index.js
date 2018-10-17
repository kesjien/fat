import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Container, Button } from 'muicss/react'
import { connect } from 'react-redux'
import { FeedList } from './components/FeedList'
import { getTransactions } from './actions'

export * from './reducers'

const CustomH1 = styled.h1`
  font-size: 28px;
`
const ButtonContainer = styled.div`
  margin: 5em;
  padding: 1em;
  text-align: center;
`
const StyledPlaceholder = styled.div`
  margin: 5em;
  text-align: center;
  font-size: 20px;
`

const mapStateToProps = (state) => {
  const { transactions } = state.transactionsReducer
  return { transactions }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTransactions: pageNumber => dispatch(getTransactions(pageNumber))
  }
}

class Transactions extends React.Component {
  static propTypes = {
    // define model schema for validation transactions. temporary eslint omit line
    transactions: PropTypes.array, // eslint-disable-line
    getTransactions: PropTypes.func.isRequired
  }
  static defaultProps = {
    transactions: []
  }
  constructor (props) {
    super(props)
    this.state = {
      pageNumber: 1
    }
  }
  componentDidMount () {
    this.props.getTransactions(this.state.pageNumber)
  }
  getNewTransactions (pageNumber) {
    if (pageNumber > 3 || pageNumber < 0) {
      return false
    }
    this.props.getTransactions(pageNumber)

    this.setState({ pageNumber })
    return true
  }
  render () {
    const { transactions } = this.props
    const { pageNumber } = this.state
    let transactionsComponent = (
      <StyledPlaceholder>No transactions, please refresh</StyledPlaceholder>
    )
    if (transactions.length > 1) {
      transactionsComponent = (
        <Container fluid>
          <CustomH1>Transactions</CustomH1>
          <FeedList transactions={transactions} />
          <ButtonContainer>
            <Button onClick={() => this.getNewTransactions(pageNumber - 1)} color="primary">Prev</Button>
            <Button onClick={() => this.getNewTransactions(pageNumber + 1)} color="primary">Next</Button>
          </ButtonContainer>
        </Container>
      )
    }
    return (
      <div>
        {transactionsComponent}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Transactions)
