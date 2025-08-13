const mensaje = document.getElementById(`mensaje`);

const elemento = document.getElementById(`item1`);


//mensaje.innerText = `cantidad de clases en el elemento: ${elemento.classList.length} `

//mensaje.innerText = `buscar clase particular: ${elemento.classList.item(4)} `

//mensaje.innerText = `buscar clase particular: ${elemento.classList.contains("borde")?"si":"no"} `

const txtclase = document.getElementById("clase");
const txtClaseNueva = document.getElementById("ClaseNueva");
const btnAdd = document.getElementById("btnAdd");
const btnRemove = document.getElementById("btnRemove");
const btnToggle = document.getElementById("btnToggle");
const btnReplace = document.getElementById("btnReplace");

btnAdd.addEventListener("click",()=>{
    elemento.classList.add(txtclase.value)
})
btnRemove.addEventListener("click",()=>{
    elemento.classList.remove(txtclase.value)
})
btnToggle.addEventListener("click",()=>{
    elemento.classList.toggle(txtclase.value)//,true
    mensaje.innerHTML = `clases en el item 1: ${elemento.getAttribute("class")}`
})
btnReplace.addEventListener("click",()=>{
    elemento.classList.replace(txtclase.value,txtClaseNueva.value)
    mensaje.innerHTML = `clases en el item 1: ${elemento.getAttribute("class")}`
})