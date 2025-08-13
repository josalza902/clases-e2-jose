const elemento = document.getElementById("contactos");

function crear_cuadro_principal() {
    // Crear el cuadro principal para #contactos
    const divPrincipal = document.createElement("div");
    divPrincipal.classList.add("cuadro"); // Añadir clase al cuadro principal

    // Agregar el cuadro principal al contenedor de contactos
    elemento.appendChild(divPrincipal);

    return divPrincipal;
}

function nuevo_item(id) {
  // Obtener el cuadro principal o crear uno si no existe
  let divPrincipal = document.querySelector(".cuadro");
  if (!divPrincipal) {
    divPrincipal = crear_cuadro_principal(); // Crear cuadro principal si no existe
  }

  // Crear el cuadro interno dentro del cuadro principal
  const cuadroInterno = document.createElement("div");
  cuadroInterno.classList.add("cuadro_interno"); // Clase para el cuadro interno

  // Hacer la solicitud para obtener los usuarios
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()) // Convertir la respuesta a JSON
    .then(data => {
      // Obtener el usuario correspondiente por id
      const user = data[id];
      
      // Asignar la información del usuario a cuadroInterno
      cuadroInterno.textContent = `
        Nombre: ${user.name}
        \n Nombre de usuario: ${user.username}
        \n Email: ${user.email}
        \n Dirección: ${user.address.street}, ${user.address.city}, ${user.address.zipcode}
      `;

      // Añadir el cuadro interno al cuadro principal
      divPrincipal.appendChild(cuadroInterno);
    })
    .catch(error => {
      console.error('Hubo un error:', error);
      cuadroInterno.textContent = 'Hubo un error al cargar los datos.';
      divPrincipal.appendChild(cuadroInterno); // Si hay un error, agregar el mensaje de error
    });
}

// Llamar a la función para crear varios cuadros para diferentes usuarios
nuevo_item(0);  // Primer usuario
nuevo_item(1);  // Segundo usuario
nuevo_item(2);  // Tercer usuario
nuevo_item(3);  // Cuarto usuario
