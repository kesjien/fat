import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Col, Row } from 'muicss/react'

const StyledRow = styled(Row)`
  border: 1px dotted #cccccc5e;
  min-height: 40px;
  text-align: center;
  margin-left: 0px !important;
  margin-right: 0px !important;
  cursor: pointer;
  &:hover {
    background-color: #f0f5fa;
  }
`

const StyledDiv = styled.div`
  border-right: 1px solid #cccccc42;
`

const StyledCol = styled(Col)`
  padding-left: 0px !important;
  padding-right: 0px !important;
`

const Transaction = (props) => {
  const cols = []
  Object.keys(props.data).forEach((key, i) => {
    cols.push(<StyledCol key={`${i}_key`} md="2"><StyledDiv className="mui--appbar-height mui--appbar-line-height">{props.data[key]}</StyledDiv></StyledCol>)
  })

  return (
    <StyledRow>
      {cols}
    </StyledRow>
  )
}

Transaction.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.array, // eslint-disable-line
    PropTypes.object // eslint-disable-line
  ]).isRequired
}

export default Transaction
