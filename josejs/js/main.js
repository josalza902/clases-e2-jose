// y = prompt("digite un valor")

// y = 5; x = 10;
// let edad = 18;
// if (y < x && x%2 ==0){
//     console.log("se cumple ");
//     y = 8;
//     x+=y;
//     console.log(x);
// }

// let edad = 18;

// if(edad>=18){
//     console.log("eres mayor")
// }
// x = prompt("digite el primer numero");
// y = prompt("digite el segundo numero");

// if(x > y){
//     alert("el primero es mayor")
// }
// else{
//     if(x === y){
//         alert("son iguales")
//     }
// }
// else{
//     if(x === y){
//         alert("y es mayor que x")
//     }
// }

// const numero = 8;
// const esPar = (numero%2 ===0)?true:false;
// alert(esPar?"el numero es par" : "el numero es impar")

// let saldo = 100;

// const monto = parseInt(prompt("digite el monto a retirar"));
// (monto == saldo) ? 
// alert("numero es igual"):
// alert("numero no es igual "); 




// if(monto <= saldo){
//     saldo -= monto
//     alert(`retiro exitoso ! nuevo saldo: ${saldo}`)
// }else{
//     alert("no hay suficiente ")
// }

// let dia="";

// switch(dia){
//     case "lunes":
//         alert("comienza la semana");
//         break;
//     case"viernes":
//         alert("se acerca el fin de semana");
//         break;
//     default:
//         alert("dia intermedio")
// }


// const arreglo = [1,70,"naranja",false];

// for(let i = 0; i<arreglo.length;i++){
//     alert(arreglo[i])
// }


// for(const item of arreglo){
//     alert(item)
// }
// for(const index in arreglo){
//     alert(` en la posicion ${index},el valor es: ${arreglo[index]}`);
// }
// const obj={
//     nombre: "Juan",apellido: "mendez", edad:200,vago:true
// }


// for(const clave in obj){
//     alert(`clave: ${clave},valor:${obj[clave]}`);
// }
// let i = 0;
// while(i<10){
//     alert(i+=2);
// }

// let x = 0;
// do {
//     x = parseInt(prompt("digite un numero"));
// }while (x == 10);

// teniendo el siguiente arreglo : 
// const arr = [5,8,50,24,6];
// calcular el promedio de los valores en el arreglo.
// utilizar for , for in y for of

// dar un numero a cada dia de la semana (ej lunes = 1 martes = 2) cree un programa que  pida un numero al usuario y le diga al usuario que dia es ese numero

// hacerlo con switch, if.

// hacer un programa que guarde en un arreglo los datos digitados por el usuario . el programa debe preguntar si desea agregar otro elemento al final listar todos los datos ingresados por el usuario


// // Programa 1: Días de la semana con switch
// function obtenerDiaSwitch(numero) {
//     switch (numero) {
//         case 1: return "Lunes";
//         case 2: return "Martes";
//         case 3: return "Miércoles";
//         case 4: return "Jueves";
//         case 5: return "Viernes";
//         case 6: return "Sábado";
//         case 7: return "Domingo";
//         default: return "Número inválido. Debe estar entre 1 y 7.";
//     }
// }

// // Programa 1: Días de la semana con if
// function obtenerDiaIf(numero) {
//     if (numero === 1) return "Lunes";
//     else if (numero === 2) return "Martes";
//     else if (numero === 3) return "Miércoles";
//     else if (numero === 4) return "Jueves";
//     else if (numero === 5) return "Viernes";
//     else if (numero === 6) return "Sábado";
//     else if (numero === 7) return "Domingo";
//     else return "Número inválido. Debe estar entre 1 y 7.";
// }

// // Programa 2: Almacenar datos en un arreglo
// function almacenarDatos() {
//     let datos = [];
//     let continuar = true;

//     while (continuar) {
//         let dato = prompt("Ingrese un dato:");
//         datos.push(dato);
        
//         let respuesta = prompt("¿Desea agregar otro elemento? (si/no)").toLowerCase();
//         if (respuesta !== "si") {
//             continuar = false;
//         }
//     }

//     console.log("Datos ingresados:", datos);
// }

// // Prueba de los programas
// let numero = parseInt(prompt("Ingrese un número del 1 al 7 para saber el día de la semana:"));
// console.log("Usando switch:", obtenerDiaSwitch(numero));
// console.log("Usando if:", obtenerDiaIf(numero));

// // Ejecutar función para almacenar datos
// almacenarDatos();

// //tercer programa
// // Arreglo dado
// const arr = [5, 8, 50, 24, 6];

// // Usando un bucle for
// function promedioFor(arr) {
//     let suma = 0;
//     for (let i = 0; i < arr.length; i++) {
//         suma += arr[i];
//     }
//     return suma / arr.length;
// }

// // Usando for...in
// function promedioForIn(arr) {
//     let suma = 0;
//     for (let index in arr) {
//         suma += arr[index];
//     }
//     return suma / arr.length;
// }

// // Usando for...of
// function promedioForOf(arr) {
//     let suma = 0;
//     for (let num of arr) {
//         suma += num;
//     }
//     return suma / arr.length;
// }

// // Mostrar los resultados
// console.log("Promedio usando for:", promedioFor(arr));
// console.log("Promedio usando for...in:", promedioForIn(arr));
// console.log("Promedio usando for...of:", promedioForOf(arr));
//  peso = parseFloat(prompt("digite su peso"));
//  altura = parseFloat(prompt("digite su altura"))
//  elevado = altura^2
//  x = peso / elevado
// alert(`su bmi es ${x}`)






// const frutas =["manzana","banana","uva","fresa"];

// frutas.forEach(function(fruta){
//     alert(fruta);
// });

// const numeros =[1,2,3,4,5,6];

// let total= 0;

// numeros.forEach(function(valor){
//     total += valor;
// })

// alert(total/numeros.length);


// // const n = numeros.filter(function(libro){
// //     return numeros>5;
// // }) ;

// // alert(n);

// const arr = ["juan" , "bogota","pepe","carlos","pepe"];
// let indx = arr.indexOf("pepe")
// console.log(indx)
// indx = arr.indexOf("pepe",indx+1)

// console.log(indx)

// const palabra = ["casa","perro","sola","arbol"];

// const todassonmaslargasquetres = palabra.every(function(palabra){
//     return palabra.length > 3;
// });
// console.log(todassonmaslargasquetres);


// const a = [
//     {deposito:"deposito",monto:200},
//     {deposito:"retiro",monto:100},
//     {deposito:"deposito",monto:20},
//     {deposito:"retiro",monto:30}
// ]

// const result = a.reduce(function(saldo,mov){
//     saldo += (mov.tipo === "deposito") ? mov.monto : mov.monto * -1;
//     return saldo
// },0);

// alert(result)

// const a = [
//     {deposito:"deposito",monto:200},
//     {deposito:"retiro",monto:100},
//     {deposito:"deposito",monto:20},
//     {deposito:"retiro",monto:30}
// ]

// const result = a.reduce(function(saldo,mov){
//     saldo += (mov.tipo === "deposito") ? mov.monto : mov.monto * -1;
//     return saldo
// },0);

// alert(result)

// const a = [200,100,20,3,80,56,101];

// for (let i = 0; i< a.length;i++){
//     if (i==3) {continue;}
//     alert(a[i])
// }

// alert(result)

// const a = [200,100,20,3,80,56,101];

// for (let i = 0; i< a.length;i++){
//     if (i==3) {break;}
//     alert(a[i])
// }

// alert(result)


// function mensaje(nombre){
//     alert(`Hola${nombre}!`)
// }

// mensaje ("pepe")

// const mensaje = function (nombre){
//     alert(`Hola${nombre}!`)
// }

// mensaje ("pepe")

// const nombres = [
//     ["pepe","aguilar"],
//     ["juan","mendez"],
//     ["camila","cabello"],
//     ["pedro","coral"]
// ];

// const resultado = nombres.map(concatenar);

// function concatenar (nombre){
//     return nombre[0]+' '+nombre[1];
// }
// console.log(resultado)
// const nombres = [
//     ["pepe","aguilar"],
//     ["juan","mendez"],
//     ["camila","cabello"],
//     ["pedro","coral"]
// ];

// const resultado = nombres.map(function(nombre,ind){
//     return nombre[0]+' '+nombre[1]+' '+ind;
// });
// alert(resultado)
// var nombres = [
//     ["pepe","aguilar"],
//     ["juan","mendez"],
//     ["camila","cabello"],
//     ["pedro","coral"]
// ]

//  function concatenar (){

//      console.log(this.nombres[0]+' '+this.nombres[1])
// }
// concatenar()
// function suma(){
//     num1 = 2
//     function suma2(){
//         return this.num1 + 5;
//     }
// }

// console.log(suma());
// const n1 = + "15"
// console.log(n1,typeof n1)
// const n1 = Number ("15")
// console.log(n1,typeof n1)
// const n1 = new Number("15")
// console.log(n1,typeof n1)
// const n1 = parseInt("15")
// console.log(n1,typeof n1)
// const n1 = 5/"a";
// console.log(n1,typeof n1)
// const n1 = 5/"a";
// console.log(n1,typeof n1)

// const carro = {
//     marca:"ferrari",
//     color:"rojo",
//     motor:"v12 Twin turbo",
//     cantidadpasajeros:"5",
//     arrancar(){
//         console.log(`el ${this.marca} esta arrancando`)
//     },
//     acelerar:function(velocidad){
//         console.log(`el ${this.marca} acelero a velocidad${velocidad}`)
        
//     },
//     detenerse: ()=>{
//         console.log(`el auto esta detenido`)
//     }
// }
// carro.arrancar()
// carro.acelerar(500)
// carro.detenerse()
// const jsontext = (JSON.stringify({valor1:1,
//     valor2:2,
//     arr:[4,5],
//     metodo(){return 3},
//     obj:{vlr:"obj"},
// },reemplazarnombre,4))

// function reemplazarnombre(propiedad,valor){
//     let resultado = valor;
//     switch(propiedad){
//         case"obj":
//             resultado = valor
//             break;
//         case "valor2":
//             resultado = valor * 5;
//             break

//     }
//     return resultado

// }
// console.log(JSON.parse(jsontext))

// const persona = {nombre:"juan",edad:25,ciudad:"madrid",estadovivil:"soltero"}

// // const {nombre,edad,ciudad} = persona
// // alert(nombre)

// const persona2 = {edad:20,genero:"masculiuno",...persona};
// persona2.nombre = "pepe"

// console.log(persona.nombre, persona2.nombre,persona.edad)


// const persona = {nombre:"juan",edad:25,ciudad:"madrid",estadovivil:"soltero"}

// const {nombre,edad,ciudad} = persona
// alert(nombre)

// const persona2 = {edad:20,genero:"masculiuno",...persona};
// const {otroobj:{ nombre,edad},...mendez} = persona2

// console.log(nombre,mendez.otroobj)

// const arr = [1,2,true,{apellido:"mendez",nombre:"juan"},"realmadrid"];

// const arr2 = [...arr,true]
// const {apellido,nombre} = arr[3]
// // const[,,valor1,valor2]= arr;
// const x = arr[2]

// console.log(x,nombre,apellido);

// const obj = {apellido:"mendez",nombre:"juan"};

// const objClonado = Object.assign({apellido:"benavidez"},obj);

// console.log(objClonado,obj)

// const arr=new Array(1,true,"juan","mendez",{equipo:"real"})
// arr.push([5,9,20]);
// arr.push("santiago","caicedo","nacional");
// arr.push({equipo:"realmadrid"});
// arr.push(()=> (console.log("hola")));
// const eliminar = arr.pop()

// console.log(arr,eliminar)
// alert(arr)
// const arr=new Array(1,2,3,4,5,6);
// const eliminado = arr.splice(2,2,7);
// console.log(arr,eliminado)
// const arr=new Array(1,2,3,4,5,6);
// console.log(arr.toString())
// const arr=new Array(1,2,3,4,5,6);
// console.log(arr.join([";"]));
// const arr=new Array(3).fill();
// Object.preventExtensions(arr);
// arr.pop()
// console.log(arr);
// const arr=new Array(
//     {nombre:"juan",edad:10},
//     {nombre:"pepe",edad:20},
//     {nombre:"maria",edad:15},
//     {nombre:"carla",edad:35},
//     {nombre:"jose",edad:19},
//     {nombre:"marlon",edad:44},
// );

// const result = arr.find((value,indx,arreglo,)=>{
//     console.log(value,indx)
//     return indx == 5;
// })
// console.log(result)
// const arr=new Array(8,5,4,7,6,9,354631,2);
// arr.sort((a,b)=> b-a);
// console.log(arr)
// const arr=new Array(1,2,3,4,5,6);
// arr.reverse();
// console.log(arr);

// const conj=new Set();
// conj.add(4)
// conj.add("pera")
// conj.add(true)
// conj.add(()=>console.log("hola"))
// conj.add(()=>console.log("hola"))
// conj.clear()
// conj.delete("pera")
// console.log(conj.size,conj.has(true))

// let mimapa = new Map();

// mimapa.set("nombre","juan");
// mimapa.set("equipo","tapitasfc");
// // mimapa.set({id:1},)

// console.log(mimapa.get("juan"))

// const formulario = new FormData();
// formulario.append("nombre","mendez")
// formulario.append("dice","el real es el mejor")

// alert(formulario)
// console.log(formulario.has("nombre"))
// const formulario = new FormData();
// formulario.append("nombre","mendez")
// formulario.append("nombre","juan")
// formulario.append("dice","el real es el mejor")

// for(let[clave,valor] of formulario)
// console.log(clave,valor)
// console.log(formulario.getAll("nombre"))
// function tareaNoBloqueante(callback){
//     console.log("iniciando tarea no bloqueante")
//     setTimeout(function(){
//         console.log("tarea no bloqueante completada1");
//         callback();

//     },3000);
//     setTimeout(function(){
//         console.log("tarea no bloqueante completada");
//         callback();

//     },3000);
// }

// console.log("inicio del programa. ");
// tareaNoBloqueante(function(){
//     console.log("continuando con el resto de tareas despues de la no bloqueante");
// });

// console.log("fin del programa")

// const miPromesa = new Promise((resolve,reject)=>{
//     const exito = true
//     if (exito){
//         console.log("esperando ...")
//         setTimeout(() => {
//             resolve("este es el valor que eventualmente devovera la promesa")
//         },2000);

//     }else{
//         reject("Hubo un error en la operacion")
//     }
// })
// miPromesa.then(response =>{
//     console.log(`Resultado de la promesa: ${response}`)
    
// })
// .catch(error => {
//     console.log(`Resultado de la promesa: ${error}`)
// })

// .finally(()=>{
//     console.log("el finally se ejcuta si o si")
// })

// const promesa = new Promise((resolve,reject)=>{
//     const numero = Number(prompt("digite un numero"))
//     if(numero % 2 === 0){
//         resolve ()
//     }else{
        
//         reject()
//     }
// })
// promesa.then(()=>{
//     alert("es par")
// })
// .catch(()=>{
//     alert("es impar")
// })
// .finally(()=>{
//     alert("sea serio mendez")
// })

// const promesa1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("promesa1")
//     },2000)
// })
// const promesa2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("promesa2")
//     },2000)
// })
// const promesa3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("promesa3")
//     },2000)
// })

// Promise.race([promesa1,promesa2,promesa3]).then(resolve=>{
//     alert(resolve)
// }).catch(error=>{
//     alert(`error en la promesa ${error}`)
// }).finally(()=>{
//     alert("quiereme mientras se pueda")
// })
// const promesa1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("promesa1")
//     },2000)
// })
// const promesa2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("promesa2")
//     },2000)
// })
// const promesa3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("promesa3")
//     },2000)
// })

// Promise.all([promesa1,promesa2,promesa3]).then(resolve=>{
//     alert(resolve)
// }).catch(error=>{
//     alert(`error en la promesa ${error}`)
// }).finally(()=>{
//     alert("quiereme mientras se pueda")
// })
// const promesa1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("promesa1")
//     },2000)
// })
// const promesa2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("promesa2")
//     },2000)
// })
// const promesa3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("promesa3")
//     },2000)
// })

// Promise.any([promesa1,promesa2,promesa3]).then(resolve=>{
//     alert(resolve)
// }).catch(error=>{
//     console.log(`error en la promesa  `,error.errors)
// }).finally(()=>{
//     alert("quiereme mientras se pueda")
// })
// const promesa1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("promesa1")
//     },2000)
// })
// const promesa2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("promesa2")
//     },2000)
// })
// const promesa3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("promesa3")
//     },2000)
// })

// Promise.any([promesa1,promesa2,promesa3]).then(resolve=>{
//     alert(resolve)
// }).catch(({errors})=>{
//     console.log(`error en la promesa  `,errors)
// }).finally(()=>{
//     alert("quiereme mientras se pueda")
// })



// ${error}

// async function promesaAsincrona(){
//     return "hello , world";
// }
// async function ejemplo(){
//     let resultado = await promesaAsincrona();
//     console.log(resultado)
// }

// ejemplo()

// async function request(){
//     return await fetch("/robots.txt")
//     .then(response=>response.text())

   
// }
// async function ejemplo(){
//     console.log (await request())
// }

// ejemplo()

// function request(){
//     return (async ()=> await fetch("/robots.txt"))
//     ().then(response=>response.text());
// }
// async function ejemplo(){
//    console.log (await request())
// }
// ejemplo()
// const url = new URL ("https://pepe:123@sub.manz.dev:443/path/?color=red&sound=enable");
// console.log(url.protocol)
// console.log(url.hostname)
// console.log(url.host)
// console.log(url.origin)
// console.log(url.username)
// console.log(url.password)
// console.log(url.port)//si es https no apareceran el 443
// console.log(url.pathname)
// console.log(url.hash)
// console.log(url.href)
// console.log(url.search)
// console.log(url.searchParams) // aparece que es un objeto
// url.searchParams.append("fullscreen","true")
// console.log(url.search)
// url.searchParams.delete("fullscreen")
// console.log(url.search)
// url.searchParams.append("color","blue")
// console.log(url.search)
// url.searchParams.set("color","pink")
// console.log(url.search)
// url.searchParams.sort()
// console.log(url.search)
// console.log(url.searchParams.has("color"))//mira si esta
// console.log(url.searchParams.get("color"))//da el valor
// url.searchParams.append("color","blue")
// console.log(url.search)
// console.log(url.searchParams.getAll("color"))//da el arreglo con todos los valores de esa variable
// console.log(url.searchParams.keys())
// console.log(url.searchParams.values())
// console.log(url.searchParams.entries())
// url.searchParams.forEach((value,name)=>{
//     console.log(`La variable ${name} tiene el valor ${value}`)
// })
// console.log(url.search)
// const url1 = new URL ("https://pepe:123@sub.manz.dev:443/path/?color=red&sound=enable");
// const params = new URLSearchParams("?color=red&sound=enable")
// console.log(url1.search===url.searchParams.toString());
// const request = fetch("https://jsonplaceholder.typicode.com/todos",{method:"GET",headers:{
//     "content-type":"application/json"
// }});

// request.then(async resolve =>{
//     const data = await resolve.json();
//     const body = document.querySelector("body");
//     let html = ""
    
//     data.forEach((element,ind) => {
//         html += `${ind+1}titulo:${element.title}<br>completo:${element.complete?"si":"no"}<br><br>`;    
//     });
//      body.innerHTML = html
  
// })

//localstorage

// while(true){
//     const opt = prompt(`
//         GESTION DE ARTICULOS\n\n\n
//         1 agregar productos
//         2 listar productos
//     `);
//     if(opt  === "1"){
//         const code = prompt("digite el codigo del producto")
//         const name = prompt("digite el nombre del producto")
//         const description = prompt("digite la descripcion del producto")
//         const price = prompt("digite el valor del producto")
//         const product = {code,name,description,price}
//         const products = getStorage("products")
//         products.push(product)
//         setStorage("products",products)

//     }
//     if(opt  === "2"){
//     showProducts()
//     }
//     else if (opt === "salir"){
//             alert("bye")
//         break
//     }
// }
// function showProducts(){
//     const products = getStorage("products")
//     products.forEach(({code,name,description,price}) => {
//         console.log(`-->${code}-${name}-${description}-${price}-`)
        
//     });
// }
// //local
// function getStorage(key){
//     const strg = localStorage.getItem(key)
//     return strg ? JSON.parse(strg) :[] 
// }
// function setStorage(key,value){
//     localStorage.setItem(key,JSON.stringify(value))
//     return true;
// }
// //session
// function getStorage(key){  
//        const strg = sessionStorage.getItem(key)
//         return strg ? JSON.parse(strg) :[]  } 
// function setStorage(key,value){    
//      sessionStorage.setItem(key,JSON.stringify(value))
//         return true; } 

//indexdb
// const request = indexedDB.open("Usuariosdb",2)

// request.onupgradeneeded = (event)=>{
//     const db = event.target.result

//     const usuariosStore = db.createObjectStore(
//         "usuario",
//         {keyPath:"id",autoIncrement:true}
//     )

//     usuariosStore.createIndex("email","email",{unique:true})
// }
// request.onsuccess = (event)=> {
//     const db = event.target.result;
//      function agregarUsuario(nombre,email){
//          const transaction = db.transaction(["usuarios"],"readWrite");
//          const usuariosStore = transaction.objectStore("usuarios");


//          const nuevoUsuario = {nombre: nombre,email:email};
//          const agregarRequest = usuariosstore.add(nuevoUsuario)

//          agregarRequest.onsuccess = () => {
//              console.log("usuario agregado")
//          };
//     }
// }

//  agregarUsuario("juan perez","juan@example.com")
// agregarUsuario("maria gomez","maria@example.com")


// function obtenerTodosLosUsuarios(){
//     const transaccion = db.transaccion(["usuarios"],"readonly");
//     const usuariosStore = transaccion.objectStore("usuarios");

//     const obtenerRequest = usuariosStore.getAll();

//     obtenerRequest.onsuccess = () => {
//      console.log("Todos los usuarios:",obtenerRequest.result)
//     };
// }
//  agregarUsuario("juan perez","juan@example.com")
//  agregarUsuario("maria gomez","maria@example.com")

// function establecerPreferenciaColor(color){
//     const fechaExpiracion = new Date();
//     fechaExpiracion.setDate(fechaExpiracion.getDate()+7);

//     const cookieCadena = `colorPreferido=${color}:expires=${fechaExpiracion.toUTCString()};path=/`

//     document.cookie=cookieCadena
// }
// establecerPreferenciaColor("blue")

// function obtenerPreferenciaColor(){
//     const todasLasCookies = document.cookie

//     const cookies = todasLasCookies.split(";");

//     for(let i = 0;i<cookies.length;i++){
//         const cookie = cookies[i].trim();

//         if(cookie.startsWith("colorPreferido=")){
//             return cookie.substring("colorPreferido=".length)
//         }
//     }

//     return null
// }
// const colorPreferido =obtenerPreferenciaColor()
// console.log("color preferido"+colorPreferido)

