document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("todo-form");
    const input = document.getElementById("task");
    const taskList = document.getElementById("task-list");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const taskText = input.value.trim();
        if (taskText === "") return;

        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function () {
            span.classList.toggle("completed");
        });

        const span = document.createElement("span");
        span.textContent = taskText;

        const img = document.createElement("img");
        img.src = "images-2.png"; 
        img.alt = "delete";
        img.className = "trash-icon";

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.appendChild(img);

        deleteBtn.addEventListener("click", function () {
            li.remove();
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        input.value = ""; 
    });

});