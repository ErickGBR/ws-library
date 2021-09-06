const sockets_id = new Map();

  const main = (socket) => {

  	let sockets = [
  	{event:'event',controller:'controller', method:'metodo'},
  	{event:'response',controller:'controller', method:'eco'},
  	{event:'color',controller:'controller', method:'metodo'}
  	]


  	for(let x in sockets){
  		socket.on(sockets[x].event, (data) => { require('./socket_core')(socket, data, `./../controllers/${sockets[x].controller}`, sockets[x].method, sockets[x].event); });	
  	}

  	   socket.on('disconnect', () => {
          if (sockets_id.has(socket.id))
               sockets_id.delete(socket.id);
     	});
  }

  module.exports = main;