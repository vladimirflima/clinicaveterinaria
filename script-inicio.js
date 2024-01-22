document.getElementById('open-help').addEventListener('click', function () {
    window.location.href = 'help2.html';
});

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const developerInfo = document.getElementById('developer-info');
    const contactInfo = document.getElementById('contact-info');
    
    const storedUsername = localStorage.getItem('username') || 'vladimir';
    const storedPassword = localStorage.getItem('password') || '1234';

    developerInfo.addEventListener('click', function () {
        contactInfo.style.display = (contactInfo.style.display === 'none') ? 'block' : 'none';
    })

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Adicione lógica para verificar o login (pode ser comparando com dados armazenados localmente ou enviando para o servidor)


        if (username === storedUsername && password === storedPassword) {
            alert('Login bem-sucedido!');
            // Redirecione para a página principal ou outra página desejada após o login
            window.location.href = 'animal.html';
        } else {
            alert('Usuário ou senha incorretos. Tente novamente.');
        }
    });
});