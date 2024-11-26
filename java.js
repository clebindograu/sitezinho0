// Referências aos elementos
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Adiciona uma nova tarefa
addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Por favor, insira uma tarefa!');
        return;
    }

    // Cria o item da lista
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // Botão de remoção
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remover';
    removeButton.addEventListener('click', () => {
        taskList.removeChild(listItem);
    });

    // Adiciona o botão ao item e o item à lista
    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);

    // Limpa o campo de entrada
    taskInput.value = '';
});