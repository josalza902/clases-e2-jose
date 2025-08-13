self.onmessage = function(event){

async function preguntas (){
    const masa = await input("masa");
    const velocidad_inicial =await input("velocidad");
    const aceleracion =await input("aceleracion");
    const tiempo =await input("tiempo");
    console.log(masa);
    console.log(velocidad_inicial);
    console.log(aceleracion);
    console.log(tiempo);

    const velocidadf = velocidad_inicial + aceleracion * tiempo;
    const energiac = 1 / 2 * masa * (velocidadf * velocidadf)
    const distanciar = velocidad_inicial * tiempo + 1 / 2 * aceleracion * (tiempo * tiempo)

    console.log(velocidadf);
    console.log(energiac);
    console.log(distanciar);



}
self.postMessage(preguntas())
}