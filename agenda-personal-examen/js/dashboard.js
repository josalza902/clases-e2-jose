
// Abrir la base de datos
const request = indexedDB.open('AgendaDB', 1);

request.onupgradeneeded = (event) => {
    db = event.target.result;
    // Crear objectStores si no existen
    if (!db.objectStoreNames.contains('actividades')) {
        const store = db.createObjectStore('actividades', { keyPath: 'id', autoIncrement: true });
        store.createIndex('usuarioEmail', 'usuarioEmail', { unique: false });
    }
    if (!db.objectStoreNames.contains('usuarios')) {
        const store = db.createObjectStore('usuarios', { keyPath: 'email' });
    }
};

request.onsuccess = (event) => {
    db = event.target.result;
    console.log('✅ Base de datos abierta en dashboard');
    iniciarDashboard();
};

request.onerror = (event) => {
    console.error('❌ Error abriendo la base de datos:', event.target.errorCode);
};

// Función para iniciar el dashboard
function iniciarDashboard() {
    mostrarNombreUsuario();
    mostrarActividades();
}

// Función para mostrar el nombre del usuario
function mostrarNombreUsuario() {
    const usuario = JSON.parse(sessionStorage.getItem('usuarioActivo'));
    if (usuario) {
        document.getElementById('nombreUsuario').textContent = usuario.nombre;
    } else {
        console.error('No hay usuario activo');
    }
}

// Función para mostrar actividades
function mostrarActividades() {
    const usuario = JSON.parse(sessionStorage.getItem('usuarioActivo'));
    if (!usuario) {
        console.error('No hay usuario activo');
        return;
    }

    // Verificar que la base de datos está abierta
    if (!db) {
        console.error('Base de datos no abierta correctamente');
        return;
    }

    const transaction = db.transaction(['actividades'], 'readonly');
    const store = transaction.objectStore('actividades');
    const index = store.index('usuarioEmail');
    const request = index.getAll(usuario.email);

    request.onsuccess = (event) => {
        const actividades = event.target.result;
        console.log('✅ Actividades cargadas:', actividades);

        const listaActividades = document.getElementById('listaActividades');
        listaActividades.innerHTML = '';  // Limpiar la lista antes de mostrar las actividades

        actividades.forEach((actividad) => {
            const li = document.createElement('li');
            li.textContent = `${actividad.fecha} - ${actividad.descripcion}`;
            listaActividades.appendChild(li);
        });
    };

    request.onerror = (event) => {
        console.error('❌ Error cargando actividades:', event.target.errorCode);
    };
}
