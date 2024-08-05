import './App.css'
import { CountButton } from './CountButton'
import { useState } from 'react'

function App() {
  const [window, setWindow] = useState(<button onClick={handleStart}>Start</button>)

  function handleStart() {
    console.log("hello world")
    setWindow(() => {
      return <CountButton/>
    })
    
  }

  return (
    <>
      {window}
    </>
  )
}

export default App
