//A constant declaration
const burgerMenu = document.querySelector(".burger-menu");
const burgerIconButton = document.querySelector(".burger-icon__button");
const burgerIconLines = document.querySelector(".burger-icon__lines");

const offersButton = document.querySelector(".offers__button");
const modalClose = document.querySelector(".modal__close");
const modal = document.querySelector(".modal");

// Burger menu
burgerIconButton.addEventListener("click", function () {

  burgerIconLines.classList.toggle("burger-icon_close");
  burgerMenu.classList.toggle("burger-menu_active");

});


// Modal window
offersButton.addEventListener("click", function () {
  
  modal.classList.add("open");

});

modalClose.addEventListener("click", function () {
  
  modal.classList.remove("open");

});

// Click slider
$(document).ready(function() {
  
  
  $(".regular").slick({
    arrows: false,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 2,

    responsive: [

      {
        breakpoint: 737,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
      
    ]

  });
  

});

