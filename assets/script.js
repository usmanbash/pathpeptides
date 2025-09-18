document.addEventListener('DOMContentLoaded', function () {


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



// Collection page JS

 var thumbsSwiper = new Swiper(".thumbsSwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    watchSlidesProgress: true,
    breakpoints: {
      // Mobile & tablet (horizontal)
      0: {
        direction: "horizontal",
        slidesPerView: 4,
      },
      // Desktop (vertical)
      1024: {
        direction: "vertical",
        slidesPerView: 4,
      },
    },
  });

  var mainSwiper = new Swiper(".mainSwiper", {
    spaceBetween: 10,
    thumbs: {
      swiper: thumbsSwiper,
    },
  });
 

  // PDP page JS
 
  var thumbsSwiper = new Swiper(".thumbsSwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    watchSlidesProgress: true,
    breakpoints: {
      // Mobile & tablet (horizontal)
      0: {
        direction: "horizontal",
        slidesPerView: 4,
      },
      // Desktop (vertical)
      1024: {
        direction: "vertical",
        slidesPerView: 4,
      },
    },
  });

  var mainSwiper = new Swiper(".mainSwiper", {
    spaceBetween: 10,
    thumbs: {
      swiper: thumbsSwiper,
    },
  });


 
  var swiper = new Swiper(".mySwiperProductsList", {
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next-collection",
      prevEl: ".swiper-button-prev-collection",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });
 
  //Range Slider
const minRange = document.getElementById("minRange");
const maxRange = document.getElementById("maxRange");
const rangeTrack = document.getElementById("range-track");
const minInput = document.getElementById("minInput");
const maxInput = document.getElementById("maxInput");

function updateRange() {
  let minVal = parseInt(minRange.value);
  let maxVal = parseInt(maxRange.value);

  if (minVal > maxVal - 50) {
    minRange.value = maxVal - 50;
    minVal = maxVal - 50;
  }
  if (maxVal < minVal + 50) {
    maxRange.value = minVal + 50;
    maxVal = minVal + 50;
  }

  minInput.value = minVal;
  maxInput.value = maxVal;

  const percent1 = (minVal / minRange.max) * 100;
  const percent2 = (maxVal / maxRange.max) * 100;
  rangeTrack.style.left = percent1 + "%";
  rangeTrack.style.right = (100 - percent2) + "%";
}

minRange.addEventListener("input", updateRange);
maxRange.addEventListener("input", updateRange);

updateRange();



 
  function openPopup() {
    document.getElementById("popup").classList.remove("hidden");
  }

  function closePopup() {
    document.getElementById("popup").classList.add("hidden");
  }

// Product Grid Search Functionality
function initProductGridSearch() {
  const searchInput = document.getElementById('productGridSearchInput');
  const resultCount = document.getElementById('searchResultCount');
  const productCards = document.querySelectorAll('.product-cards .grid > div');

  if (searchInput && productCards.length > 0) {
    // Initialize result count
    if (resultCount) {
      resultCount.querySelector('span').textContent = `Showing all ${productCards.length} products`;
    }

    searchInput.addEventListener('keyup', (event) => {
      const searchTerm = event.target.value.toLowerCase().trim();
      let visibleCount = 0;

      productCards.forEach(card => {
        const productName = card.querySelector('span[class*="font-semibold"]');
        if (productName) {
          const name = productName.textContent.toLowerCase();
          if (name.includes(searchTerm)) {
            card.style.display = 'flex';
            visibleCount++;
          } else {
            card.style.display = 'none';
          }
        }
      });

      // Update result count
      if (resultCount) {
        if (searchTerm === '') {
          resultCount.querySelector('span').textContent = `Showing all ${productCards.length} products`;
        } else {
          resultCount.querySelector('span').textContent = `Showing ${visibleCount} products`;
        }
      }
    });
  }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
  initProductGridSearch();
});
 
