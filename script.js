document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const message = document.getElementById('message');

    if (username === '' || password === '') {
        message.style.color = 'red';
        message.textContent = 'Por favor, completa todos los campos.';
    } else {
        message.style.color = 'green';
        message.textContent = '¡Inicio de sesión exitoso!';
    }
});