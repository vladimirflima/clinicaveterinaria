document.getElementById('open-owner').addEventListener('click', function () {
    // Use window.location para redirecionar para o arquivo tutor.html
    window.location.href = 'tutor.html';
    // Adicione aqui o código para exibir a lista de tutores (se necessário)
});
document.getElementById('open-usuario').addEventListener('click', function () {
    window.location.href = 'usuario.html';
});

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Obter os valores do formulário
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Adicione aqui a lógica de autenticação, por exemplo, verificar se o usuário e senha são válidos

        // Exemplo simples de verificação (substitua por sua lógica real)
        if (username === 'usuario' && password === 'senha') {
            alert('Login bem-sucedido!');
        } else {
            alert('Usuário ou senha inválidos. Tente novamente.');
        }
    });
});
