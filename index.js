const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8086 });

wss.on('connection', function connection(ws) {
  console.log("conectado")
	const socket = require('./sockets');
  socket(require('./server_ws/ws_server')(ws,wss));
/*
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });
  */

  //ws.send('something');
});