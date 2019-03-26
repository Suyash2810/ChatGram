const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
var app = express();
const port = process.env.PORT || 3000;
var server = http.createServer(app);
var io = socketIO(server);
var genMessage = require('./utilities/messages').generateMessage;

io.on('connection', (socket) => {
    console.log("Connected to the user.");

    socket.on('greetings', () => {

        socket.emit('newMessage', genMessage("Admin", "Welcome to the chat app."));

        socket.broadcast.emit('newMessage', genMessage("Admin", "A new user has joined the app."));
    });

    socket.on('createMessage', (message, callback) => {
        io.emit('newMessage', genMessage(message.from, message.text));
        callback("This is an acknowledgement message.");
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