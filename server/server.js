const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
var app = express();
const port = process.env.PORT || 3000;
var server = http.createServer(app);
var io = socketIO(server);

io.on('connection', (socket) => {
    console.log("Connected to the user.");

    socket.on('greetings', () => {

        socket.emit('newMessage', {
            from: 'Admin',
            text: 'Welcome to the chat app',
            timeStamp: new Date().getTime()
        });

        socket.broadcast.emit('newMessage', {
            from: 'Admin',
            text: 'A new user has joined the app.',
            timeStamp: new Date().getTime()
        })
    });

    socket.on('createMessage', (message) => {
        console.log('Message received from the client', message);
        io.emit('newMessage', {
            from: message.from,
            text: message.text,
            timeStamp: new Date()
        });

        // socket.broadcast.emit('newMessage', {
        //     from: message.from,
        //     text: message.text,
        //     timeStamp: new Date().getTime()
        // });
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