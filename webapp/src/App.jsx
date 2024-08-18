import './App.css'
import { CountButton } from './CountButton'
import { DropdownList } from './DropDown'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function App() {
  const [window, setWindow] = useState(<TempWindow/>)
  const [note, setNote] = useState('E')

  function TempWindow () {
    return (
      <>
        <DropdownList />
        <button className="startButton" onClick={handleStart}>Start</button>
      </>
    )
  }

  useEffect(() => {
    axios.get('/api').then(res => setNote(res.data))
  }, [])

  function handleStart() {
    setWindow(() => {
      return note
    })
  }

  return (
    <>
      {window}
    </>
  )
}