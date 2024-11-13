import './App.css'
// import { CountButton } from './CountButton'
import DropdownList from './DropDown'
import RandNoteButton from './RandNoteButton'
import { useState } from 'react'

export default function App() {
  const [showRandomNote, setShowRandomNote] = useState(false)

  function HandleStart() {
    console.log('it\'s dead jim')
    setShowRandomNote(true)
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
        {showRandomNote ? <RandNoteButton /> : <StartMenu />}
      </div>
      <div className='backButton'>
        {showRandomNote && <button onClick={HandleBack}>Back</button>}
      </div>
    </>
  )
}