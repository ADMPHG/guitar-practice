// Creating a function to track the changes in DropDown List
export default function DropdownList( { difficulty, changeDifficulty } ) { 
   // changeDifficulty function is passed down as a prop for the onChange functionality of the list
   // difficulty is stored in state in the parent component
   const handleChange = (event) => {
      changeDifficulty(event.target.value);
   };
   return (
      <select className="difficultySelect" value={difficulty} onChange={handleChange}>
         <option value="Select Difficulty" hidden>Select Difficulty</option>
         <option value="Easy">Easy</option>
         <option value="Medium">Medium</option>
         <option value="Hard">Hard</option>
      </select>
   );
}