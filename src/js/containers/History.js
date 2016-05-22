import React, { Component } from 'React'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { connect } from 'react-redux'

class History extends Component {
  constructor(props) {
    super(props)
  }

  renderHistory(history) {
    return history.map((event, i) => {
      return <li key={i}>Previous value: {event} </li>
    })
  }

  render() {
    const transitionOptions = {
      transitionName: 'fade',
      transitionEnterTimeout: 300,
      transitionLeaveTimeout: 300
    }

    return(
    <ul>
      <ReactCSSTransitionGroup {...transitionOptions}>
        {this.renderHistory(this.props.history).reverse()}
      </ReactCSSTransitionGroup>
    </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    history: state.counter.history
  }
}

export default connect(mapStateToProps)(History)
