window.addEventListener('load',function(){

    socket.on('connection', function(){
        console.log('conectado')
    })

    document.getElementById('send').addEventListener('click',function(){
        let val = document.getElementById('socketVal').value;
        val != ''?socket.emit('event', JSON.stringify(val)):alert("No hay nada para enviar");
    })
                    
    socket.on('event',function(data){
        let doc = document.getElementById('response');
        doc.textContent = data;
        console.log(JSON.stringify(data));
    });

    socket.on('response',function(data){
        let doc = document.getElementById('eco');
        doc.textContent = data;
        console.log(JSON.stringify(data));
    });
    
})
