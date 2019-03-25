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

    socket.emit('newMessage', {
        from: 'xyz@gmail.com',
        text: "This is the text being sent by the server to the client.",
        timeStamp: 123
    });

    socket.on('createMessage', (message) => {
        console.log('Message received from the client', message);
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