require("dotenv").config();
const echoWS = require('../server_ws/ws_backend_eco');
const config = require('./settings');
const WebSocket = require('ws');

const ws = new WebSocket(`ws://${config.base_url}:${config.base_url}`, {
  origin: `http://${config.base_url}`
});

//OBJECT COMMUNICATING WITH SOCKET SERVER EVENTS
const socket = echoWS(ws);
console.log(socket);

socket.on('connection', function(){
  console.log('conectado')
})

socket.on('event', function(data){
    console.log(data);
    socket.emit('response', `Listen event echo ws: ${data}`)
})