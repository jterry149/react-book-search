// Import the required dependencies and files
import axios from "axios";

// Build the API and the functions to save, delete, and getbook
const API = {
    // Query Google  API
    searchGoogle: function(searchTerm, startIndex) 
    {
        // Declare variables needed for the query of google api
        const baseUrl = 'https://www.googleapis.com/books/v1';
        const key = 'AIzaSyBlGEGx9lgOm211m_xdb36OGrJz3o3T1fo';
        const encodedSearchTerm = encodeURIComponent(searchTerm);
        
        // The constructed query for using google books api
        const queryURL = `${baseUrl}/volumes?q=${encodedSearchTerm}&startIndex=${startIndex}&projection=lite&key=${key}`;
        return axios.get(queryURL);
    },
    // Retrieves saved articles from the db
    getBook: function() {
      return axios.get("/api/saved");
    },
    // Saves a new book to the db
    saveBook: function(bookObj) 
    {
      return axios.post("/api/saved", bookObj);
    },
    // Deletes an article from the db
    deleteBook: function(id) 
    {
      return axios.delete(`/api/saved/${id}`);
    }
  };

  // Export the api
  export default API;
  