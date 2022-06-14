// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

// replace useReducer state management with an actual dispatch function/switch statement 

// const countReducer = (state, dispatch) => ({
//   ...state,
//   ...(typeof dispatch === 'function' ? dispatch(state) : dispatch),
// })

function countReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {count: state.count + action.step}
    default:
      throw new Error(`Unsupported action type: ${action.type}`)
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => dispatch({type: 'INCREMENT', step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
