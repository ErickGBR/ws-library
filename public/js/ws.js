const ws = new WebSocket('ws://localhost:8086');

const socket = {
    events: { connection: new Event('connection') },
    /** Socket event listener
     * @param {String} eventName 
     * @param {Function} cb - callback
     * 
     */
    on(eventName, cb) {

        //crear evento si no existe
        if (!socket.events.hasOwnProperty(eventName))
            socket.events[eventName] = new Event(eventName);

        document.addEventListener(eventName, function(evt) { cb(evt.data); });

    },

    /**
     * Emite events al servidor
     * @param {String} eventName 
     */
    emit(eventName, data = {}) {
        const datos = JSON.stringify({ eventName: eventName, datos: data });
        ws.send(datos);
    }

};


ws.onopen = function() { document.dispatchEvent(socket.events.connection); }
ws.onmessage = function(data) {
    const datos = JSON.parse(data.data);

    //si existe el evento
    if (socket.events.hasOwnProperty(datos.eventName)) {
        socket.events[datos.eventName].data = datos.data;
        document.dispatchEvent(socket.events[datos.eventName]);
    }
}
