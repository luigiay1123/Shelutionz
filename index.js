const burgerMenu = document.querySelector('.burgerMenu');

const offScreenMenu = document.querySelector('.off-screen-menu');

const closeImage = document.querySelector('.closeImage');

burgerMenu.addEventListener("click", ()=>{
  offScreenMenu.classList.toggle('visible');
});

closeImage.addEventListener("click", ()=>{
  offScreenMenu.classList.toggle('visible');
});