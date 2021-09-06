const echoWS = require('../server_ws/ws_backend_eco'); 
const WebSocket = require('ws');

const ws = new WebSocket('ws://127.0.0.1:8086', {
  origin: 'http://127.0.0.1/'
});

//OBJEO QUE SE COMUNICA CON LOS EVENOS DEL SERVIDOR SOCKET
const socket = echoWS(ws);
console.log(socket);

socket.on('connection', function(){
  console.log('conectado')
})

socket.on('event', function(data){
    console.log(data);
    socket.emit('response', `Escucha de el evento echo ws: ${data}`)
})