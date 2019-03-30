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

var {
    validString
} = require('./utilities/validations');

io.on('connection', (socket) => {
    console.log("Connected to the user.");

    socket.on('join', (params, callback) => {

        if (!validString(params.name) || !validString(params.chat)) {

            callback("Please enter a valid name and chat room.");
        }

        // When there is no error then we have to join the user to the particular room

        socket.join(params.chat);

        // Sending greetings to the new user who has just joined the particular room

        socket.on('greetings', () => {

            socket.emit('newMessage', generateMessage("Admin", `Welcome to the chat app. You're in room ${params.chat}.`));

            socket.broadcast.to(params.chat).emit('newMessage', generateMessage("Admin", `${params.name} has joined the app.`));
        });

        callback();
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