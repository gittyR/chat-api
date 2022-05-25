const http = require('http');
const app = require('./src/app');
const socketio = require('socket.io');
const port = process.env.PORT;

const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

io.on('connection', socket => {

  socket.on("join-room", (data) => {
    console.log(data.room, data);
    socket.join(data.room);
    room = data.room;
  });

  socket.on('request-users', function(){
    socket.to(room).emit('users', {users: users});
    console.log(users);
  });

  socket.on('add-user', function (data) {

    io.to(room).emit('add-user', {
      username: data.username
    });
    username = data.username;
    users.push(data.username);
  });


  // socket.on('disconnect', function (data) {
  //   users.splice(users.indexOf(username), 1);
  //   io.to(room).emit('remove-user', { username: username });
  // });
});

server.listen(port);