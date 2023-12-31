document.getElementById('open-owner').addEventListener('click', function () {
    // Use window.location para redirecionar para o arquivo tutor.html
    window.location.href = 'tutor.html';
    // Adicione aqui o código para exibir a lista de tutores (se necessário)
});
document.getElementById('open-usuario').addEventListener('click', function () {
    window.location.href = 'usuario.html';
});

document.addEventListener('DOMContentLoaded', function () {
    const animalForm = document.getElementById('animal-form');
    const animalList = document.getElementById('animal-list');
    const animals = [];
    const developerInfo = document.getElementById('developer-info');
    const contactInfo = document.getElementById('contact-info');

    developerInfo.addEventListener('click', function () {
        contactInfo.style.display = (contactInfo.style.display === 'none') ? 'block' : 'none';
    })
    document.querySelector('#sort-alphabetically').addEventListener('click', sortAlphabetically);
    document.querySelector('#sort-by-entry-time').addEventListener('click', sortByEntryTime);

    animalForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const breed = document.getElementById('breed').value;
        const owner = document.getElementById('owner').value;
        const contact = document.getElementById('contact').value;

        // Validação do campo de telefone
        if (!/^\d{11,12}$/.test(contact)) {
            alert('O número de telefone deve conter de 11 a 12 dígitos numéricos.');
            return;
        }
        
        const timestamp = new Date(); // Crie um objeto Date para a data e hora atual

        const animal = {
            name: name,
            breed: breed,
            owner: owner,
            contact: contact,
            timestamp: timestamp // Armazene o objeto Date, não a string formatada
        };

        animals.push(animal);

        // Limpa o formulário
        animalForm.reset();

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
        animalList.innerHTML = '';

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
            animalList.appendChild(animalEntry);
        });
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
