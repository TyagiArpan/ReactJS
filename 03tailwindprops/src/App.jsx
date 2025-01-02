import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl p-4 mb-4'>Tailwind test</h1>

      <Cards username = "Arpan" btntext = "Follow me"/>
      <br />
      <Cards username = "Nalkaa"/>
    </>
  )
}

export default App
