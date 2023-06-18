const path = require('path')
const express = require('express')
const http = require('http')
const socketio = require('socket.io')



const app = express();
const server = http.createServer(app);
const io = socketio(server);


app.use(express.static(path.join(__dirname, 'public')))
//runs when client connects
io.on('connection', socket => {
//welcome current user
    socket.emit('message', 'welcome to chatcord!')
//broadcast when a user connects
    socket.broadcast.emit('message', 'A user has joined the chat');
//runs when client disconnects
    socket.on('disconnect', ()=> {
        io.emit('message', 'A user has left the chat') 
    })

    //listen for chat message
socket.on('chatMessage', msg => {
   io.emit('message', msg);
  })

});

const PORT = 3000 || process.env.PORT;

server.listen(PORT, ()=> console.log(`server is listening on port ${PORT}`))