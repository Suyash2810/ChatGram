const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
var app = express();
const port = process.env.PORT || 3000;
var server = http.createServer(app);
var io = socketIO(server);
var {
    generateMessage,
    generateLocationMessage
} = require('./utilities/messages');

io.on('connection', (socket) => {
    console.log("Connected to the user.");

    socket.on('greetings', () => {

        socket.emit('newMessage', generateMessage("Admin", "Welcome to the chat app."));

        socket.broadcast.emit('newMessage', generateMessage("Admin", "A new user has joined the app."));
    });

    socket.on('createMessage', (message, callback) => {
        io.emit('newMessage', generateMessage(message.from, message.text));
        callback();
    });

    socket.on('createLocationMessage', (position) => {

        io.emit('newLocationMessage', generateLocationMessage('User', position.latitude, position.longitude));
    });

    socket.on('disconnect', () => {
        console.log("Disconnected from the user.");
    });
});

app.use(express.static(publicPath));



server.listen(
    port,
    () => {
        console.log(`Listening to port ${port}`);
    }
)