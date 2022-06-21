const menuBtn = document.querySelector(".menu-icon");
const menuIcon = document.querySelector(".menu-icon span");
const mainNav = document.querySelector(".main-nav");
const switchColorBtn = document.querySelector(".switch-color");
const root = document.documentElement;

switchColorBtn.addEventListener('click', function() {
  if (switchColorBtn.classList.contains('flip-x')) {
    switchColorBtn.classList.remove('flip-x');
    root.style.setProperty('--main-bg-color', '#d3d3d3');
    root.style.setProperty('--main-font-color', 'Black');
    root.style.setProperty('--secondary-font-color', 'rgba(0, 0, 0, 0.65)');
  }else {
    switchColorBtn.classList.add('flip-x');
    root.style.setProperty('--main-bg-color', '#1c1c1c');
    root.style.setProperty('--main-font-color', 'White');
    root.style.setProperty('--secondary-font-color', 'rgba(255, 255, 255, 0.65)');
  }
});


function menuAnim() {
  const expanded = menuBtn.getAttribute("aria-expanded");
  if (expanded === "true") {
    menuBtn.setAttribute("aria-expanded", false);
    menuIcon.classList.remove("expand");
    mainNav.classList.remove("expand");
  }
  else {
    menuBtn.setAttribute("aria-expanded", true);    
    menuIcon.classList.add("expand");
    mainNav.classList.add("expand");
  }
}