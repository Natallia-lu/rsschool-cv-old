const burg = document.querySelector('#icon-burg');
const popup = document.querySelector("#popup");
const body = document.body;
const menu = document.querySelector("#nav").cloneNode(1);
const links = Array.from(menu.children);

burg.addEventListener('click', openMenu);

function openMenu(event) {
  event.preventDefault();
  popup.classList.toggle('open');
  burg.classList.toggle('active');
  body.classList.toggle('noscroll');

  menuPopup();

};

  function menuPopup() {
  popup.append(menu);
  menu.classList.toggle('burger');

};
  
links.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

function closeMenu() {
  popup.classList.remove('open');
  burg.classList.remove('active');
  body.classList.remove('noscroll');
  menu.classList.remove('burger');
}





