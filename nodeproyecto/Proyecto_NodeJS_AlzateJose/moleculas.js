import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function input(pregunta) {
    return new Promise(resolve => rl.question(pregunta, resolve));
}
// const pedir = await input("cuantos workers nescesitas")


const myWorker = new Worker('worker.js');
myWorker.onmessage = function (event) {
    console.log('resultado del worker: ', event.data)

}
// async function pedird(){
       
//     for (let i=0;i++;i==pedir){
        
//     }
    
    



// }
// pedird()


