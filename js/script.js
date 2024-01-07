const feature = document.getElementsByClassName("navmobile");
const open = document.getElementById("bar-menu");
const close = document.getElementById("close-menu");

for (let i = 0; i < feature.length; i++) {
  // Create OnClick button Event
  function openMenu() {
    open.style.display = "none";
    close.style.display = "inline-block";
    feature[i].style.display = "block";
  }

  const closeMenu = () => {
    open.style.display = "inline-block";
    close.style.display = "none";
    feature[i].style.display = "none";
  };

  open.addEventListener("click", openMenu);
  close.addEventListener("click", closeMenu);

  // Remove Attribute Style if the window on min-width 1000px
  function checkResponsive() {
    if (window.matchMedia("(min-width: 1000px)").matches) {
      open.removeAttribute("style");
      close.removeAttribute("style");
      feature[i].removeAttribute("style");
    }
  }

  window.addEventListener("load", checkResponsive);
  window.addEventListener("resize", checkResponsive);
}

// SwiperJS
const swiper = new Swiper(".swiper", {
  // Effect Slide
  effect: "coverflow",
  coverflowEffect: {
    rotate: 45,
    slideShadows: false,
  },
  autoplay: {
    delay: 3000,
  },
  grabCursor: true,
  spaceBetween: 20, // gap between slide
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1100: {
      // window screen > 1100px
      slidesPerView: 3,
    },

    700: {
      // window screen > 700px
      slidesPerView: 2,
    },
  },
});

/**
 * Scroll Reveal Effect
 * @param {string} direct
 * @param {boolean} reset
 * @param {string} tag
 * @param {Number} delay
 */
function scroll(direct, reset, tag, delay) {
  const scrollEffect = ScrollReveal({
    origin: direct,
    distance: "50px",
    duration: 2400,
    reset: reset,
  });

  return scrollEffect.reveal(tag, { delay: delay });
}

scroll("top", false, "header", 100);
scroll("left", false, ".main-text", 300);
scroll("right", false, ".main-img", 300);
scroll("bottom", false, ".shop-info", 300);
scroll("top", false, ".about", 200);
scroll("right", false, ".about-container > figure", 400);
scroll("left", false, ".about-container > article", 400);
scroll("bottom", false, ".shop", 300);
scroll("top", false, ".review", 300);
scroll("top", false, "footer", 300);
