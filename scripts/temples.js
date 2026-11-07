// Dynamic Copyright Year
const currentYearSpan = document.getElementById("currentyear");
if (currentYearSpan) {
  currentYearSpan.textContent = new Date().getFullYear();
}

// Dynamic Last Modified Date
const lastModifiedParagraph = document.getElementById("lastModified");
if (lastModifiedParagraph) {
  lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;
}

// Hamburger Menu Toggle
const mainNav = document.querySelector("nav");
const hamburgerButton = document.querySelector("#menu");

if (hamburgerButton && mainNav) {
  hamburgerButton.addEventListener("click", () => {
    mainNav.classList.toggle("open");
    hamburgerButton.classList.toggle("open");
  });
}