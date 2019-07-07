# ChatGram

## Introduction

ChatGram is the place to create chat rooms and let your others join them for a quick chat. One can create as many number of rooms as required.

### Explanation

ChatGram is implemented in nodejs using the socket.io module. One can access it [here](https://www.npmjs.com/package/socket.io)

In ChatGram one can create a room using a specific username followed by the room name. Once a room is created, other people can join the same room. However there is a limit that has been set for the number of users in a room. 


To change the limit of users in a particular room, follow the steps below.

* Go to validations.js file.
* Find this [function](./public/imgs/RoomLengthValidation.png)
* Replace the number to the limit required.



### Note: 

The data in the room for a specific user exists as long as the user is connected to the room. As soon as the user disconnets the data is deleted automatically.

### Prerequisites

To run the project one will need Node Package Manager to be installed in the system. To install it in the system click [here](https://www.npmjs.com/get-npm).

Further a command line interface will be required to run the node scripts. Use git bash.


### Steps

To run the project, the required dependencies are needed to be installed.

```
1. Open the command line and execute npm -v to check if npm has been installed. The version will be shown. If not see prerequisites.
2. Execute npm install.
3. The dependencies will be installed as listed in the package.json file. 

```

### Testing

* *For testing the scripts run the command node test-watch.*


## Running the program

```
The project can be run in two ways.

1. Execute the command node server/server.js
2. Otherwise use the command nodemon server/server.js
3. Since the port has been set to 3000, the project can be accessed at localhost:3000.

```


### NOTE:
          
There are validations that have been done on the username and room. The user will be alerted if the input username and room name does not meet the criteria and will be redirected back to the join page.

## Authors

* **Suyash Awasthi** - *Initial work* - [suyash2810](https://github.com/suyash2810)

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/Suyash2810/Chat_IO_App/blob/master/LICENSE) file for details.


