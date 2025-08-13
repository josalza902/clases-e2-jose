import fs from 'fs';
import readline from 'readline';

const path = './db.json';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function showMenu(){
    console.log('\n=== CRUD en consola con node.js===');
    console.log('1. crear elemento');
    console.log('2. listar elemento');
    console.log('3. actualizar elemento');
    console.log('4. eliminar elemento');
    console.log('5. salir\n');

    rl.question('selecciona una opcion;',handleMenu);
}

function handleMenu(option){
    switch(option){
        case '1':
            createItem();
            break;
        case '2':
            listItem();
            break;
        case '3':
            updateItem();
            break;
        case '4':
            deleteItem();
            break;
        case '5':
            rl.close();
            break;
        default:
            console.log("opcion invalida")
            showMenu
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

function createItem(){
    rl.question("Ingrese un nombre" ,(name)=>{
        const data = loadData();
        const id = Date.now();
        data.push({id,name});
        saveData(data);
        console.log("elemento creado");
        showMenu();
    })
}


function listItem(){
    const data = loadData();
    console.log("\n=== lista de elementos ===");
    data.forEach((item)=>{
        console.log(`ID : ${item.id}- nombre:${item.name}`);
    })
    showMenu();
}

function updateItem(){
    rl.question("ID del elementoa actualizar: ",(idStr)=>{
        const id = parseInt(idStr);
        const data = loadData();
        const index =  data.findIndex((item)=>item.id===id);
        if (index === -1){
            console.log("elemento no encontrado.*");
            showMenu();
            return;
        }

        rl.question("nuevo nombre: ", (newName)=>{
            data[index].name = newName;
            saveData(data);
            console.log("elemento actualizado");
            showMenu()
        });
    });
}
function deleteItem(){
    rl.question("ID del elemento a eliminar: ",(idStr)=>{
        const id = parseInt(idStr);
        let data = loadData();
        const newData = data.filter((item)=>item.id !== id);
        if(data.length === newData.length){
            console.log("elemento no encontrado");
        }else{
            saveData(newData);
            console.log("elemento eliminado")
        }
        showMenu();
    })
}

showMenu();

rl.on("close",()=>{
    console.log("aplicacion finalizada");
    process.exit(0)
})