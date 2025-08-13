// Hacer un menú simple:
//1. Crear productos
//2. Ingresar producto (producto, bodega, cantidad, descripcion, fecha)
//3. Retirar producto (producto, bodega, cantidad, descripcion, fecha)
//4. Saldo x producto
//5. Buscar producto
//6. Crear bodegas
//7. salir
// alert("Hola bienvenido al menu de bodegas")
// const productos = new Map();
// const bodegas = new Map();
// do{
//     var pidonumero = parseInt(prompt("digite un numero \n 1. Crear productos\n 2. Ingresar producto \n 3. Retirar producto \n 4. Saldo x producto \n 5. Buscar producto \n 6. Crear bodegas \n 7. salir"));
//     switch(pidonumero){
//         case 1:
//             agregarProducto();
//             break
//         case 2:
//             anadirProducto();
//             break
//         case 3:
//             eliminarProducto();
//             break
//         case 5:
//             buscarProducto();
//             break
//         case 6:
//             crearBodega();
//             break
//         }
        

// }while(pidonumero !== 7);


// function agregarProducto() {
//     const id = Number(prompt("Ingrese el ID del producto:"));
//     if (productos.has(id)) {
//         alert("El producto ya existe.");
//         return;
//     }
//     let nombre = prompt("Ingrese el nombre del producto:").trim().toLowerCase();
//     let descripcion = prompt("Ingrese la descripción del producto:");
//     let precio = Number(prompt("Ingrese el precio del producto:"));

//     if (isNaN(precio) || precio <= 0) {
//         alert("Precio inválido.");
//         return;
//     }

//     productos.set(id, { nombre, descripcion, precio });
//     alert(`Producto "${nombre}" agregado con éxito.`);

//     mostrarProductos();
// }
// function mostrarProductos() {
//     console.log("Lista de productos:");
//     productos.forEach((producto, id) => { 
//         console.log(`id: ${id}, Nombre: ${producto.nombre}, Descripción: ${producto.descripcion}, Precio: $${producto.precio}`);
//     });
// }
// function buscarProducto(){

// }
// function anadirProducto() {
//     let bodega = prompt("Digite la bodega que quiere añadir el producto").trim().toLowerCase();
//     if (bodegas.has(bodega)) {
//         const id = Number(prompt("Digite el ID del producto a añadir:"));
//         if (productos.has(id)) {
//             let cantidad = parseInt(prompt("Digite la cantidad de productos en número:"));
//             let descripcion = "ingreso";
//             let fecha = prompt("Digite la fecha:");

//             cantidad = Number(cantidad);
//             if (isNaN(cantidad) || cantidad <= 0) {
//                 alert("Cantidad inválida.");
//                 return;
//             }
//             bodegas.get(bodega).push({ id, cantidad, descripcion, fecha });

//             alert(`Producto "${id}" agregado con éxito a la bodega.`);
//             mostraranadidos();
//         } else {
//             alert("El producto no existe.");
//             return;
//         }
//     } else {
//         alert("La bodega no existe.");
//         return;
//     }
// }
// function mostraranadidos() {
//     console.log("Lista de productos en bodegas:");
//     bodegas.forEach((productos, bodega) => {
//         console.log(`Bodega: ${bodega}`);
//         productos.forEach(producto => {
//             console.log(`  ID: ${producto.id}, Cantidad: ${producto.cantidad}, Descripción: ${producto.descripcion}, Fecha: ${producto.fecha}`);
//         });
//     });
// }

// function eliminarProducto(){
//     let bodega = prompt("Digite la bodega que quiere añadir el producto").trim().toLowerCase();
//     if (bodegas.has(bodega)) {
//         const id = Number(prompt("Digite el ID del producto a añadir:"));
//         if (productos.has(id)) {
//             let cantidad = parseInt(prompt("Digite la cantidad de productos a retirar en número:"));
//             let descripcion = "retirar";
//             let fecha = prompt("Digite la fecha:");

//             cantidad = Number(cantidad);
//             if (isNaN(cantidad) || cantidad <= 0) {
//                 alert("Cantidad inválida.");
//                 return;
//             }
//             bodegas.get(bodega).push({ id, cantidad, descripcion, fecha });

//             alert(`Producto "${id}" agregado con éxito a la bodega.`);
//             mostraranadidos();
//         } else {
//             alert("El producto no existe.");
//             return;
//         }
//     } else {
//         alert("La bodega no existe.");
//         return;
//     }
// }
// function crearBodega(){
//     let bodega = prompt("Ingrese el nombre de la bodega:").trim().toLowerCase();
//     if (bodegas.has(bodega)) {
//         alert("La bodega ya existe.");
//         return;
//     }
//     bodegas.set(bodega,[])

//     console.log(bodegas)
// }
alert("Hola bienvenido al menú de bodegas");
const productos = new Map();
const bodegas = new Map();

do {
    var pidonumero = parseInt(prompt("Digite un número: \n 1. Crear productos\n 2. Ingresar producto \n 3. Retirar producto \n 4. Saldo x producto \n 5. Buscar producto \n 6. Crear bodegas \n 7. Salir"));
    switch (pidonumero) {
        case 1:
            agregarProducto();
            break;
        case 2:
            anadirProducto();
            break;
        case 3:
            eliminarProducto();
            break;
        case 4:
            cantidadDeProductos();
            break
        case 5:
            buscarProducto();
            break;
        case 6:
            crearBodega();
            break;
        case 7:
            alert("hasta luego")
        default:
            ("digite un valor valido")
    }
} while (pidonumero !== 7);

function agregarProducto() {
    const id = Number(prompt("Ingrese el ID del producto:"));
    if (productos.has(id)) {
        alert("El producto ya existe.");
        return;
    }
    let nombre = prompt("Ingrese el nombre del producto:").trim().toLowerCase();
    let descripcion = prompt("Ingrese la descripción del producto:");
    let precio = Number(prompt("Ingrese el precio del producto:"));

    if (isNaN(precio) || precio <= 0) {
        alert("Precio inválido.");
        return;
    }

    productos.set(id, { nombre, descripcion, precio });
    alert(`Producto "${nombre}" agregado con éxito.`);

    mostrarProductos();
}

function mostrarProductos() {
    console.log("Lista de productos:");
    if (productos.size === 0) {
        console.log("No hay nada.");
    } else {
        productos.forEach((producto, id) => {
            console.log(`ID: ${id}, Nombre: ${producto.nombre}, Descripción: ${producto.descripcion}, Precio: $${producto.precio}`);
        });
    }
}

function anadirProducto() {
    let bodega = prompt("Digite la bodega donde quiere añadir el producto").trim().toLowerCase();
    if (!bodegas.has(bodega)) {
        alert("La bodega no existe.");
        return;
    }

    const id = Number(prompt("Digite el ID del producto a añadir:"));
    if (!productos.has(id)) {
        alert("El producto no existe.");
        return;
    }

    let cantidad = Number(prompt("Digite la cantidad de productos a ingresar:"));
    let fecha = prompt("Digite la fecha:");
    
    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Cantidad inválida.");
        return;
    }

    let almacen = bodegas.get(bodega);
    let productoExistente = almacen.find(p => p.id === id);

    if (productoExistente) {
        productoExistente.cantidad += cantidad;
    } else {
        almacen.push({ id, cantidad, descripcion: "ingreso", fecha });
    }

    alert(`Producto "${id}" agregado con éxito a la bodega.`);
    mostraranadidos();
}

function eliminarProducto() {
    let bodega = prompt("Digite la bodega de la que quiere retirar el producto").trim().toLowerCase();
    if (!bodegas.has(bodega)) {
        alert("La bodega no existe.");
        return;
    }

    const id = Number(prompt("Digite el ID del producto a retirar:"));
    if (!productos.has(id)) {
        alert("El producto no existe.");
        return;
    }

    let cantidad = Number(prompt("Digite la cantidad de productos a retirar:"));
    let fecha = prompt("Digite la fecha:");
    
    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Cantidad inválida.");
        return;
    }

    let almacen = bodegas.get(bodega);
    let productoExistente = almacen.find(p => p.id === id);

    if (!productoExistente) {
        alert("El producto no se encuentra en la bodega.");
        return;
    }

    if (productoExistente.cantidad < cantidad) {
        alert("No hay suficiente cantidad en la bodega.");
        return;
    }

    productoExistente.cantidad -= cantidad;



    alert(`Producto "${id}" retirado con éxito.`);
    mostraranadidos();
}

function mostraranadidos() {
    console.log("Lista de productos en bodegas:");
    bodegas.forEach((productos, bodega) => {
        console.log(`Bodega: ${bodega}`);
        productos.forEach(producto => {
            console.log(`  ID: ${producto.id}, Cantidad: ${producto.cantidad}, Descripción: ${producto.descripcion}, Fecha: ${producto.fecha}`);
        });
    });
}
function cantidadDeProductos() {
    let id = Number(prompt("Digite el ID del producto que quiere saber la cantidad total:"));

    if (isNaN(id)) {
        alert("ID inválido.");
        return;
    }

    let totalCantidad = 0;
    bodegas.forEach((productos, bodega) => {
        productos.forEach(producto => {
            if (producto.id === id) {
                totalCantidad += producto.cantidad;
            }
        });
    });

    alert(`Cantidad total del producto ID "${id}": ${totalCantidad}`);
}
function buscarProducto(){
    mostrarProductos();
}
function crearBodega() {
    let bodega = prompt("Ingrese el nombre de la bodega:").trim().toLowerCase();
    if (bodegas.has(bodega)) {
        alert("La bodega ya existe.");
        return;
    }
    bodegas.set(bodega, []);
    console.log(`Bodega "${bodega}" creada con éxito.`);
}
