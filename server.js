var express = require('express');
var app = express();

var server = app.listen(1337);
var io = require('socket.io').listen(server);

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

io.sockets.on("connection", function (socket) {
    socket.on("gonder", function (data) {
        io.emit("al", data);
    });
});
