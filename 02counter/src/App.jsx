import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let counter = 10

  let [counter, setCounter] = useState(10)

  const add_value = () => {
    counter = counter + 1
    if (counter > 20) {
      counter = 20
    }
    // console.log("this is counter", counter)
    setCounter(counter)
  }

  const decrease_value = () => {
    counter -= 1
    if (counter < 0) {
      counter = 0
    }
    setCounter(counter)
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <p>Counter {counter}</p>
      <button
      onClick={add_value}>Increase</button>
      <br />
      <button
      onClick = {decrease_value}>Dcrease</button>
    </>
  )
}

export default App
