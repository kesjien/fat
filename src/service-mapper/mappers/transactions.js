
function mapTransactions (transactions) {
  let payload = { ...transactions }
  payload = Object.keys(payload).reduce((previous, current) => {
    Object.assign(previous, {
      [current]: {
        ...payload[current]
      }
      //
      // we have a possibility here to specify needed dict attributes
      // { id: payload[current].id}
      //
    })
    return previous
  }, [])
  return payload
}

export default { mapTransactions }
