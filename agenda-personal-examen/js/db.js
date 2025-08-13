// db.js

let db;

const request = indexedDB.open('AgendaDB', 1);

request.onupgradeneeded = (event) => {
    db = event.target.result;

    const usuariosStore = db.createObjectStore('usuarios', { keyPath: 'email' });
    usuariosStore.createIndex('email', 'email', { unique: true });

    const actividadesStore = db.createObjectStore('actividades', { autoIncrement: true });
    actividadesStore.createIndex('usuarioEmail', 'usuarioEmail', { unique: false });
    actividadesStore.createIndex('fecha', 'fecha', { unique: false });
};

request.onsuccess = (event) => {
    db = event.target.result;
    console.log('✅ Base de datos abierta correctamente');

    // Aquí podemos habilitar el resto de la app si quieres
    if (typeof iniciarApp === 'function') {
        iniciarApp(); // Lanzar la app cuando db esté lista
    }
};

request.onerror = (event) => {
    console.error('❌ Error al abrir IndexedDB:', event.target.errorCode);
};
