import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Panel, Row, Input } from 'muicss/react'
// important here because of the bootstraping and speed, muicss input has bigger priority than
// rule: avoid important if possible
// inline styled
// in real world use another or custom implementation of inputs
const StyledRow = styled(Row)`
  margin: 1em !important; 
`

const StyledPanel = styled(Panel)`
  margin: 1em;
`
export class Feed extends React.Component {
  // define data model for better validation
  static propTypes = {
    data: PropTypes.object, // eslint-disable-line
    changeField: PropTypes.func.isRequired
  }
  static defaultProps = {
    data: {}
  }
  constructor (props) {
    super(props)
    // example of the statuses handling, should be moved to constants and
    // implemented as a list of the status
    this.cancelStatus = 'PRE_AUTHORIZED_CANCELLED'
  }

  render () {
    const { changeField, data } = this.props

    const feedComponent = []
    if (data) {
      Object.keys(data).forEach((key) => {
        if (key === 'fromDate' || key === 'toDate') {
          data[key] = data[key].slice(0, 10)
        } else if (key === 'status') { // handle status here
          // handle and parse data in the separate function, move to separate function
          if (data[key] === this.cancelStatus) {
            data[key] = 'Cancelled'
          }
        } else if (data[key] === null) {
          data[key] = ''
        }
        feedComponent.push(
          <StyledRow key={key}>
            <Input label={key} name={key} value={data[key]} onChange={changeField} />
          </StyledRow>
        )
      })
    }
    return (
      <StyledPanel>
        {feedComponent}
      </StyledPanel>
    )
  }
}

