export default function(state = {value: 0, history: []}, action) {
  if(action.type === 'DECREMENT') {
    return {value: state.value - 1, history: [...state.history, state.value]}
  }
  if(action.type === 'INCREMENT') {
    return {value: state.value + 1, history: [...state.history, state.value]}
  }
  if(action.type === 'CLEAR') {
    return {value: 0, history: []}
  }
  return state
}
