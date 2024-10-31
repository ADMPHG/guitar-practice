import './App.css'
// import { CountButton } from './CountButton'
import DropdownList from './DropDown'
import RandomNote from './RandomNote'
import { useState, useEffect } from 'react'
import api from './api/posts'

export default function App() {
  // const [window, setWindow] = useState(<StartMenu/>)

  function HandleStart() {
    console.log('it\'s dead jim')
  }

  return (
    <>
      <DropdownList />
      <button className="startButton" onClick={HandleStart}>Start</button>
      <RandomNote />
    </>
  )
}