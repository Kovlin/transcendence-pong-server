// const Express = require("express")();
// const Http = require("http").Server(Express);
// const Socketio = require("socket.io")(Http);


// Http.listen(3000, () => {
//     console.log("Listening at :3000...");
// });

// var position = {
//     x: 200,
//     y: 200
// };

// Socketio.on("connection", socket => {
//     socket.emit("position", position);
//     socket.on("move", data => {
//         switch(data) {
//             case "left":
//                 position.x -= 5;
//                 Socketio.emit("position", position);
//                 break;
//             case "right":
//                 position.x += 5;
//                 Socketio.emit("position", position);
//                 break;
//             case "up":
//                 position.y -= 5;
//                 Socketio.emit("position", position);
//                 break;
//             case "down":
//                 position.y += 5;
//                 Socketio.emit("position", position);
//                 break;
//         }
//     });
//     socket.on("str", data => {
//         console.log(str);
//     });
// });

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
        origin: "http://localhost:4200"
    }
});

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

io.on('connection', (socket) => {
  console.log('a user connected');
    socket.on('str', (data) => {
        console.log(data);
    });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
