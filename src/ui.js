export function renderElements(arr, parent) {
  arr.forEach((element) => {
    const taskMarkup = `
    <div class="parent">
    <div class="col">
    <p class="task__title">Task: ${element.title}</p>
        <p class="task__desc">Description: ${element.desc}</p>
        </div>    
        <div class ="col">
        <p class="task__due">Due Date: ${element.dueDate}</p>
        <p class="task__priority">Priority: ${element.priority}</p>
        </div>
        </div>`;
        
    const taskDiv = document.createElement("div");
    const deleteBtn = document.createElement("button");
    // deleteBtn.addEventListener('click', );
    deleteBtn.textContent = "Delete";
    taskDiv.innerHTML = taskMarkup;
    taskDiv.classList.add('task__card');
    taskDiv.appendChild(deleteBtn);
    parent.appendChild(taskDiv);
  });
}

export function deleteElement() {}
