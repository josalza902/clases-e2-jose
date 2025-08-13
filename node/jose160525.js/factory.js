class users {
    constructor(name, email, position, area) {
        this.name = name;
        this.email = email;
        this.position = position;
        this.area = area;
    }

    methodTostring() {
        return `name:${this.name},email:${this.email},position:${this.position},area:${this.area}`
    }
}
class tasks {
    constructor(name, descripcion, startdate, enddate, status, priority, responsables) {
        this.name = name;
        this.descripcion = descripcion;
        this.startdate = startdate;
        this.status = status;
        this.priority = priority;
        this.responsables = responsables;
    }
    methodTostring() {
        return `name${this.name},descripcion${this.descripcion},startdate${this.startdate},enddate${this.enddate},status${this.status},priority${this.priority},responsables${this.responsables}`
    }
}
class workSpace {
    constructor(name, descripcion, workgroup, task) {
        this.name = name;
        this.descripcion = descripcion;
        this.workgroup = workgroup;
        this.area = area;
    }
    methodTostring() {
        return `name:${this.name},descripcion:${this.descripcion},workgroup:${this.workgroup},area:${this.area}`
    }
}
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

