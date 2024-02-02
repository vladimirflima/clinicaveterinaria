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
    localStorage.removeItem('user');
    window.location.href = 'index.html';
});

document.addEventListener('DOMContentLoaded', function () {
    const ownerForm = document.getElementById('owner-form');
    const ownerListContainer = document.getElementById('owner-list');  
    const owners = loadOwnersFromLocalStorage();
    const developerInfo = document.getElementById('developer-info');
    const contactInfo = document.getElementById('contact-info');
    const contactInput = document.getElementById('contact');

    developerInfo.addEventListener('click', function () {
        contactInfo.style.display = (contactInfo.style.display === 'none') ? 'block' : 'none';
    })
    document.querySelector('#sort-alphabetically').addEventListener('click', sortAlphabetically);
    document.querySelector('#sort-by-entry-time').addEventListener('click', sortByEntryTime);
    
    contactInput.addEventListener('input', function () {
        contactInput.value = contactInput.value.replace(/\D/g, '');
    });

    ownerForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const contact = contactInput.value;

        if (!/^\d{11}$/.test(contact)) {
            alert('O número de telefone deve conter exatamente 11 dígitos numéricos.');
            return;
        } 
        
        const owner = {
            name: name,
            contact: contact,
            timestamp: new Date()
        };
        

        owners.push(owner);

        ownerForm.reset();

        saveOwnersToLocalStorage();

        displayOwnerList();
    });

    function formatDate(date) {
        // Certifique-se de que 'date' é uma instância válida de Date
        if (!(date instanceof Date)) {
            // Se não for uma instância válida, crie uma nova instância de Date
            date = new Date(date);
        }
        
        const options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        };
    
        return date.toLocaleTimeString('pt-BR', options);
    }

    function displayOwnerList() {
        // Limpar a lista
        ownerListContainer.innerHTML = '';

        // Exibir a lista atualizada
        owners.forEach((owner, index) => {
            const ownerEntry = document.createElement('li');
            ownerEntry.innerHTML = `
                <strong>Nome:</strong> ${owner.name}<br>
                <strong>Contato:</strong> ${owner.contact}<br>
                <button onclick="editOwner(${index})">Editar</button>
                <button onclick="deleteOwner(${index})">Excluir</button>
            `;
            ownerListContainer.appendChild(ownerEntry);
        });
    }

    // Função para salvar os tutores no localStorage
    function saveOwnersToLocalStorage() {
        localStorage.setItem('owners', JSON.stringify(owners));
    }

    // Função para carregar tutores do localStorage
    function loadOwnersFromLocalStorage() {
        const savedOwners = localStorage.getItem('owners');
        return savedOwners ? JSON.parse(savedOwners) : [];
    }

    // Função para editar um tutor
    window.editOwner = function (index) {
        const owner = owners[index];
        document.getElementById('name').value = owner.name;
        document.getElementById('contact').value = owner.contact;

        // Remover o tutor da lista
        owners.splice(index, 1);

        displayOwnerList();
    };

    // Função para excluir um tutor
    window.deleteOwner = function (index) {
        // Remover o tutor da lista
        owners.splice(index, 1);

        saveOwnersToLocalStorage();  // Salvar os tutores atualizados no localStorage

        displayOwnerList();
    };
     // Função para ordenar a lista em ordem alfabética
     function sortAlphabetically() {
        owners.sort((a, b) => a.name.localeCompare(b.name));
        displayOwnerList();
    }

    // Função para ordenar a lista por ordem de entrada
    function sortByEntryTime() {
        owners.sort((a, b) => a.timestamp - b.timestamp);
        displayOwnerList();
    }
    
    // Chame a função para exibir a lista no início
    displayOwnerList();
});
