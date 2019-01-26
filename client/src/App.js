// Required dependencies and files
import React, { Component } from 'react';
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import Results from "./components/Results/Results";
//import API from "./utils/API";
import './App.css';

// Build or application view by adding out components
class App extends Component 
{
    // Set our state object
    state = {
      search: "",
      start: "",
      end: "",
      result: [],
      savedBooks: []
    };

    // ComponentDidMount Function
    componentDidMount() {
      this.loadBooks();
    };

    // Load books function grabs saved books
    loadBooks = (req,res) => 
    {
      // API.getSavedBooks().then((res) => {
      //   this.setState({savedBooks: res.data});
      // }).catch((err) => {
      //   console.log(err);
      // });
    };

    // DeleteBook function
    deletebook = (id) => {
      // API.deleteBook(id).then((res) => {
      //   this.loadBooks()
      // }).catch((err) => {
      //   console.log(err);
      // });
    };

    // Save the book in database with the handleSavedButton function
    handleSavedButton = (title, url, date, image) => {
      // API.savedBooks({title, url, date, image}).then((res) => {
      //   this.loadBooks()
      // }).catch((err) => {
      //   console.log(err);
      // });
    };

    // HandleFormSubmit function handles the search button when it clicked on
    handleFormSubmit = (event) => {
      this.setState({search: ""});
      event.preventDefualt();
    };

    // HandleImputChange function handles the input box from user
    handleInputChange = (event) => {
      this.setState({search: event.target.value});
    };

    // handle the button click changes once clicked
    handleButtonClick = () => {
      if (this.state.search !== "") {
        // API.getData(this.state.search).then((res) => {
        //   this.setState({result: res.data.response.docs})
        // }).catch((err) => {
        //   console.log(err);
        // });
      }
    };

    // Render the pages with the apporiate elements for the user
    render() {
    return (
      <div>
        <Navbar/>
        <Jumbotron/>
        <Search handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange} handleButtonClick={this.handleButtonClick} search={this.state.search}/>
        <Results result={this.state.result} handleSaveButton={this.handleSaveButton}/>
      </div>
    );
    }
}

// Export the app
export default App;
