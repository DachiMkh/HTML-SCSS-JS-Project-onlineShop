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