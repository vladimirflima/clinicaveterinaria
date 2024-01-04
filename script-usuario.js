document.getElementById('open-owner').addEventListener('click', function () {
    // Use window.location para redirecionar para o arquivo tutor.html
    window.location.href = 'tutor.html';
    // Adicione aqui o código para exibir a lista de tutores (se necessário)
});
document.getElementById('open-usuario').addEventListener('click', function () {
    window.location.href = 'usuario.html';
});
document.getElementById('open-animal').addEventListener('click', function () {
    window.location.href = 'animal.html';
});
document.getElementById('open-help').addEventListener('click', function () {
    window.location.href = 'help.html';
});

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Adicione lógica para verificar o login (pode ser comparando com dados armazenados localmente ou enviando para o servidor)

        // Exemplo de verificação local (não seguro para produção)
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        if (username === storedUsername && password === storedPassword) {
            alert('Login bem-sucedido!');
            // Redirecione para a página principal ou outra página desejada após o login
            window.location.href = 'index.html';
        } else {
            alert('Usuário ou senha incorretos. Tente novamente.');
        }
    });
});