const mensaje = document.getElementById("mensaje");
const elemento = document.querySelector("#contenedor");

//mensaje.innerHTML = `nombredelnodo:${elemento.nodeName}`;
//mensaje.innerHTML = `contenido del texto de la etiqueta:${elemento.textContent}`;
//elemento.textContent = " nuevo texto"
//elemento.textContent = ""

//mensaje.innerHTML = `contenido del texto de la etiqueta:${elemento.outerText}`;
//elemento.outerText = "chatpm laura";
//elemento.outerText = "<html>";

// mensaje.innerText =`contenido del elemento :${elemento.innerHTML}`

//mensaje.innerHTML ="<strong>nuevo texto</strong>"
//mensaje.innerText =""

//mensaje.innerHTML = `contenido del texto de la etiqueta:${elemento.outerHTML}`;

//elemento.outerHTML = "<p> Nuevo Texto</p>"

elemento.insertAdjacentHTML(4,"hello")