self.onconnect = function(event){
    const port = event.ports[0];

    port.onmessage =  function(event){
        console.log('mensaje recibido en el shared worker');
        

        port.postMessage('resultado desde el shared worker'+event.data)
    }
}