import './App.css'
// import { CountButton } from './CountButton'
import { DropdownList } from './DropDown'
import { useState, useEffect } from 'react'
import api from './api/posts'

export default function App() {
  const [window, setWindow] = useState(<StartMenu/>)
  const [note, setNote] = useState('E')

  useEffect(() => {
    console.log(note)
  }, [note])

  function StartMenu () {
    return (
      <>
        <DropdownList />
        <button className="startButton" onClick={handleStart}>Start</button>
      </>
    )
  }
  
  function handleStart() {
    const fetchNotes = async () => {
      try{
        const response = await api.get("/api/fretboard");
        // no need for catch here - if we have gotten this far, response is in the 200 range
        setWindow(response.data);
      } catch (err) {
        if (err.response) {
          // defined errors not in the 200 response range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.hearders);
        } else {
          // undefined errors
          console.log(`Error: ${err.message}`);
        }
      }
    }

    fetchNotes()
    setNote('F')
    // axios.get("api/fretboard").then(res => setNote(res.data))
    // console.log(note)
    // axios.get('/api').then(res => console.log(res.data))
  }

  return (
    <>
      {window}
    </>
  )
}