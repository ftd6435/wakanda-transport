const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");

  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scroolRevealOption1 = {
  distance: "50px",
  origin: "left",
  duration: 1000,
};

const scroolRevealOption3 = {
  distance: "50px",
  origin: "right",
  duration: 1000,
};

const scroolRevealOption2 = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container h1", {
  ...scroolRevealOption1,
});

ScrollReveal().reveal(".header__container p", {
  ...scroolRevealOption1,
  delay: 500,
});

ScrollReveal().reveal(".header__container form", {
  ...scroolRevealOption2,
  delay: 1000,
});

ScrollReveal().reveal(".feature__card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".destination__card", {
  ...scroolRevealOption2,
  interval: 500,
});

ScrollReveal().reveal(".package__card", {
  ...scroolRevealOption2,
  interval: 500,
});

ScrollReveal().reveal(".section__about_text", {
  ...scroolRevealOption1
});

ScrollReveal().reveal(".section__about_img", {
  ...scroolRevealOption3
});

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
  },
});
