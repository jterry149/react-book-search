// Required dependencies and files
// import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Jumbotron from "./components/Jumbotron/Jumbotron";
// import Navbar from "./components/Navbar/Navbar";
// import Search from "./components/Search/Search";
// import Results from "./components/Results/Results";
// //import API from "./utils/API";
/* Import './App.css'; */

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Main from "./components/Main";

const App = () =>
  <Router>
    <div>
      <Route path="/" component={Main} />
    </div>
</Router>;

export default App;
// Build or application view by adding out components
// class App extends Component 
// {

    
//     // // Render the pages with the apporiate elements for the user
//     // render() {
//     // return (
//     //   <div>
//     //     <Navbar/>
//     //     <Jumbotron/>
//     //     <Search handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange} handleButtonClick={this.handleButtonClick} search={this.state.search}/>
//     //     <Results result={this.state.result} handleSaveButton={this.handleSaveButton}/>
//     //   </div>
//     // );
//     // }
// }

// Export the app
//export default App;
