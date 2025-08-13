// const cuadro = document.getElementById("cuadro");
// const hijos = document.getElementsByClassName("hijos");
// const elementos = document.getElementsByTagName("span","div");
// const elementos1 = document.querySelector("#cuadro");
// const elementos2 = document.querySelectorAll(".hijos > span");
// const elementos3 = document.querySelector("#cuadro");
// cuadro.setAttribute("style","border: 4px solid red")
// // cuadro.toggleAttribute("style",force = true) // lo coloca
// // cuadro.toggleAttribute("style",force = false) // lo quito
// // cuadro.removeAttribute("style",force = false)
// console.log(cuadro)
// console.log(hijos)
// console.log(elementos)
// console.log(elementos1)
// console.log(elementos2)
// console.log(cuadro.getAttribute("style"))
// console.log(cuadro.getAttributeNames())

const texto = document.getElementById("texto")
const boton = document.getElementById("boton")

boton.addEventListener("click",()=>{
    texto.toggleAttribute("disabled");
})

