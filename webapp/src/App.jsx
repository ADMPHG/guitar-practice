import React from 'react'
import './App.css'
// import { CountButton } from './CountButton'
import DropdownList from './DropDown'
import RandNoteButton from './RandNoteButton'
import { useState, useEffect } from 'react'

export default function App() {
  const [showRandomNote, setShowRandomNote] = useState(false)
  const [difficulty, setDifficulty] = useState('Select Difficulty')

  useEffect (() => {
    console.log(difficulty)
  })
  
  function HandleStart() {
    setShowRandomNote(true)
  }

  function handleSelectionChange(value) {
    setDifficulty(value);
  }

  function HandleBack() {
    setShowRandomNote(false)
  }

  function StartMenu() {
    return (
    <>
      <DropdownList difficulty={difficulty} changeDifficulty={handleSelectionChange} />
      <button className="startButton" onClick={HandleStart}>Start</button>
    </>
    )
  }

  return (
    <>
      <div className="startMenu">
        {/*Using a ternary to conditionally render components*/}
        {showRandomNote ? <RandNoteButton difficulty={difficulty} /> : <StartMenu />}
      </div>
      <div className='backButton'>
        {/*Using a logical && to conditionally render the back button*/}
        {showRandomNote && <button onClick={HandleBack}>Back</button>}
      </div>
    </>
  )
}