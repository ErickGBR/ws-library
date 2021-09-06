const main = (ws) => {
    const events = require('events');
    const eventEmitter = new events.EventEmitter();

    var socket = {
        eventos: new Set(['connection']),

        on(eventName, cb) {
            if (!socket.eventos.has(eventName))
                socket.eventos.add(eventName);
                eventEmitter.on(eventName, (data) => { cb(data); });
        },

        emit(eventName, data = {}) {
            var datos = JSON.stringify({ eventName: eventName, datos: data });
            ws.send(datos);
        }

    };

    ws.onclose = ({ target }) => {
        eventEmitter.emit('disconnect');
    };

    // disparar evento disconnect
    ws.onclose = ({ target }) => {
        eventEmitter.emit('disconnect');
    };

    ws.onmessage = (resp) => {
        //console.log("llegan los mensajes",resp)
        const { eventName, data } = JSON.parse(resp.data);
        eventEmitter.emit(eventName, data);
    };

    return socket;
}

module.exports = main;