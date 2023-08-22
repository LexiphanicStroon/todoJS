export function renderElements(arr, parent) {
    arr.forEach(element => {
        const taskMarkup = `<div class="task__card">
        <p class="task__title">${element.title}</p>
        <p class="task__desc">${element.desc}</p>
        <p class="task__due">${element.dueDate}</p>
        <p class="task__priority">${element.priority}</p>
      </div>`
        const taskDiv = document.createElement('div');
        const deleteBtn = document.createElement('button');
        // deleteBtn.addEventListener('click', );
        deleteBtn.textContent = 'Delete';
        taskDiv.innerHTML = taskMarkup;
        taskDiv.appendChild(deleteBtn);
        parent.appendChild(taskDiv);
    });
}

export function deleteElement() {
    
}