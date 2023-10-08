require("dotenv").config();
// Import required modules
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const WebSocket = require('ws');
const config = require('./settings');
// Create an Express app
const app = express();
// Create a WebSocket server
const wss = new WebSocket.Server({ port: config.port_ws });
// Handle WebSocket connections
wss.on('connection', function connection(ws) {
  console.log("ws connection established");
  // Import and use the socket module
  const socket = require('./sockets');
  socket(require('./server_ws/ws_server')(ws,wss));
});

// Use helmet for security
const cspConfig = {
  directives: {
      //setting CSP directives permission of localhost ws//localhost
      defaultSrc: ["'self'"],
      connectSrc: ["'self'", `ws://localhost:${config.port_ws}`],
      // other directives
  },
};
app.use(helmet({ contentSecurityPolicy: cspConfig }));
// Enable CORS
app.use(cors());
// Serve static files from the 'public' directory
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home',{
    base_url:config?.base_url,
    port_ws:config?.port_ws
  })
})

// Start the Express server
app.listen(config.port_server, function() {
  console.log('listening on *: ' + config.port_server);
});