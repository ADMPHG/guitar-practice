import './App.css'
// import { CountButton } from './CountButton'
import DropdownList from './DropDown'
import RandomNote from './RandomNote'
import { useState, useEffect } from 'react'
import api from './api/posts'

export default function App() {
  const [showRandomNote, setShowRandomNote] = useState(false)

  function HandleStart() {
    console.log('it\'s dead jim')
    setShowRandomNote(true)
    // return <RandomNote />
  }

  function HandleBack() {
    setShowRandomNote(false)
  }

  function StartMenu () {
    return (
    <>
      <DropdownList />
      <button className="startButton" onClick={HandleStart}>Start</button>
    </>
    )
  }

  return (
    <>
      <div className="startMenu">
        {showRandomNote ? <RandomNote /> : <StartMenu />}
      </div>
      <div>
        {showRandomNote && <button onClick={HandleBack}>Back</button>}
      </div>
    </>
  )
}