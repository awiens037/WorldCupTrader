const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const logger = require("morgan");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Requiring the `User` model for accessing the `users` collection
var User = require("./models/user.js");

// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));
// By default mongoose uses callbacks for async queries, we're setting it to use promises (.then syntax) instead
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/Trader", {
	useMongoClient: true
});

// // Establish the connection
// const io = require('socket.io')();

// io.on('connection', (client) => {
// 	// console.log(client.id);
// 	// client.emit('test')


// 	client.on('message', (data) => {
// 		console.log('message broadcasted from ' + data.name)
// 		client.broadcast.emit('message', data)
// 	})
	
// })

// // Set the socket up to listen on a unique PORT and start running it
// const IOPORT = 5000;
// io.listen(IOPORT)
	

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static
app.use(express.static("../client/build"));

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});


// console.log('IO Listening on port ' + IOPORT)