import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Navbar from "./components/Navbar/Navbar";
import Saved from "./Saved/Saved";
import Search from "./Search/Search";
import Results from "./Results/Results";
import API from "../utils/api";

class Main extends Component {

  state = {
    topic: "",
    startIndex: "",
    books: [],
    saved: []
  };

  // When the component mounts, get a list of all saved books and update this.state.saved
  componentDidMount() 
  {
    this.getSavedBooks()
  }

  // Method for getting saved articles (all articles) from the db
  getSavedBooks = () => 
  {
    API.getBook().then((res) => 
    {
        this.setState({ saved: res.data });
    });
  }

  // A helper method for rendering one search results div for each book
  renderBooks = () => 
  {
    return this.state.books.map(book => (
      <Results
        _id={book._id}
        key={book._id}
        title={book.title}
        pub_date={book.publishedDate}
        authors={book.authors}
        description={book.description}
        handleSaveButton={this.handleSaveButton}
        getSavedBooks={this.getSavedBooks}
      />
    ));
  }

  // A helper method for rendering one div for each saved book
  renderSaved = () => {
    return this.state.saved.map(save => (
      <Saved
      _id={save._id}
      key={save._id}
      title={save.title}
      pub_date={save.publishedDate}
      authors={save.authors}
      description={save.description}
        handleDeleteButton={this.handleDeleteButton}
        getSavedArticles={this.getSavedBooks}
      />
    ));
  }

  // Keep track of what user types into topic input so that input can be grabbed later
  handleTopicChange = (event) => 
  {
    this.setState({ topic: event.target.value });
  }

  // Keep track of what user types into topic input so that input can be grabbed later for use
  handleStartIndex = (event) => 
  {
    this.setState({ startIndex: event.target.value });
  }

  // When the user search form submits, perform Google API search with user inputed term
  handleFormSubmit = (event) => 
  {
    event.preventDefault();
    console.log("Getting Google Books");
    console.log("this.state.topic: ", this.state.topic);
    console.log("this.state.startIndex: ", this.state.startIndex);

    API.searchGoogle(this.state.topic, this.state.startIndex)
      .then((res) => {
        this.setState({ books: res.data.response });
        console.log("this.state.books: ", this.state.books);
      });
  }

  // When save article button is clicked, add article to db
  handleSaveButton = (id) => 
  {
    const findBookByID = this.state.books.find((el) => el._id === id);
    console.log("findArticleByID: ", findBookByID);
    const newSave = {title: findBookByID.headline.main, date: findBookByID.pub_date, url: findBookByID.web_url};
    API.saveBook(newSave)
    .then(this.getSavedArticles());
  }

  // When delete article button is clicked, remove article from db
  handleDeleteButton = (id) => {
    API.deleteArticle(id)
      .then(this.getSavedArticles());
  }

  render() {
    return (
      <div className="main-container">
        <div className="container">
          {/* Navbar */}
          <Navbar/>
          {/* Jumbotron */}
          <Jumbotron/>
          {/* Search Form and Results Section */}
          <Search
            handleTopicChange={this.handleTopicChange}
            handleStartIndex={this.handleStartIndex}
            handleFormSubmit={this.handleFormSubmit}
            renderBooks={this.renderBooks}
          />
          {/* Saved Books Section */}
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title">
                      <strong>
                        <i className="fa fa-download" aria-hidden="true"></i> Saved Books</strong>
                    </h3>
                  </div>
                  <div className="panel-body">
                    <ul className="list-group">
                      {this.renderSaved()}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer>
            <hr />
            <p className="pull-right">
              <i className="fa fa-github" aria-hidden="true"></i>
              Proudly built using React.js
            </p>
          </footer>
        </div>
      </div>

    );
  }

}

export default Main;
