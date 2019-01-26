// Import required dependecies and files
import React from "react";

// Build our input component for searching
const Input = (props) => 
{
  return(
    <div>
        <h5>Input Books To Search</h5>
        <input onChange={props.handleInputChange} type="text" className="form-control" value={props.search}></input>
    </div>
  )
};

// Export our Input Component for searching
export default Input;