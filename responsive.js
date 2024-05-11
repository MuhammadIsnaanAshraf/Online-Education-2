let burger = document.querySelector('.burger')
let navbar = document.querySelector('.navbar')
let Navbarlist = document.querySelector('.navbar-list')
let search = document.querySelector('.search')

burger.addEventListener('click' , ()=>{
     search.classList.toggle('v-class');
     Navbarlist.classList.toggle('v-class');
     navbar.classList.toggle('h-nav')
})