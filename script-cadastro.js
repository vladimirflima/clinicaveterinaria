document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signup-form');

    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('signup-username').value;
        const password = document.getElementById('signup-password').value;

        // Adicione lógica para enviar os dados do cadastro para o servidor ou armazenar localmente

        // Exemplo de armazenamento local (não seguro para produção)
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        alert('Cadastro realizado com sucesso! Faça login agora.');
        // Redirecione para a página de login ou outra página desejada
        window.location.href = 'login.html';
    });
});
