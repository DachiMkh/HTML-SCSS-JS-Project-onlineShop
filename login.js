let btn = document.getElementById("clic")
let burger = document.querySelector(".burger")
btn.onclick = function(){
    burger.classList.toggle("sheweva")
    btn.classList.toggle("rotate")
}
let regex = /^[A-Z][a-z]{0,}[0-9]{2,}$/gm
let inp = document.getElementById("inp");
let btn2 = document.getElementById("btn2")

inp.onkeyup = function(){
    if(regex.test(inp.value)){
        inp.style.border = "2px solid green";
        btn2.disabled = false;
        btn2.style.cursor = "pointer";
    }
    else{
        inp.style.border = "2px solid red";
        btn2.disabled = true;
        btn2.style.cursor = "not-allowed";
    }
}
let inp2 = document.getElementById("inp2")
let change = document.getElementById("change")
btn2.onclick = function(e) {
    e.preventDefault();
    if(inp.value.trim() !== ""){
    localStorage.setItem("username", inp2.value);
    change.innerText = inp2.value;
    inp.value = "";
    inp2.value = "";
    inp.focus();
    }
    else{
        btn2.style.cursor = "not-allowed"; 
    }
}
let storedUsername = localStorage.getItem("username");
if(storedUsername){
    change.innerText = storedUsername;
}