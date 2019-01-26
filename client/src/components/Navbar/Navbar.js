// Required dependencies and files
import React from 'react';
import './Navbar.css';

// Navbar component elements
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Google Books</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/Search">Search<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/Saved">Saved</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
  }
  
  // Export the Navbar
  export default Navbar;
  