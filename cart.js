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

// function saveItem(title, price, image) {
//     let savedItemsDiv = document.getElementById("savedItems");
//     savedItemsDiv.innerHTML += `<div>
//     <img src="${image}" alt="poto">
//     <h3>${title}</h3>
//     <p>${price} $</p>
//     <button><i class="fa-solid fa-trash"></i></button>
//     </div>`;
// }






