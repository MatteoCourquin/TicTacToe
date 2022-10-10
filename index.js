var express = require('express')
const app = express();
app.use(express.static('public'))


const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {

  console.log(socket.id);
  console.log('a user connected');

  socket.on('play', (boxId, counter) => {
    io.emit('play', boxId, counter);
  });

})

server.listen(3000, () => {
  console.log('listening on *:3000...');
})