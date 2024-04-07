let time = document.getElementById("time");
setInterval(() =>{
    let timeNew = new Date();
    time.innerHTML = timeNew.toLocaleTimeString();  
},1000)
