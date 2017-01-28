import React, { Component } from 'react'
import TInput from '../'


class Test extends Component {
  constructor(props) {
    super(props)
    this.state = { value: 'test' }
  }

  render() {
    return (
      <TInput {...{
        type: 'phone',
        initialValue: this.state.value,
        minRows: 3,
        maxRows: 5,
        onInvalid: (err) => console.log(err),
        onValid: () => console.log('VALID'),
      }} />
    )
  }
}

export default Test
