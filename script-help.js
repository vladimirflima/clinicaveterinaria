document.addEventListener('DOMContentLoaded', function () {
    const helpForm = document.getElementById('help-form');

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
