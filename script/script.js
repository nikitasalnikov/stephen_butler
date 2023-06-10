"use strict";

let bg = document.querySelector(".header_bg");
let parallaxBg = document.querySelector(".parallax_bg");
let header = document.querySelector(".header");
let navContainer = document.querySelector(".nav_container");

let burgerMenu = document.querySelector(".burger_menu");
let burgerClose = document.querySelector(".burger");
let headerMenu = document.querySelector(".header_list");

let mySwiper;

/*parallax bg header */
if (bg) {
  header.onmousemove = (e) => {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;

    bg.style.transform = "translate(-" + x * 10 + "px, -" + y * 10 + "px)";
    parallaxBg.style.transform =
      "translate(-" + x * 10 + "px, -" + y * 10 + "px)";
  };
}

/*header title animation */
if (navContainer) {
  window.addEventListener("load", function () {
    navContainer.classList.add("active");
  });
}

/**burger menu */
burgerMenu.addEventListener("click", function () {
  headerMenu.classList.add("active");
  burgerClose.classList.add("active");
});
burgerClose.addEventListener("click", function () {
  headerMenu.classList.remove("active");
  burgerClose.classList.remove("active");
});

/**swiper  */

const slider = document.querySelector(".swiper");
const booksSwiper = document.querySelector(".books_swiper");
const booksLatestSwiper = document.querySelector(".books_latest_swiper");
const manuscriptsSwiper = document.querySelector(".manuscripts_swiper");

if (slider) {
  function mobileSlider() {
    if (window.innerWidth <= 890 && slider.dataset.mobile == "false") {
      mySwiper = new Swiper(slider, {
        slidesPerView: 2,
        // spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        loop: true,
        slideClass: "swiper-slide",
      });

      slider.dataset.mobile = true;
    } else if (window.innerWidth > 890 && mySwiper) {
      slider.dataset.mobile = false;
      console.log(mySwiper);
      mySwiper.destroy();
    }
  }

  mobileSlider();

  window.addEventListener("resize", () => {
    mobileSlider();
  });
}

/************************************************************/

if (booksSwiper) {
  function mobileSwiper() {
    if (window.innerWidth <= 890 && booksSwiper.dataset.mobile == "false") {
      mySwiper = new Swiper(booksSwiper, {
        slidesPerView: 4,
        // spaceBetween: 10,
        pagination: {
          el: ".books_swiper_pagination",
          clickable: true,
        },
        loop: true,
        slideClass: "swiper-slide",
      });

      booksSwiper.dataset.mobile = true;
    } else if (window.innerWidth > 890 && mySwiper) {
      booksSwiper.dataset.mobile = false;
      console.log(mySwiper);
      mySwiper.destroy();
    }
  }

  mobileSwiper();

  window.addEventListener("resize", () => {
    mobileSwiper();
  });
}

/************************************************************/

if (booksLatestSwiper) {
  function mobileLatestSwiper() {
    if (
      window.innerWidth <= 890 &&
      booksLatestSwiper.dataset.mobile == "false"
    ) {
      mySwiper = new Swiper(booksLatestSwiper, {
        slidesPerView: 2,
        // spaceBetween: 10,
        pagination: {
          el: ".books_latest_pagination",
          clickable: true,
        },
        loop: true,
        slideClass: "swiper-slide",
      });

      booksLatestSwiper.dataset.mobile = true;
    } else if (window.innerWidth > 890 && mySwiper) {
      booksLatestSwiper.dataset.mobile = false;
      console.log(mySwiper);
      mySwiper.destroy();
    }
  }

  mobileLatestSwiper();

  window.addEventListener("resize", () => {
    mobileLatestSwiper();
  });
}

/************************************************************/

if (manuscriptsSwiper) {
  function mobileMauscriptSwiper() {
    if (
      window.innerWidth <= 890 &&
      manuscriptsSwiper.dataset.mobile == "false"
    ) {
      mySwiper = new Swiper(manuscriptsSwiper, {
        slidesPerView: 2,
        // spaceBetween: 10,
        pagination: {
          el: ".manuscripts_swiper_pagination",
          clickable: true,
        },
        loop: true,
        slideClass: "swiper-slide",
      });

      manuscriptsSwiper.dataset.mobile = true;
    } else if (window.innerWidth > 890 && mySwiper) {
      manuscriptsSwiper.dataset.mobile = false;
      console.log(mySwiper);
      mySwiper.destroy();
    }
  }

  mobileMauscriptSwiper();

  window.addEventListener("resize", () => {
    mobileMauscriptSwiper();
  });
}

/**************tabs in additional pages*******************/

let tabs = document.querySelectorAll(".description_tab");
let descTabs = document.querySelectorAll(".tabs_description");

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function (e) {
    e.preventDefault();
    for (let j = 0; j < tabs.length; j++) {
      tabs[j].classList.remove("active");
      descTabs[j].classList.remove("active");
    }
    tabs[i].classList.add("active");
    descTabs[i].classList.add("active");
  });
}

/*******additional pages swiper********/
let slide = document.querySelectorAll(".mySwiper swiper-slide");
let image = document.querySelectorAll(".mySwiper swiper-slide img");
let openImage = document.querySelector(".container_image img");
let largeImage = document.querySelector(".large_image");

for (let i = 0; i < slide.length; i++) {
  slide[i].addEventListener("click", function () {
    for (let j = 0; j < slide.length; j++) {
      slide[j].classList.remove("active");
    }
    slide[i].classList.add("active");
    openImage.src = image[i].src;
    largeImage.classList.add("active");
  });
}
largeImage.addEventListener('click', function(){
  this.classList.remove('active');
} );

  