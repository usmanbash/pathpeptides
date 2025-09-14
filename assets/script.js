document.addEventListener('DOMContentLoaded', function () {
  
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