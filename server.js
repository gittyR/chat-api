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

  const rooms = ["room1", "room2", "room3"]
io.on('connection', socket => {
    socket.on("room1", ({ username, room }) => {
      // const user = newUser(socket.id, username, room);
     console.log("receiving message:" , {username, room}) 
      socket.join(rooms);
  
      // General welcome
     socket.emit('room1', username);
  
      // Broadcast everytime users connects
      // socket.broadcast
      //   .to(user.room)
      //   .emit(
      //     'message',
      //     formatMessage("WebCage", `${user.username} has joined the room`)
      //   );
  
      // Current active users and room name
      // io.to(user.room).emit('roomUsers', {
      //   room: user.room,
      //   users: getIndividualRoomUsers(user.room)
      // });
    });
  
    // Listen for client message
    socket.on('chatMessage', msg => {
      const user = getActiveUser(socket.id);
  
      io.to(user.room).emit('message');
    });
  
    // Runs when client disconnects
    socket.on('disconnect', () => {
      const user = exitRoom(socket.id);
  
      if (user) {
        io.to(user.room).emit(
          'message'
        );
  
        // Current active users and room name
        io.to(user.room).emit('roomUsers', {
          room: user.room,
          users: getIndividualRoomUsers(user.room)
        });
      }
    });
  });

server.listen(port);