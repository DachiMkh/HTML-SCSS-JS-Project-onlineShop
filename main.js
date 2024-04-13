fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(end => myCards(end));

let sec = document.getElementById("main")
let input = document.getElementById("inp")

input.addEventListener("keyup", function(){
    sec.innerHTML = ""
    fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(end => myCards(end));
});

function myCards(things){
    for(let i = 0; i < things.length; i++){
        if(things[i].title.toLowerCase().includes(input.value.toLowerCase())){
        sec.innerHTML += `<div class = "tani">
        <img src="${things[i].image}" alt="poto">
        <h3>${things[i].title}</h3>
        <p>${things[i].price} $</p>
        <button>save</button>
    </div>`;
    }
}
}

// const hamburger = document.querySelector(".burger");
// const head =documen.querySelector(".head1");
// hamburger.addEventListener("click", () => {
//     hamburger.classList.toggle("active")
//     head.classList.toggle("active")
// })
// document.querySelectorAll(".head1").forEach(n =>
//      n.addEventListener("click", () => {
//         hamburger.classList.remove("active")
//         head.classList.remove("active")
//      }))

let btn = document.getElementById("clic")
let burger = document.querySelector(".burger")
btn.onclick = function(){
    burger.classList.toggle("sheweva")
    btn.classList.toggle("rotate")
}