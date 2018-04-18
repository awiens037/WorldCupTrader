const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;


// Establish the connection
const io = require('socket.io')();

io.on('connection', (client) => {
	// console.log(client.id);
	// client.emit('test')


	client.on('message', (data) => {
		console.log('message broadcasted from ' + data.name)
		client.broadcast.emit('message', data)
	})
	
})

// Set the socket up to listen on a unique PORT and start running it
const IOPORT = 5000;
io.listen(IOPORT)
	

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static
app.use(express.static("../client/build"));


// Set up promises with mongoose
// mongoose.Promise = global.Promise;
// // Connect to the Mongo DB
// mongoose.connect(
//     process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist",
//     {
//         useMongoClient: true
//     }
// );

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});


console.log('IO Listening on port ' + IOPORT)