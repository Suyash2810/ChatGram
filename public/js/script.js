var socket = io();

socket.on('connect', function () {
    console.log("Client has been connected to the server.");
    socket.emit('greetings');
});

socket.on('disconnect', function () {
    console.log("Disconnected from the server.");
});

socket.on(
    'newMessage',
    function (newMessage) {
        console.log("New message has been received.", newMessage);
    }
);