import React from 'react'
import ReactDOM from 'react-dom'

import {combineReducers, createStore} from 'redux'
import { Provider } from 'react-redux'

import CounterValue from '../containers/CounterValue'
import Button from '../containers/Button'
import History from '../containers/History'

import CounterReducer from '../reducers/reducer_counter'

const rootReducer = combineReducers({
  counter: CounterReducer
})

let store = createStore(rootReducer)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  render() {
      return(
        <Provider store={store}>
          <div>
            <Button type={"+"} />
            <Button type={"-"}/>
            <Button type={"Clear"}/>
            <CounterValue />
            <History />
          </div>
        </Provider>
      )
  }
}

export default App
