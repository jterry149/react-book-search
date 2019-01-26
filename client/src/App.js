// Required dependencies and files
import React, { Component } from 'react';
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import Results from "./components/Results/Results";
import './App.css';

// Build or application view by adding out components
class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Jumbotron/>
        <Search/>
        <Results/>
      </div>
    );
  }
}

// Export the app
export default App;
