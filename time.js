let time = document.getElementById("time");
setInterval(() =>{
    let timeNew = new Date();
    time.innerHTML = timeNew.toLocaleTimeString();  
},1000)

let prev = document.getElementById("prev")
let nxt = document.getElementById("next")
let img = document.getElementById("image")
let imageList =[
    "https://mrwallpaper.com/images/hd/anime-city-ocean-night-view-kj5ay7e8sml40t87.jpg",
    "https://wallpaperaccess.com/full/3566407.jpg",
    "https://static.vecteezy.com/system/resources/previews/030/600/947/large_2x/city-view-with-japanese-style-animation-ai-generative-free-photo.jpg",
    "https://i.pinimg.com/originals/2c/b5/2e/2cb52e1b2bf854fd3e2f50682b842c8a.png",
    "https://wallpapers.com/images/featured/ultra-hd-wazf67lzyh5q7k32.jpg"
];

let i = 0;
next.onclick = function (){
    img.setAttribute("src", imageList[i])
    if (i >= imageList.length - 1){
        i = 0
    } 
    else{
        i++
    }
}
prev.onclick = function(){
    img.setAttribute("src", imageList[i])
    if (i <= 0){
        i = imageList.length - 1
    } 
    else{
        i--
    }
}

let btn = document.getElementById("clic")
let burger = document.querySelector(".burger")
btn.onclick = function(){
    burger.classList.toggle("sheweva")
    btn.classList.toggle("rotate")
}