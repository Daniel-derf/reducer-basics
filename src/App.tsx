import { useState, useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const reducer = (state, action) => {
  switch (action.type){
    case 'increment':
      return {count: state.count + 1}
    case 'decrement':
      return {count: state.count - 1}
  }
  return { count: state.count+1 }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  function handleIncrement(){
    dispatch({type: 'increment'})
  }

  function handleDecrement(){
    dispatch({type: 'decrement'})
  }

  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={handleDecrement} >-</button>
      <button onClick={handleIncrement} >+</button>



    </>
  )
}

export default App
