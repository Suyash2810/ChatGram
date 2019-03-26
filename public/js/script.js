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

        var li = document.createElement('li');
        var text = document.createTextNode(`From: ${newMessage.from}, Text: ${newMessage.text}`);
        li.appendChild(text);
        document.getElementById('list_users').appendChild(li);
    }
);

window.onload = function () {

    document.getElementById('message_form').addEventListener('submit', (e) => {
        e.preventDefault();

        var text = document.getElementById('text_field').value;
        socket.emit('createMessage', {
            from: "User",
            text: text,
            timeStamp: new Date().getTime()
        }, function (data) {
            console.log(data);
        });
    });
}