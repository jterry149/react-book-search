// Required dependencies and files
import React from "react";
import Input from "./Input";
import Button from "./Button";
import "./Search.css";

// Build our search component
const Search = (props) => 
{
    return (
      <div className="card mb-3 container search-box">
        <div className="card-header">
            <h4>Books</h4>
        </div>
        <div className="card-body">
            <form onSubmit={props.handleFormSubmit}>
                <Input handleInputChange={props.handleInputChange} search={props.search}/>
                <Button handleButtonClick={props.handleButtonClick}/>
          </form>
        </div>
      </div>
    )
  };
  
  // Export our Search
  export default Search;


