import fs from 'fs';
import { MongoClient } from "mongodb";
import readline from 'readline';
import path from "path";
import { readAndInsertCsv} from './leerdatos.js'

const url = 'mongodb://localhost:27017';
const dbName = 'CentroMédicoAcme';
async function connectDb() {
    if (!client.topology || !client.topology.isConnected()) {
        console.log('Conectando a MongoDB...');
        await client.connect();
        console.log('Conectado a MongoDB');
    } else {
        console.log('Ya conectado a MongoDB');
    }
    return client.db(dbName);
}


const client = new MongoClient(url);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function input(pregunta) {
    return new Promise(resolve => rl.question(pregunta, resolve));
}

async function showMenu(){
    console.log('\n=== clinica acme===');
    console.log('1. extraer data');
    console.log('2. reportes');

    console.log('3. salir\n');

    const opcion = await input("que opcion desea");
    switch (opcion){
        case '1':
            await leerdatos();
            break;
        case '2':
            await reportes();
            break;
        case '3':
            console.log('saliendo');
            rl.close();
            if (client.isConnected()) {
                await client.close();
                console.log('Conexión a MongoDB cerrada.');
            }
            return;
        default:
            console.log('opcion invalida')

    }
    showMenu()
}
showMenu()
async function leerdatos(){
    const csvfilepath = path.join(process.cwd(), 'raw-data', `acme_doctors_apointments.csv`);
    try {
        const dbInstance = await connectDb();
        console.log(`Intentando importar acme_doctors_apointments.csv ...`);
        await readAndInsertCsv(csvfilepath, dbInstance);
        console.log(`Importación de ${collectionName} completada.`);
    } catch (error) {
        console.error(`Error al importar datos para acme_doctors_apointments.csv:`, error.message);
    }
}



export function loadData(){
    if (!fs.existsSync(path)){
        fs.writeFileSync(path,"[]");
        return [];
    }
    else{
        const data = fs.readFileSync(path);
        return JSON.parse(data);
    }
}

export function saveData(data){
    fs.writeFileSync(path,JSON.stringify(data,null,2));
}


rl.on("close",()=>{
    console.log("aplicacion finalizada");
    process.exit(0)
})