document.addEventListener('DOMContentLoaded', function () {

  const swiperHero = new Swiper(".swiperSliderHero", {
    loop: true, // Infinite loop
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      enabled: false,
      delay: 4000,
      disableOnInteraction: false,
    },
    speed: 800,
  });

  // Products Swiper
  
  const swiperProducts = new Swiper(".mySwiperProducts", {
    "direction": "horizontal",
    "effect": "slide",
    "loop": false,
    "speed": 500,
    "spaceBetween": 20,
    "slidesPerGroup": 1,
    "initialSlide": 0,
    "autoHeight": false,
    "slideToClickedSlide": false, 
    "grabCursor": false,
    "navigation": {
      "prevEl": ".swiper-button-prev",
      "nextEl": ".swiper-button-next"
    },
    "freeMode": false,
    "keyboard": false,
    "scrollbar": false,
    "zoom": false,
    "hashNavigation": false,
    "history": false,
    "a11y": true,
    breakpoints: {
      320: {
        slidesPerView: 1.2,
      },
      630: {
        slidesPerView: 2.2,
      },
      991: {
        slidesPerView: 3.03,
      }
    }
  });
});
  

//Mobile menu
const btn = document.getElementById("mobile-menu-button");
const menu = document.getElementById("mobile-menu");
const hamIcon = document.getElementById("hamburger-icon");
const closeIcon = document.getElementById("close-icon");

btn.addEventListener("click", () => {
  menu.classList.toggle("opacity-0");
  menu.classList.toggle("invisible");
  menu.classList.toggle("translate-y-[-10px]");
  hamIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});

// Submenu toggle
const shopToggle = document.getElementById("shop-toggle");
const shopSubmenu = document.getElementById("shop-submenu");
const shopChevron = document.getElementById("shop-chevron");

shopToggle.addEventListener("click", () => {
  if (shopSubmenu.style.maxHeight && shopSubmenu.style.maxHeight !== "0px") {
    shopSubmenu.style.maxHeight = "0px";
    shopChevron.classList.remove("rotate-180");
  } else {
    shopSubmenu.style.maxHeight = shopSubmenu.scrollHeight + "px";
    shopChevron.classList.add("rotate-180");
  }
}); 