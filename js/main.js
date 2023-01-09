// Toggle menu icon
let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar')
menu.onclick = () =>{
    navbar.classList.toggle('open-menu')
    menu.classList.toggle('move')
}

let scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll",()=>{
    scrollTop.classList.toggle("scroll-active", window.scrollY > 0)
});
 