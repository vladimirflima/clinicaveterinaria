document.getElementById('open-owner').addEventListener('click', function () {
    window.location.href = 'tutor.html';
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
document.getElementById('logout').addEventListener('click', function () {
    window.location.href = 'inicio.html';
});
   
document.addEventListener('DOMContentLoaded', function () {
    const profileContainer = document.getElementById('profile-container');
    const changePasswordContainer = document.getElementById('change-password-container');
    const userNameElement = document.getElementById('user-name');
    const changePasswordForm = document.getElementById('change-password-form');
    const developerInfo = document.getElementById('developer-info');
    const contactInfo = document.getElementById('contact-info');

    developerInfo.addEventListener('click', function () {
        contactInfo.style.display = (contactInfo.style.display === 'none') ? 'block' : 'none';
    })

    const storedUsername = localStorage.getItem('username') || 'vladimir';

    // Exibe informações do usuário
    document.getElementById('view-profile').addEventListener('click', function () {
        profileContainer.style.display = 'block';
        changePasswordContainer.style.display = 'none';
        userNameElement.textContent = `Nome: ${storedUsername}`;
    });

    // Exibe formulário para trocar senha
    document.getElementById('change-password').addEventListener('click', function () {
        profileContainer.style.display = 'none';
        changePasswordContainer.style.display = 'block';
    });

    // Lógica para trocar a senha (você pode ajustar conforme necessário)
    changePasswordForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const currentPassword = document.getElementById('current-password').value;
        const newPassword = document.getElementById('new-password').value;

        // Adicione sua lógica para verificar a senha atual e trocar para a nova senha
        // Por exemplo, você pode verificar com os dados armazenados localmente

        // Simulando a troca de senha
        alert('Senha trocada com sucesso!');
        // Limpa os campos do formulário
        changePasswordForm.reset();
    });
});
