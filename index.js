
const hamburger = document.getElementById('menu');
const cross = document.getElementById('cross');

// const navbar = document.querySelector('.navbar');
const navbar = document.getElementById('navbar');
console.log("Działam")
// Dodanie obsługi zdarzenia kliknięcia w przycisk hamburgera

function clickHandle(){ 
    console.log(navbar.classList)
    if(!navbar.classList.contains("open"))
        navbar.classList.add("open")
    else
        navbar.classList.remove("open")
}

hamburger.addEventListener("click", clickHandle);
