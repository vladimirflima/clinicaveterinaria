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
    const animalForm = document.getElementById('animal-form');
    const animalListContainer = document.getElementById('animal-list');
    const ownerForm = document.getElementById('owner-form');
    const ownerList = document.getElementById('owner-list');  
    const animals = loadAnimalsFromLocalStorage();
    const developerInfo = document.getElementById('developer-info');
    const contactInfo = document.getElementById('contact-info');

    developerInfo.addEventListener('click', function () {
        contactInfo.style.display = (contactInfo.style.display === 'none') ? 'block' : 'none';
    })
    document.querySelector('#sort-alphabetically').addEventListener('click', sortAlphabetically);
    document.querySelector('#sort-by-entry-time').addEventListener('click', sortByEntryTime);

//INICIO TUTOR
    ownerForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const contact = document.getElementById('contact').value;

        const owner = {
            name: name,
            contact: contact,
        };

        owners.push(owner);

        ownerForm.reset();

        saveOwnersToLocalStorage();

        displayOwnerList();
    });

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


    function displayOwnerList() {
        // Limpar a lista
        ownerList.innerHTML = '';

        // Exibir a lista atualizada
        owners.forEach((owner, index) => {
            const ownerEntry = document.createElement('li');
            ownerEntry.innerHTML = `
                <strong>Nome:</strong> ${owner.name}<br>
                <strong>Contato:</strong> ${owner.contact}<br>
                <button onclick="editOwner(${index})">Editar</button>
                <button onclick="deleteOwner(${index})">Excluir</button>
            `;
            ownerList.appendChild(ownerEntry);
        });
    }
      
//FIM TUTOR
//INICIO ANIMAL
    animals.push(...loadAnimalsFromLocalStorage());
    displayAnimalList();
    
    animalForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const breed = document.getElementById('breed').value;
        const owner = document.getElementById('owner').value;
        const contact = document.getElementById('contact').value;

        if (!/^\d{11,12}$/.test(contact)) {
            alert('O número de telefone deve conter de 11 a 12 dígitos numéricos.');
            return;
        } // Validação do campo de telefone
        
        const timestamp = new Date(); // Cria um objeto Date para a data e hora atual

        const animal = {
            name: name,
            breed: breed,
            owner: owner,
            contact: contact,
            timestamp: timestamp // Armazena o objeto Date, não a string formatada
        };

        animals.push(animal);

        animalForm.reset(); // Limpa o formulário

        saveAnimalsToLocalStorage();
        
        displayAnimalList();
    });
    
    function formatDate(date) {
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
    
    function displayAnimalList() {
        // Limpa a lista
        animalListContainer.innerHTML = '';

        // Exibe a lista atualizada
        animals.forEach((animal, index) => {
            const animalEntry = document.createElement('li');
            animalEntry.innerHTML = `
                <strong>Nome:</strong> ${animal.name}<br>
                <strong>Raça:</strong> ${animal.breed}<br>
                <strong>Dono:</strong> ${animal.owner}<br>
                <strong>Contato:</strong> ${animal.contact}<br>
                <strong>Entrada:</strong> ${formatDate(animal.timestamp)}<br>
                <button onclick="editAnimal(${index})">Editar</button>
                <button onclick="deleteAnimal(${index})">Excluir</button>
            `;
            animalListContainer.appendChild(animalEntry);
        });
    }

    // Função para salvar os animais no localStorage
     function saveAnimalsToLocalStorage() {
        localStorage.setItem('animals', JSON.stringify(animals));
    }

    // Função para carregar animais do localStorage
    function loadAnimalsFromLocalStorage() {
        const savedAnimals = localStorage.getItem('animals');
        return savedAnimals ? JSON.parse(savedAnimals) : [];
    }

    // Função para editar um animal
    window.editAnimal = function (index) {
        const animal = animals[index];
        document.getElementById('name').value = animal.name;
        document.getElementById('breed').value = animal.breed;
        document.getElementById('owner').value = animal.owner;
        document.getElementById('contact').value = animal.contact;

        // Remove o animal da lista
        animals.splice(index, 1);

        displayAnimalList();
    };

    // Função para excluir um animal
    window.deleteAnimal = function (index) {
        // Remove o animal da lista
        animals.splice(index, 1);
        
        saveAnimalsToLocalStorage();  // Salva os animais atualizados no localStorage
        
        displayAnimalList();
    };
    
    
     // Função para ordenar a lista em ordem alfabética
     function sortAlphabetically() {
        animals.sort((a, b) => a.name.localeCompare(b.name));
        displayAnimalList();
    }

    // Função para ordenar a lista por ordem de entrada
    function sortByEntryTime() {
        animals.sort((a, b) => a.timestamp - b.timestamp);
        displayAnimalList();
    }

    // Chame a função para exibir a lista no início
    displayAnimalList();

    
    }
);
