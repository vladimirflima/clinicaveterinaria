document.getElementById('open-help').addEventListener('click', function () {
    window.location.href = 'help2.html';
});

document.addEventListener('DOMContentLoaded', function () {
    const forgotPasswordForm = document.getElementById('forgot-password-form');
    const developerInfo = document.getElementById('developer-info');
    const contactInfo = document.getElementById('contact-info');

    developerInfo.addEventListener('click', function () {
        contactInfo.style.display = (contactInfo.style.display === 'none') ? 'block' : 'none';
    })

    forgotPasswordForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = document.getElementById('email').value;

        // Aqui você pode adicionar lógica para enviar instruções por e-mail ou processar de outra forma.
        // Isso pode envolver uma chamada a um servidor para lidar com a recuperação de senha.

        alert(`Instruções de recuperação de senha enviadas para: ${email}`);
    });
});
