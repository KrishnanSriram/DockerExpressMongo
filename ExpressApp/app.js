const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 3000;

//DB setup
mongoose.connect("mongodb://mongo:27017");

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function() {
    console.log('Mongoose default connection opened');
});

// If the connection throws an error
mongoose.connection.on('error', function(err) {
    console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function() {
    console.log('Mongoose default connection disconnected');
});

app.get('/', (req, res) => {
    res.json({ 'message': 'Hello World!!!' });
});

var express_port = process.env.PORT || PORT;
app.listen(express_port, () => {
    console.log(`Listening on port: ${express_port}`);
});