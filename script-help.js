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
    window.location.href = 'index.html';
});

document.addEventListener('DOMContentLoaded', function () {
    const helpForm = document.getElementById('help-form');
    const developerInfo = document.getElementById('developer-info');
    const contactInfo = document.getElementById('contact-info');

    developerInfo.addEventListener('click', function () {
        contactInfo.style.display = (contactInfo.style.display === 'none') ? 'block' : 'none';
    })

    helpForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Aqui você pode adicionar lógica para enviar a mensagem ou processar de outra forma.
        // Isso pode envolver uma chamada a um servidor para lidar com as mensagens de ajuda.

        alert(`Mensagem enviada!\nNome: ${name}\nE-mail: ${email}\nMensagem: ${message}`);
        
        // Limpe o formulário após o envio
        helpForm.reset();
    });
});
