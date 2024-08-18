import { useState } from 'react';
// Creating a function to track the changes in DropDown List
export function DropdownList() { 
//Using useState to set the default value of the DropDown menu and declare the values
const [selectedValue, setSelectedValue] = useState('Difficulty'); 
const handleChange = (event) => {
 setSelectedValue(event.target.value);
 };
return (
 <select className="difficultySelect" value={selectedValue} onChange={handleChange}>
    <option value="Easy">Easy</option>
    <option value="Medium">Medium</option>
    <option value="Hard">Hard</option>
 </select>
 );
}