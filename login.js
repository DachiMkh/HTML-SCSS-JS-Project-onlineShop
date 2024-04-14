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
// function handleLogin() {
//     localStorage.setItem("isLoggedIn", "true");
//     updateHeader();
// }
// function updateHeader() {
//     let header = document.querySelector("clic");
//     if (localStorage.getItem("isLoggedIn") === "true") {
//         let userName = "John Doe";
//         header.querySelector(".head2 a").innerHTML = `<i class="fa-solid fa-user"></i> ${userName}`;
//         header.querySelector(".head2 a").setAttribute("href", "#");
//     }
// }
// updateHeader();