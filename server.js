// Required dependencies and files
const express = require('express');
const require = path("path");

// Set the port
const PORT = process.env.PORT || 5000;

// Set variable to use express
const app = express();

// Define our middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Serve up our static assets
if (process.env.NODE_ENV === "production"){
    app.use(express.static('client/build'));
}

// Define our API routes here
app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Handler to listen for connection to the server
app.listen(Port, () => {
    console.log('Server now on port ${PORT}!');
});
