function addTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
tasks.push(task);
localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
}

function updateTask(index, newTask) {
    let tasks = getTasks();
    tasks[index] = newTask;
    localStorage.setItem ("tasks", JSON.stringify(tasks));
}

function deleteTask(index) {
    let tasks = getTasks();
    tasks.splice(index, 1);
    localStorage.setItem ("tasks", JSON.stringify(tasks));
    renderTasks();
}

function addTaskFromInput () {
    const input = document.getElementById("tarefa");
    const nova_tarefa = input.value.trim(); 

    if (nova_tarefa !== "" && !getTasks().includes(nova_tarefa)) {
        let tasks = getTasks();
        tasks.push(nova_tarefa);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        input.value = "";
        renderTasks();  
    }
    else {
        alert("A tarefa já está inclusa ou é inválida.")
    }
}

    function renderTasks () {
        const lista = document.getElementById("lista")
        lista.innerHTML = "";

        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.textContent = task;

            const btn = document.createElement("button")
            btn.textContent = "Remover";
            btn.onclick = () => {
            tasks.splice(index, 1);
            localStorage.setItem ("tasks", JSON.stringify(tasks));
            renderTasks();
            };
            
            li.appendChild(btn);
            lista.appendChild(li);

        });
    }

    window.onload = renderTasks;