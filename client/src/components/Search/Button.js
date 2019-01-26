// Import Required Dependencies
import React from "react";

// Build our button component for our onclick Search
const Button = (props) => 
{
  return(
    <button onClick={props.handleButtonClick} className="btn btn-danger btn-lg">Search</button>
  )
};

// Export Button
export default Button;