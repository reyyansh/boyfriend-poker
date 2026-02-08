const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'login.html'));
});

app.get('/index.html', (req, res) => {
   res.sendFile('index.html', {
     root: './'
   })
})

express.static("./", [])
app.use(express.static(join(__dirname, 'public')));

app.get("/:universalURL", (req, res) => {
   res.send("404 URL NOT FOUND");
});

io.on('connection', (socket) => {

  socket.on('chat message', (msg, username) => {
    io.emit('chat message', msg, username);
  });
  socket.on('poke', (username) => {
    console.log('poke re