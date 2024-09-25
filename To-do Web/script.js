function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    // Create complete button
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.onclick = function () {
        completeTask(taskItem);
    };

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
        deleteTask(taskItem);
    };

    taskItem.appendChild(completeButton);
    taskItem.appendChild(deleteButton);
    document.getElementById('pendingTasks').appendChild(taskItem);

    // Clear input
    taskInput.value = '';
}

function completeTask(taskItem) {
    const completedTasks = document.getElementById('completedTasks');
    taskItem.classList.add('completed');
    completedTasks.appendChild(taskItem);
    taskItem.removeChild(taskItem.childNodes[0]); // Remove complete button
}

function deleteTask(taskItem) {
    const pendingTasks = document.getElementById('pendingTasks');
    const completedTasks = document.getElementById('completedTasks');
    if (pendingTasks.contains(taskItem)) {
        pendingTasks.removeChild(taskItem);
    } else {
        completedTasks.removeChild(taskItem);
    }
}
