import { useState, useEffect } from 'react';
import api from './api/posts';

export default function RandomNote() {
    const [note, setNote] = useState('F')

    const handleClick = async () => {
        try{
          const response = await api.get("/api/fretboard");
          // no need for catch here - if we have gotten this far, response is in the 200 range
          setNote(response.data);
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

    return (
        <div className="noteButton">
            <div>{note}</div>
            <button type="submit" onClick={handleClick}>Generate Note</button>
        </div>
    )
}