const botonHamburguesa = document.getElementById("btnHamburguesa");
const menu = document.querySelector(".menu-list");

botonHamburguesa.addEventListener('click', function (){
    menu.classList.toggle('active');
})