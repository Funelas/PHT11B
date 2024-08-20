const todoInput = document.querySelector(".todo-input");
const plusButton = document.querySelector(".todo-button");
const toDoList = document.querySelector(".todo-list");
const filterToDo = document.querySelector(".filter-todo");

plusButton.addEventListener("click", addTodo);
filterToDo.addEventListener("change", filterToDos);

function addTodo(e) {
    if (todoInput.value === '' || todoInput.value.trim() === ''){
        console.log("Error")
        alert("Please Input a Valid Task Description First")
    } 
    else{
        console.log(todoInput.value)
        e.preventDefault();
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
    
        const newToDo = document.createElement("li")
        newToDo.classList.add("todo-item");
        newToDo.innerText = todoInput.value.trim();
        todoDiv.appendChild(newToDo);
        console.log("Code Ran.");
    
        const completedButton = document.createElement("button");
        completedButton.classList.add("complete-btn");
        completedButton.innerHTML = '<i class="fas fa-check"></i>'
        completedButton.addEventListener("click", deleteOrCompleteTodo)
        todoDiv.appendChild(completedButton);
    
        const trashButton = document.createElement("button");
        trashButton.classList.add("trash-btn");
        trashButton.innerHTML = '<i class= "fas fa-trash"></i>';
        trashButton.addEventListener("click", deleteOrCompleteTodo)
        todoDiv.appendChild(trashButton);
        toDoList.appendChild(todoDiv);
        todoInput.value = "";
        if(filterToDo.value === "completed"){
            todoDiv.style.display = "none"
        }

    }
    
    function deleteOrCompleteTodo(e) {
        const item = e.target;
        console.log(item);

        if (item.classList[0] === "trash-btn"){
            const todo = item.parentElement;
            todo.classList.add("fall");

            todo.addEventListener("transitionend", function(){
                todo.remove();
            });
        }

        if (item.classList[0] === "complete-btn"){
            const todo = item.parentElement;
            todo.classList.toggle("completed");
        }
    }



}

function filterToDos(e){
    const todos = toDoList.childNodes;
    console.log(e.target)
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case "all": 
            todo.style.display = "flex";
            break;
            case "completed":
                if (todo.classList.contains("completed")){
                    todo.style.display = "flex";
                    break;
                }
                else{
                    todo.style.display = "none";
                    break;
                }
            case "uncompleted":
                if (!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                    break;
                } else{
                    todo.style.display = "none";
                    break;
                }
        }
    });
}