let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  section.forEach(sec =>{

    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
      });
    };

  });

}

document.querySelector('#search-icon').onclick = () =>{
  document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
  document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop:true,
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut;




// function: for calculating total amount of product price
const totalCalc = function (){

    // declare all initial variable
    const tax = 0.06;
    let subtotal = 0;
    let totalTax = 0;
    let total = 0;

    // loop: for calculating `subtotal` value from every single product
    for(let i = 0; i < quantityElem.length; i++){

        subtotal += Number(quantityElem[i].textContent) * Number(priceElem[i].textContent);

    }

    // show  the `subtotal` variable value on `subtotalElem` element
    subtotalElem.textContent = subtotal.toFixed(2);

    //calculating the `totalTax`
    totalTax = subtotal * tax;

    //show the `totalTax`
    taxElem.textContent = totalTax.toFixed(2);

    //calculting the `total`
    total = subtotal + totalTax;

    //show the `total variable value on `totalElem` & `payAmountBtn` element
    totalElem.textContent = total.toFixed(2);
    payAmountBtn.textContent = total.toFixed(2);

}