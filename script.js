document.addEventListener('DOMContentLoaded', function () {
    const animalForm = document.getElementById('animal-form');
    const animalList = document.getElementById('animal-list');
    const animals = [];

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
        
        function formatDate(date) {
            const options = {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            };
        
            return date.toLocaleDateString('pt-BR', options);
        }
        const animal = {
            name: name,
            breed: breed,
            owner: owner,
            contact: contact,
            timestamp: formatDate(new Date()) // Formata a data e hora
        };

        animals.push(animal);

        // Limpa o formulário
        animalForm.reset();

        // Ordena a lista em ordem alfabética
        animals.sort((a, b) => a.name.localeCompare(b.name));

        displayAnimalList();
    });

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
                <strong>Entrada:</strong> ${animal.timestamp}<br>
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
});
