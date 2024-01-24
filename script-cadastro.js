document.getElementById('open-help').addEventListener('click', function () {
    window.location.href = 'help2.html';
});

document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signup-form');
    const developerInfo = document.getElementById('developer-info');
    const contactInfo = document.getElementById('contact-info');
   
    developerInfo.addEventListener('click', function () {
        contactInfo.style.display = (contactInfo.style.display === 'none') ? 'block' : 'none';
    })

    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('signup-username').value;
        const password = document.getElementById('signup-password').value;

        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        alert('Cadastro realizado com sucesso! Faça login agora.');
 
        window.location.href = 'index.html';
    });
});
