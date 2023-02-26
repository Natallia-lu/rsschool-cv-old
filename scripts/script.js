/* Burger */

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
};

/* Prices */

const pricesBtn = document.querySelectorAll('.prices-change');
const btns = Array.from(pricesBtn);
btns.forEach((pricesBtn) => {
  pricesBtn.addEventListener('click',openPrices);

  function openPrices(event) {
    event.preventDefault();

    if (pricesBtn.classList.contains('opened')) {
      
      btns.forEach(pricesBtn => pricesBtn.classList.remove('opened'));
      btns.forEach(pricesBtn => pricesBtn.nextElementSibling.classList.remove('opened'));
      
    } else {

      btns.forEach(pricesBtn => pricesBtn.classList.remove('opened'));
      btns.forEach(pricesBtn => pricesBtn.nextElementSibling.classList.remove('opened'));
      pricesBtn.classList.toggle('opened');
      pricesBtn.nextElementSibling.classList.toggle('opened');

    };
  };
});

  /* Contacts */

  const contactBtn = document.querySelector('.btn-city');
  const contactCard = document.querySelectorAll('.contacts-card');
  const contactMenu = document.querySelectorAll('.contacts-item');
  const contMenu = Array.from(contactMenu);
  const contCard = Array.from(contactCard);

  contactBtn.addEventListener('click', openContactMenu);

  function openContactMenu(event) {
    event.preventDefault();

    if (contactBtn.classList.contains('active')) {
    contactBtn.nextElementSibling.classList.remove('passive');
    contactBtn.nextElementSibling.classList.toggle('active');
    contactBtn.classList.remove('passive')
    contactBtn.classList.remove('active');

    } else {

    contactBtn.nextElementSibling.classList.toggle('active');
    contactBtn.classList.toggle('active');

    }
  };

  contMenu.forEach((contactMenu) => {
    contactMenu.addEventListener('click', openContactCard);

  function openContactCard(event) {
    event.preventDefault();

    if (contactMenu.classList.contains('active')) {
    contactMenu.nextElementSibling.classList.remove('active');
    contMenu.forEach((contactMenu) => contactMenu.classList.remove('passive'));
    contactBtn.nextElementSibling.classList.remove('passive');
    contactBtn.classList.remove('passive');
    contactBtn.classList.toggle('active');
    contactMenu.classList.remove('passive');
    contactMenu.classList.toggle('active');
    
    } else {

    contactMenu.nextElementSibling.classList.toggle('active');
    contMenu.forEach((contactMenu) => contactMenu.classList.toggle('passive'));
    contactBtn.nextElementSibling.classList.toggle('passive');
    contactBtn.classList.toggle('passive');
    contactMenu.classList.remove('passive');
    contactMenu.classList.toggle('top');

    };
  };
  });

  /* Blur */

  const serviceBtn = document.querySelectorAll('.service-btn');
  const serviceCard = document.querySelectorAll('.service-items');
  const servBtn = Array.from(serviceBtn);
  const servCard = Array.from(serviceCard);
 

//  servBtn.forEach((serviceBtn) => {
    serviceBtn[0].addEventListener('click', blurGardenCard);

    function blurGardenCard(event) {
      event.preventDefault();


      if (serviceBtn[0].classList.contains('active')) {
        
        servCard.forEach((serviceCard) => serviceCard.classList.toggle('no-blur'));
        serviceBtn[0].classList.remove('active')
        serviceCard[0].classList.toggle('no-blur');
        serviceCard[4].classList.toggle('no-blur');

      } else {

        servCard.forEach((serviceCard) => serviceCard.classList.toggle('blur'));
        serviceCard[0].classList.toggle('no-blur');
        serviceCard[4].classList.toggle('no-blur');
        serviceBtn[0].classList.toggle('active')
      }
    }

      serviceBtn[1].addEventListener('click', blurLawnCard);

      function blurLawnCard(event) {
        event.preventDefault();
  

      if (serviceBtn[1].classList.contains('active')) {
        
        servCard.forEach((serviceCard) => serviceCard.classList.toggle('no-blur'));
        serviceBtn[1].classList.remove('active')
        serviceCard[2].classList.toggle('no-blur');

      } else {

        servCard.forEach((serviceCard) => serviceCard.classList.toggle('blur'));
        serviceCard[2].classList.toggle('no-blur');
        serviceBtn[1].classList.toggle('active')
      }
    }

    serviceBtn[2].addEventListener('click', blurPlantCard);

    function blurPlantCard(event) {
      event.preventDefault();


    if (serviceBtn[1].classList.contains('active')) {
      
      servCard.forEach((serviceCard) => serviceCard.classList.toggle('no-blur'));
      serviceBtn[2].classList.remove('active')
      serviceCard[1].classList.toggle('no-blur');
      serviceCard[3].classList.toggle('no-blur');
      serviceCard[5].classList.toggle('no-blur');


    } else {

      servCard.forEach((serviceCard) => serviceCard.classList.toggle('blur'));
      serviceCard[1].classList.toggle('no-blur');
      serviceBtn[2].classList.toggle('active')
      serviceBtn[2].classList.toggle('active')
      serviceCard[3].classList.toggle('no-blur');
      serviceCard[5].classList.toggle('no-blur');

    }
  }
//  })