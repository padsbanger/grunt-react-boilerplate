import React, { Component } from 'React'
import { connect } from 'react-redux'

class CounterValue extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <span>{this.props.counter}</span>
    )
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter.value
  }
}

export default connect(mapStateToProps)(CounterValue)
