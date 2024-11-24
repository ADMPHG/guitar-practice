import React from 'react';
import { useState } from 'react';
import api from './api/posts';

function RandNoteButton(difficulty) {
  const [data, setData] = useState(null);

  let apiRoute = "/api/fretboard/" + difficulty.difficulty

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
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  };

  return (
    <div>
      {data == null && <button onClick={handleClick}>Begin</button>}
      {data && <div>{data}</div>}
    </div>
  );
}

export default RandNoteButton;
