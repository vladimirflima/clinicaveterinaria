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
    const animals = loadAnimalsFromLocalStorage();
    const developerInfo = document.getElementById('developer-info');
    const contactInfo = document.getElementById('contact-info');
    const contactInput = document.getElementById('contact');
    
    const menuIcon = document.querySelector('.menu-icon');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const menuButtons = document.querySelectorAll('.menu button');

    developerInfo.addEventListener('click', function () {
        contactInfo.style.display = (contactInfo.style.display === 'none') ? 'block' : 'none';
    })

    document.querySelector('#sort-alphabetically').addEventListener('click', sortAlphabetically);
    document.querySelector('#sort-by-entry-time').addEventListener('click', sortByEntryTime);

    contactInput.addEventListener('input', function () {
        contactInput.value = contactInput.value.replace(/\D/g, '');
    });
    
    menuIcon.addEventListener('click', function () {
        console.log('Clique no ícone do menu');
        dropdownMenu.classList.toggle('active');
    });

    menuButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Oculte o menu suspenso após clicar em um item
            dropdownMenu.classList.remove('active');
        });
    });

    window.addEventListener('resize', function () {
        dropdownMenu.classList.remove('active');
    });

    animalForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const breed = document.getElementById('breed').value;
        const owner = document.getElementById('owner').value;
        const contact = contactInput.value;

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
});
