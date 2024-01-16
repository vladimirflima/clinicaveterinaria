document.addEventListener('DOMContentLoaded', function () {
    const forgotPasswordForm = document.getElementById('forgot-password-form');

    forgotPasswordForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = document.getElementById('email').value;

        // Aqui você pode adicionar lógica para enviar instruções por e-mail ou processar de outra forma.
        // Isso pode envolver uma chamada a um servidor para lidar com a recuperação de senha.

        alert(`Instruções de recuperação de senha enviadas para: ${email}`);
    });
});
