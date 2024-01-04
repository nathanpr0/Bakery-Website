const feature = document.querySelector(".navmobile");
const open = document.getElementById("bar-menu");
const close = document.getElementById("close-menu");

function openMenu() {
  open.style.display = "none";
  close.style.display = "inline-block";
  feature.style.display = "block";
}

function closeMenu() {
  open.style.display = "inline-block";
  close.style.display = "none";
  feature.style.display = "none";
}

// Remove Attribute Style if the window on min-width 1000px
function checkResponsive() {
  if (window.matchMedia("(min-width: 1000px)").matches) {
    open.removeAttribute("style");
    close.removeAttribute("style");
    feature.removeAttribute("style");
  }
}

window.addEventListener("load", checkResponsive);
window.addEventListener("resize", checkResponsive);