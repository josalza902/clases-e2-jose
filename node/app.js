// class carros {
//     marca;
//     motor;
//     valor;
//     #color;
//     potencia;
//     torque;


//     constructor(color){
//         this.#color = color;
//     }
//     acelerar(){
//     console.log("el carro esta acelerando")
//     }

//     frenar(){
//         console.log("el carro esta frenando")
//     }

//     get color (){
//         return this.#color;
//     }

//     set color(colorNuevo){
//         if (typeof colorNuevo === "string" && colorNuevo.length > 0){
//             this.#color =  colorNuevo
//         }else{
//             console.warn("color invalido.")
//         }
//     }
// }

// const carro = new carros("yellow");

// console.log(carro.color)
// carro.color = "blue"
// console.log(carro.color)

// class animal {
//     constructor(nombre){
//         this.nombre = nombre;
//     }
//     hablar (){
//         console.log(`${this.nombre}hace un sonido`)
//     }
// }

// class perro extends animal{
//     hablar(){
//         console.log(`${this.nombre} ladra`)
//     }
// }

// let miPerro = new perro("max");
// miPerro.hablar()

// class miclase{
//     x = 25;
//     metodo1(){
//         this.metodo2(this);
//     }
//     metodo2(x){
//         console.log(x);
//     }
// }

// const s = new miclase()
// s.metodo1()

// class superclase {
//     constructor(){
//         console.log("CONSTRUCTOR DE LA SUPERCLASE")
//     }
// }
// class subclase extends superclase{
//     constructor(){
//         super();
//         console.log("constructor de la subclase")
//     }
// }

// const s = new subclase()

// class superclase {
//     metodo1(){
//         console.log("metodo1delasuperclase")
//     }
// }
// class subclase extends superclase{
//     metodo1(){
//         super.metodo1();
//         console.log("metod1delasubclase")
//     }
// }

// const s = new subclase()
// s.metodo1()
// class superclase {
//     constructor(valor){
//         console.log("valor recibido ",valor)
//     }
// }
// class subclase extends superclase{
//     constructor(){
//         super(10);

//     }
// }

// const s = new subclase()
//  class animal {
//     constructor(){
//         if (this.constructor === animal){
//             throw new Error("no se puede instanciar una clase abstracta");
//         }
//     }
//     hacersonido(){
//         throw new Error("debe implementar el metodo sonido")
//     }
// }

// class perro extends animal{
//     hacersonido(){
//         console.log("guau guau")
//     }
// }

// class gato extends animal{
//     hacersonido(){
//         console.log("miau miau")
//     }
// }
// const Perro = new perro()
// Perro.hacersonido();
// const Gato = new gato()
// Gato.hacersonido()

// const servivo ={
//     respirar(){
//         throw new Error("debe implementar el metodo respirar()");
//     }
// }
// class animal {
//     constructor(){
//         if (this.constructor === animal){
//             throw new Error("no se puede instanciar una clase abstracta");
//         }
//     }
//     hacersonido(){
//         throw new Error("debe implementar el metodo sonido")
//     }
// }

// class perro extends animal{
//     hacersonido(){
//         console.log("guau guau")
//     }

//     respirar(){
//         console.log("respirando por la nariz")
//     }
// }
// function verificarInterface(objeto,interfaz){
//     for(let metodo in interfaz){
//         if (typeof objeto[metodo] !== "function"){
//             throw new Error(`el objeto debe implementar el metodo ${metodo}`)
//         }
//     }
// }
// const Perro = new perro()
// verificarInterface(Perro,servivo)
// Perro.respirar();
// class Empresa{
//     constructor(nombre){
//         this.nombre = nombre;
//     }
// }

// class Empleado {
//     constructor(nombre,empresa){
//         this.nombre = nombre;
//         this.empresa = empresa;
//     }
// }

// const miEmpresa =  new Empresa('techcorp');
// const empleado1 = new Empleado('lcuia',miEmpresa);

// class Empresa{
//     constructor(nombre){
//         this.nombre=nombre;
//         this.empleados = [];
//     }

//     agregarEmpleado(empleado){
//         this.empleados.push(empleado);
//         empleado.setEmpresa(this)
//     }
// }

// class Empleado{
//     constructor(nombre){
//         this.nombre = nombre;
//         this.empresa = null;
//     }

//     setEmpresa(empresa){
//         this.empresa=empresa;
//     }
// }
// const empresaX = new Empresa("InnovaDev");
// const empleadoX = new Empleado("Juan");

// empresaX.agregarEmpleado(empleadoX);
// console.log(empleadoX.empresa.nombre)

// class Jugador{
//     constructor(nombre){
//         this.nombre = nombre;
//     }
// }

// class Equipo{
//     constructor(nombre){
//         this.nombre = nombre;
//         this.jugadores = [];
//     }
//     agregarJugador(jugador){
//         this.jugadores.push(jugador);
//     }
// }

// const jugador1 = new Jugador("carlos");
// const equipo1 = new Equipo("tigres");
// equipo1.agregarJugador(jugador1)

class Habitacion {
    constructor(tipo){
        this.tipo = tipo;
    }
}

class Casa{
    constructor(direccion){
        this.direccion = direccion;
        this.habitaciones = []
    }

    agregarHabitacion(tipo){
        const habitacion = new Habitacion(tipo);
        this.habitaciones.push(habitacion)
    }
}

const miCasa = new Casa ("calle 123");
miCasa.agregarHabitacion("sala");
miCasa.agregarHabitacion("Dormitorio")