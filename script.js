// Scroll
function scrollToContact() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth",
  });
}

// Fade animation
const elements = document.querySelectorAll(".fade-in");

function showOnScroll() {
  const trigger = window.innerHeight * 0.85;

  elements.forEach((el) => {
    if (el.getBoundingClientRect().top < trigger) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", showOnScroll);

// Loader
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.opacity = "1";
  setTimeout(() => {
    loader.style.display = "none";

    showOnScroll();

    // Typing effect
    const text = "Développeur Web";
    let index = 0;

    function typeEffect() {
      if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 80);
      }
    }

    typeEffect();
  }, 500);
});

// Dark / Light mode
const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggle.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
});

// Mobile menu
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
});
