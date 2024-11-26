import React from 'react';
import { useState, useEffect } from 'react';
import api from './api/posts';

function RandNoteButton(difficulty) {
  const [data, setData] = useState(null);

  const apiRoute = "/api/fretboard/" + difficulty.difficulty

  const setDelay = (difficulty) => {
    switch (difficulty.difficulty) {
      case "Easy": return 3000;
      case "Medium": return 2000;
      case "Hard": return 1000;
      default: return 2000;
  }};

  const delay = setDelay(difficulty); // set delay based on selected difficulty

  useEffect (() => {
    console.log(delay)
  })

  // TODO Loop should terminate early if error encountered
  const handleClick = async () => {
    for (let i = 0; i < 20; i++) {
      try {
        const response = await api.get(apiRoute);
        setData(response.data);
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
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  };

  return (
    <div>
      {data == null && <button onClick={handleClick}>Begin</button>}
      {data && <div>Note: {data.note}</div>}
      {data && <div>String: {data.string}</div>}
    </div>
  );
}

export default RandNoteButton;
