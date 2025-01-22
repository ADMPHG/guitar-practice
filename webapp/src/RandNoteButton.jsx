import React from 'react';
import { useState, useEffect } from 'react';
import api from './api/posts';

function RandNoteButton(difficulty) {
  const [noteData, setNoteData] = useState(null); // stores note returned from the API call

  // modifies API route to match user selected difficulty
  const noteUrl = "/api/fretboard/" + difficulty.difficulty;

  // Delay = how long before next note is displayed to user in the loop
  // Delay is set based on difficulty
  // TODO overhaul difficulty system so user picks possible note range and delay independently
  const setDelay = (difficulty) => {
    switch (difficulty.difficulty) {
      case "Easy": return 3000;
      case "Medium": return 2000;
      case "Hard": return 1000;
      default: return 2000;
  }};

  const delay = setDelay(difficulty); // set delay based on selected difficulty

  useEffect (() => {
    console.log(delay);
  });

  // GET request to retrieve a .wav file, then play it
  const fetchWavFile = async () => {
    try {
        const response = await api.get('/api/wavfile', {
            responseType: 'arraybuffer'
        });

        // Convert the response data to a Blob
        const blob = new Blob([response.data], { type: 'audio/wav' });

        // Create a URL for the Blob
        const url = window.URL.createObjectURL(blob);

        // Create an audio element and set its source to the Blob URL
        const audio = new Audio(url);
        audio.play();
    } catch (error) {
        console.error('Error fetching the .wav file:', error);
    }
};

  // TODO Loop should terminate early if error encountered
  // TODO Loop currently iterates 20 times - change this?
  const handleClick = async () => {
    for (let i = 0; i < 20; i++) {
      try {
        const response = await api.get(noteUrl);
        setNoteData(response.data);
        fetchWavFile();
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
      };
      await new Promise(resolve => setTimeout(resolve, delay));
    };
  };

  // Returned JSX
  // - 'Begin' button, conditionally rendered before loop is initiated and note data is received
  // from the API
  // - Note div, displays the randomly chosen note returned from the API call
  // - above12thFret div, displays if returned note is located above the 12th fret
  // - String div, displays which string the returned note is on

  return (
    <div>
      {noteData == null && <button onClick={handleClick}>Begin</button>}
      {noteData && <div>Note: {noteData.note}</div>}
      {noteData && noteData.above12thFret && (<div>^12th Fret^</div>)}
      {noteData && <div>String: {noteData.string}</div>}
    </div>
  );
};

export default RandNoteButton;
