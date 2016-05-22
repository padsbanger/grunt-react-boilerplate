import React, { Component } from 'React'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {decrement} from '../actions/decrement'
import {increment} from '../actions/increment'
import {clear} from '../actions/clear'

class Button extends Component {
  constructor(props) {
    super(props)
  }

  handleClick() {
    if(this.props.type==="+") {
      this.props.increment()
    }
    if(this.props.type==="-") {
      this.props.decrement()
    }
    if(this.props.type==="Clear") {
      this.props.clear()
    }
  }

  render() {
    return(
      <button onClick={this.handleClick.bind(this)}>{this.props.type}</button>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    decrement, increment, clear
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(Button)
