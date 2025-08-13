// registro.js
document.getElementById('botonRegistro').addEventListener('click', () => {
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const contraseña = document.getElementById('contraseña').value.trim();

    if (!nombre || !email || !contraseña) {
        alert('Por favor completa todos los campos');
        return;
    }

    const transaction = db.transaction(['usuarios'], 'readwrite');
    const store = transaction.objectStore('usuarios');
    const nuevoUsuario = { nombre, email, contraseña };

    const request = store.add(nuevoUsuario);

    request.onsuccess = () => {
        alert('Usuario registrado exitosamente');
        window.location.href = 'index.html';
    };

    request.onerror = () => {
        alert('Este correo ya está registrado');
    };
});

// index.js o formulario.js

function iniciarApp() {
    const botonLogin = document.getElementById('botonentrar');
    const botonRegistrar = document.getElementById('botonregistrar'); // nuevo id correcto

    botonLogin.addEventListener('click', loginUsuario);
    botonRegistrar.addEventListener('click', () => {
        window.location.assign('formulario.html');
    });
}

function loginUsuario() {
    const email = document.getElementById('email').value.trim();
    const contraseña = document.getElementById('contraseña').value.trim();

    const transaction = db.transaction(['usuarios'], 'readonly');
    const store = transaction.objectStore('usuarios');
    const request = store.get(email);

    request.onsuccess = (event) => {
        const usuario = event.target.result;
        if (usuario && usuario.contraseña === contraseña) {
            console.log('✅ Inicio de sesión exitoso');
            sessionStorage.setItem('usuarioActivo', JSON.stringify(usuario));
            window.location.assign('dashboard.html');
        } else {
            alert('❌ Usuario o contraseña incorrectos');
        }
    };
}
