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

socket.on('newLocationMessage', function (LocaMessage) {
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.appendChild(document.createTextNode(`Visit Here.`));
    console.log(LocaMessage.url);
    a.href = LocaMessage.url;
    a.target = "_blank";
    a.style.textDecoration = 'none';
    var text = document.createTextNode(`From: ${LocaMessage.from} -- `);
    li.appendChild(text);
    li.appendChild(a);
    document.getElementById('list_users').appendChild(li);
});

window.onload = function () {

    document.getElementById('message_form').addEventListener('submit', (e) => {
        e.preventDefault();

        var text = document.getElementById('text_field');
        socket.emit('createMessage', {
            from: "User",
            text: text.value,
            timeStamp: new Date().getTime()
        }, function () {
            text.value = '';
        });
    });

    var LocationBtn = document.getElementById('getLocation');

    LocationBtn.addEventListener('click', () => {

        if (!navigator.geolocation) {
            alert('Geolocation is not supported by your browser.');
        }
        LocationBtn.setAttribute('disabled', 'disabled');
        LocationBtn.innerText = "Sending location";


        navigator.geolocation.getCurrentPosition((position) => {
                socket.emit('createLocationMessage', {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                });
                LocationBtn.removeAttribute('disabled');
                LocationBtn.innerText = "Send location";
                console.log(position);
            },
            (error) => {
                alert("Unable to fetch the location.", error);
                LocationBtn.removeAttribute('disabled');
                LocationBtn.innerText = "Send location";
            });

    });
}