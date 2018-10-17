import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Container, Button } from 'muicss/react'
import { connect } from 'react-redux'
import { getFeedData, setFeedData } from './actions'
import { Feed } from './components/Feed'

export * from './reducers'

const CustomH1 = styled.h1`
  font-size: 28px;
`

const mapStateToProps = (state) => {
  const { feed } = state.feedReducer
  return { feed }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getFeedData: transactionNumber => dispatch(getFeedData(transactionNumber))
  }
}

class FeedItem extends React.Component {
  static propTypes = {
    feed: PropTypes.object, // eslint-disable-line
    transactionId: PropTypes.number,
    match: PropTypes.object.isRequired, // eslint-disable-line
    getFeedData: PropTypes.func.isRequired
  }
  static defaultProps = {
    feed: {},
    transactionId: null
  }
  constructor (props) {
    super(props)
    this.changeField = this.changeField.bind(this)
    this.setData = this.setData.bind(this)
    this.state = {
      data: {}
    }
  }
  componentDidMount () {
    const { transactionId } = this.props.match.params
    this.props.getFeedData(transactionId)
  }
  componentWillReceiveProps (props) {
    this.setState({ data: props.feed })
  }
  setData () {
    setFeedData(this.state.data)
  }
  changeField (e) {
    const { data } = this.state
    const { name, value } = e.target
    data[name] = value
    this.setState({
      data
    })
  }
  render () {
    const { data } = this.state
    let feedComponent = null
    if (Object.keys(data).length > 1) {
      feedComponent = (
        <Container fluid>
          <CustomH1>Feed data</CustomH1>
          <Feed data={data} changeField={this.changeField} />
          <Button onClick={this.setData} color="primary">Save</Button>
        </Container>
      )
    }
    return (
      <div>
        {feedComponent}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedItem)
