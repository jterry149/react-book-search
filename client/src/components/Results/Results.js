// Import Required Dependencies and files
import React from "react";
import "./Results.css";


const Results = (props) => 
{
  return (
    <div className="card mb-3 container results-box">
        <div className="card-header">
            <h4>Results</h4>
            <button onClick={props.handleButtonClick} className="btn btn-danger btn-lg">View</button>
            <button onClick={props.handleButtonClick} className="btn btn-danger btn-lg">Save</button>
        </div>
        <div className="card-body">

           
        </div>
    </div>
  )
};

export default Results;
