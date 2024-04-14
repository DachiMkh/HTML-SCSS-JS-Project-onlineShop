let btn = document.getElementById("clic")
let burger = document.querySelector(".burger")
btn.onclick = function(){
    burger.classList.toggle("sheweva")
    btn.classList.toggle("rotate")
}

let change = document.getElementById("change")
let storedUsername = localStorage.getItem("username");
if(storedUsername){
    change.innerText = storedUsername;
}
// ///////////////////
let main = document.getElementById("listMain")
let box = document.getElementById("inputBox")
let list = document.getElementById("list")
let btn3 = document.getElementById("btn3")
function saveTodoList() {
    const todos = document.querySelectorAll("#list li");
    const todoItems = Array.from(todos).map(todo => todo.innerHTML);
    localStorage.setItem("todoList", JSON.stringify(todoItems));
}
function loadTodoList() {
    const storedTodoList = localStorage.getItem("todoList");
    if (storedTodoList) {
        const todoItems = JSON.parse(storedTodoList);
        todoItems.forEach(item => {
            const li = document.createElement("li");
            li.setAttribute("id", "is");
            li.innerHTML = item;
            list.appendChild(li);
            addDeleteFunctionality(li);
        });
    }
}
function addDeleteFunctionality(li) {
    const span = document.createElement("span");
    const icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-trash");
    span.appendChild(icon);
    li.appendChild(span);
    span.onclick = function () {
        li.remove();
        saveTodoList();
    };
}
loadTodoList();
// //////////
btn3.onclick = function(){
    if(box.value == ""){
        alert("write something in the box")
    }
    else{
        let li = document.createElement("li")
        li.setAttribute("id", "is")
        li.innerHTML = box.value
        let span = document.createElement("span");
        let icon = document.createElement("i");
        icon.classList.add("fa-solid", "fa-trash");
        span.appendChild(icon);
        
        li.appendChild(span);
        list.appendChild(li);
        addDeleteFunctionality(li);
        saveTodoList();
    
    span.onclick = function(){
        li.remove();
    };
}

    box.value = "";
}