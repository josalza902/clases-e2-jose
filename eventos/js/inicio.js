// function primerEvento(){
//     alert("evento enlazado en el html")
// }

// const boton2 = document.getElementById("boton2")
// boton2.onclick =  function(){
//     alert("evento enlazado mediante propiedad del elemento")
// }
// boton2.addEventListener("dblclick",() => {
//     alert("saasa")
// })
// boton2.addEventListener("mouseover",() => {
//     alert("sadhkgahskjdgs")
// })


// document.querySelector("#boton3").addEventListener("dblclick",() => {
//     alert("evento enlazado mediante el addeventlistener ")
// })

// const boton1 = document.getElementById("boton1")
// boton1.setAttribute("onclick","medianteAtributo()") 
// function medianteAtributo(){
//     alert("evento click reescrito")
// }

// //<input type="text" id="code">
// const codeInput = document.getElementById("code")

// codeInput.value

//  const body = document.getElementById("div1")

//  body.addEventListener("click",funcionEvento1)
// div1.addEventListener("click",funcionEvento2,{bubble: true})
// // div1.addEventListener("click",funcionEvento3,{bubble: true})
// // function funcionEvento1(){
// //     div1.removeEventListener("click",funcionEvento1,{bubble: true})
// //     alert("se ejecuto evento 1")
// // }

// // function funcionEvento2(){
// //     alert("se ejecuto evento 2")
// // }

// // function funcionEvento3(){
    
// //     alert("se ejecuto evento 3")
// // }
// //evento
//  function funcionEvento1(event){
//       alert("se ejecuto evento 1",`${event}`)
//  }


// const div1 = document.getElementById("div1");
// const form = document.getElementById("formulario");


// form.addEventListener("submit",(event)=>{
//     event.preventDefault()
//     console.log("envio de formulario")
// })
// const root = document.getElementById("root")
// const miEvento = new CustomEvent("user:say-hello",{
//     detail : {say:"hello"},
//     bubbles : true
// }) 

// boton.addEventListener("user:say-hello",funcionEvento1)
// boton.dispatchEvent(miEvento)
// function funcionEvento1(event){
//     console.log(event)
// }


// const boton = document.getElementById("boton")
// const root = document.getElementById("root")

// boton.addEventListener("click",(event)=>{
//     boton.dispatchEvent(new CustomEvent("user:say-hello",{
//         detail : {say:"hello"},
//         bubbles : true
//     }))
// })

// boton.addEventListener("user:say-hello",funcionEvento1,{bubble:true})
// root.addEventListener("user:say-hello",(event)=>{
//     const name = event.detail.name;
//     const number = event.target.dataset.num;
//     console.log(`message recibed from${name}(${number})`)

// },{capture:true})

// function funcionEvento1(event){
//     const trigger = event.target.dataset.number;
//     const say = event.detail.say;
//     console.log(`el evento dice ${say} y el numero es: ${trigger}`)
// }

// elementos personalizados

// class BenavidesAdmin extends HTMLElement {
//     constructor(){
//         super();
//         this.innerHTML=`<span>hola soy un custom element</span>`;
//         this.miPropiedad = `valor inicial`
//         this.producto = {codigo:"001",nombre:"arroz"}
//         const shadow = this.attachShadow({mode:"open"});//open entra close no
//         shadow.innerHTML=
//         `<p>COntenido dentro de shadow dom`
//     }
// }

// customElements.define("jose-admin",BenavidesAdmin)

// const ba = document.getElementsByTagName("jose-admin");

// console.log(ba)

// const temp = document.getElementsByTagName("template")

// const cont = temp[0].content.cloneNode(true)

// document.getElementById("contenedor").appendChild(cont)

class SumarNumeros extends HTMLElement{
    constructor(){
        super();
        this.num1 = 0;
        this.num2 = 0;
    }

    static get observedAttributes(){
        return["num1,num2"]
    }

    attributeChangedcallback(attributeName,oldvalue,newValue){
        this[attributeName] = parseInt(newValue)
        this.innerHTML=`<span>la suma es : <strong>${this.num1+this.num2}</strong></span>`;
        this.getElementById("span")
        
    }
}

customElements.define("mi-elemento",SumarNumeros)
const mielemento = document.querySelector("mi-elemento")
mielemento.setAttribute("num1",5);
mielemento.setAttribute("num2",8);