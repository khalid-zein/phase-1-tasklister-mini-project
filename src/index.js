document.addEventListener("DOMContentLoaded", () => {
  const myForm = document.getElementById("create-task-form");


  const todoItem = function (event) {
    event.preventDefault();
    const input = document.getElementById("new-task-description").value;
    const todoList = document.getElementById("tasks");
    const item = document.createElement("li");
    item.textContent = input;


    todoList.prepend(item);

    
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "x";
    item.append(deleteBtn);
    const deleteTodo = function () {
      item.remove()
    };
    deleteBtn.addEventListener("click", deleteTodo);
  };

  myForm.addEventListener("submit", todoItem);
});
