// Required dependencies and files
import React from "react";
import './Jumbotron.css';

// Set up the Header component for our application
const Jumbotron = () => {
    return (
        <div className="jumbotron container">
            <h1>(REACT) Google Book Search</h1>
            <hr/>
            <h4>Search for and Save books of Interest!</h4>
        </div>
    )
};

// Export the Jumbotron
export default Jumbotron;