const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let editId = null;

// Add Task
addBtn.addEventListener("click", () => {
    let task = input.value.trim();
    if (task === "") return alert("Enter a task!");

    if (editId !== null) {
        document.getElementById(editId).querySelector(".task-text").innerText = task;
        editId = null;
        addBtn.innerText = "Add";
    } else {
        addTask(task);
    }

    input.value = "";
});

// Create Task Element
function addTask(task) {
    const li = document.createElement("li");
    const id = "task-" + Date.now();
    li.className = "task-item";
    li.id = id;

    li.innerHTML = `
        <span class="task-text">${task}</span>
        <div class="btn-group">
            <button class="edit-btn" onclick="editTask('${id}')">Edit</button>
            <button class="delete-btn" onclick="deleteTask('${id}')">Delete</button>
        </div>
    `;

    taskList.appendChild(li);
}

// Edit Task
function editTask(id) {
    const li = document.getElementById(id);
    input.value = li.querySelector(".task-text").innerText;
    editId = id;
    addBtn.innerText = "Update";
}

// Delete Task
function deleteTask(id) {
    document.getElementById(id).remove();
}
