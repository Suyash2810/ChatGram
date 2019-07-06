var socket = io();

function automaticScrolling() {

    var messages_list = $('#list_users'),
        last_message = messages_list.children('li:last-child');

    var clientHeight = $('#right_content_panel').prop('clientHeight'),
        scrollTop = $('#right_content_panel').prop('scrollTop'),
        scrollHeight = $('#right_content_panel').prop('scrollHeight'),
        lastMessageHeight = last_message.innerHeight(),
        secondLastMessageHeight = last_message.prev().innerHeight();

    //conditions

    if (clientHeight + scrollTop + lastMessageHeight + secondLastMessageHeight >= scrollHeight) {
        //     console.log("should scroll.");
        //     console.log(clientHeight + ' ' + scrollTop + ' ' + lastMessageHeight + ' ' + secondLastMessageHeight + ' ' + scrollHeight);

        $('#right_content_panel').scrollTop(scrollHeight);
    }


}

socket.on('connect', function () {
    var params = $.inverse_param(window.location.search);

    socket.emit('join', params, function (error) {
        if (error) {
            alert(error);
            window.location.href = '/';
        } else {
            console.log("No error");

        }

        socket.emit('validateName', params, function (error) {
            if (error) {
                alert(error);
                window.location.href = '/';
            } else {
                console.log("No error");
            }
        });

        socket.emit("roomLimitValidate", params, function (error) {
            if (error) {
                alert(error);
                window.location.href = '/';
            } else {
                console.log("Limit not exceeded");
            }
        });

        socket.emit('roomNameValidate', params, function (error) {
            if (error) {
                alert(error);
                window.location.href = '/';
            } else {
                console.log("Room name is valid. Welcome.");
            }
        });
    });
    socket.emit('greetings');
});

socket.on('disconnect', function () {
    console.log("Disconnected from the server.");
});

socket.on('updatedUsersList', function (users) {
    console.log(users);
    var temp = ``;
    var template = document.getElementById('contact_template').innerHTML;
    users.forEach(
        (user) => {
            var data = {
                name: user
            };
            var contact = Mustache.render(template, data);
            temp += contact;
        }
    );

    document.getElementById('contact_connect_info').innerHTML = temp;
});


socket.on(
    'newMessage',
    function (newMessage) {

        var template = document.getElementById('messaging_template').innerHTML;
        var createdTime = moment(newMessage.timeStamp).format('h:mm a');
        let data = {
            from: newMessage.from,
            createdTime: createdTime,
            text: newMessage.text
        };
        var msgTemplate = Mustache.render(template, data);
        let li = document.createElement('li');
        li.innerHTML = msgTemplate;
        document.getElementById('list_users').appendChild(li);
        automaticScrolling();
    }
);

socket.on('newLocationMessage', function (LocaMessage) {
    var li = document.createElement('li');
    var createdTime = moment(LocaMessage.timeStamp).format('h:mm a');
    var template = document.getElementById('location_template').innerHTML;
    var data = {
        from: LocaMessage.from,
        createdTime: createdTime,
        url: LocaMessage.url
    };
    var locationTemplate = Mustache.render(template, data);

    li.innerHTML = locationTemplate;
    document.getElementById('list_users').appendChild(li);

    automaticScrolling();
});

window.onload = function () {

    document.getElementById('message_form').addEventListener('submit', (e) => {
        e.preventDefault();

        var text = document.getElementById('text_field');
        if (text.value !== '' && text.value !== null) {
            socket.emit('createMessage', {
                from: "User",
                text: text.value,
                timeStamp: new Date().getTime()
            }, function () {
                text.value = '';
            });
        } else {
            alert("Cannot send empty message.");
        }
    });

    var LocationBtn = document.getElementById('getLocation');

    LocationBtn.addEventListener('click', () => {

        if (!navigator.geolocation) {
            alert('Geolocation is not supported by your browser.');
        }
        LocationBtn.setAttribute('disabled', 'disabled');


        navigator.geolocation.getCurrentPosition((position) => {
                socket.emit('createLocationMessage', {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                });
                LocationBtn.removeAttribute('disabled');

                console.log(position);
            },
            (error) => {
                alert("Unable to fetch the location.", error);
                LocationBtn.removeAttribute('disabled');

            });

    });
}