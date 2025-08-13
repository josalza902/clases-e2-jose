const sharedworker = new SharedWorker('./js/shared-worker.js');

const port = sharedworker.port;

port.onmessage = function(event){
    console.log('mensaje recibido desde el shared worker:',event.data);
};
port.postMessage('hola desde el hilo principal.')