// index.js
document.getElementById('botonEntrar').addEventListener('click', () => {
    const email = document.getElementById('email').value.trim();
    const contraseña = document.getElementById('contraseña').value.trim();

    if (!email || !contraseña) {
        alert('Por favor completa todos los campos');
        return;
    }

    const transaction = db.transaction(['usuarios'], 'readonly');
    const store = transaction.objectStore('usuarios');
    const request = store.get(email);

    request.onsuccess = (e) => {
        const usuario = e.target.result;
        if (usuario && usuario.contraseña === contraseña) {
            localStorage.setItem('usuarioActivo', email);
            window.location.href = 'dashboard.html';
        } else {
            alert('Email o contraseña incorrectos');
        }
    };

    request.onerror = () => {
        alert('Error al buscar usuario');
    };
});

document.getElementById('botonRegistrar').addEventListener('click', () => {
    window.location.href = 'registro.html';
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
