import { useState } from 'react';
import api from './api/posts';

function RandNoteButton() {
  const [data, setData] = useState(null);

  const handleClick = async () => {
    for (let i = 0; i < 20; i++) {
      try {
        const response = await api.get("/api/fretboard");
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
