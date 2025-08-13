// import readline from 'readline';

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function questionAsync(pregunta) {
//     return new Promise(resolve => rl.question(pregunta, resolve));
// }


// async function jugador() {
//     const nombre = await questionAsync('¿Nombre? ');
//     const usuario = {
//             nombre,
//         };

//         console.log(usuario);

//         rl.close();
//         return usuario
// }
// async function main (){
//     const user = await jugador();
//     console.log("objeto retornado",user)
// }
// main();
// import readline from 'readline';

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function questionAsync(pregunta) {
//     return new Promise(resolve => rl.question(pregunta, resolve));
// }

// // Equipos
// const equipo1 = [];
// const equipo2 = [];

// async function jugador() {
//     const nombre = await questionAsync('¿Nombre? ');
//     const numeroEquipo = await questionAsync('¿Número de equipo (1 o 2)? ');

//     const usuario = { nombre };

//     // Asignar al equipo correspondiente
//     if (numeroEquipo === '1') {
//         equipo1.push(usuario);
//     } else if (numeroEquipo === '2') {
//         equipo2.push(usuario);
//     } else {
//         console.log('Número de equipo inválido. No se asignó el jugador.');
//     }

//     const continuar = await questionAsync('¿Agregar otro jugador? (s/n): ');
//     if (continuar.toLowerCase() === 's') {
//         return jugador(); // Recursividad
//     } else {
//         rl.close();
//         return { equipo1, equipo2 }; // Devuelve los equipos
//     }
// }

// async function main() {
//     const equipos = await jugador();
//     console.log('\n=== Equipos Finales ===');
//     console.log('Equipo 1:', equipos.equipo1);
//     console.log('Equipo 2:', equipos.equipo2);
// }

// main();
// import readline from 'readline';

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function questionAsync(pregunta) {
//     return new Promise(resolve => rl.question(pregunta, resolve));
// }

// const equipos = {}; 

// async function crearEquipo() {
//     const nombre = await questionAsync('Nombre del nuevo equipo: ');
//     if (equipos[nombre]) {
//         console.log(' El equipo ya existe.');
//     } else {
//         equipos[nombre] = [];
//         console.log(` Equipo "${nombre}" creado.`);
//     }
// }

// async function agregarJugador() {
//     const nombreJugador = await questionAsync('Nombre del jugador: ');
//     const nombreEquipo = await questionAsync('¿A qué equipo lo deseas agregar? ');

//     if (!equipos[nombreEquipo]) {
//         console.log(' Ese equipo no existe. Crea el equipo primero.');
//     } else {
//         equipos[nombreEquipo].push({ nombre: nombreJugador });
//         console.log(`Jugador "${nombreJugador}" agregado a "${nombreEquipo}".`);
//     }
// }

// function mostrarEquipos() {
//     console.log('\n=== Equipos y Jugadores ===');
//     if (Object.keys(equipos).length === 0) {
//         console.log('No hay equipos creados aún.');
//     } else {
//         for (const [equipo, jugadores] of Object.entries(equipos)) {
//             console.log(`\n ${equipo}:`);
//             if (jugadores.length === 0) {
//                 console.log('  (sin jugadores)');
//             } else {
//                 jugadores.forEach((jugador, index) => {
//                     console.log(`  ${index + 1}. ${jugador.nombre}`);
//                 });
//             }
//         }
//     }
// }

// async function menu() {
//     while (true) {
//         console.log('\n===== MENÚ PRINCIPAL =====');
//         console.log('1. Crear nuevo equipo');
//         console.log('2. Agregar jugador a un equipo');
//         console.log('3. Ver equipos y jugadores');
//         console.log('4. Salir');

//         const opcion = await questionAsync('Selecciona una opción: ');

//         switch (opcion) {
//             case '1':
//                 await crearEquipo();
//                 break;
//             case '2':
//                 await agregarJugador();
//                 break;
//             case '3':
//                 mostrarEquipos();
//                 break;
//             case '4':
//                 rl.close();
//                 console.log('\nPrograma finalizado.');
//                 return;
//             default:
//                 console.log('Opción no válida. Intenta de nuevo.');
//         }
//     }
// }

// menu();
// class productos{
//     Crear(){}
//     Obtener(){}
//     actualizar(){}
//     eliminar(){}
// }
// class bodegas{   
//     Crear (){}
//     Obtener (){}
//     Actualizar (){}
//     eliminar (){}
// }
class Forma {
    CalcularArea(){
        throw new Error("este metodo debe ser impelmentado")
    }
}

class Circulo extends Forma{
    constructor(radio){
        super();
        this.radio=radio
    }
    CalcularArea(){
        return Math.PI * this.radio**2
    }
}

class Cuadrado extends Forma{
    constructor(lado){
        super();
        this.lado = lado
    }
    CalcularArea(){
        return this.lado * this.lado
    }
}