// Get the hamburger icon and nav links container
const hamburgerIcon = document.getElementById("hamburger-icon");
const navLinks = document.querySelector("nav ul");


// Add event listener to toggle the 'active' class on nav-links
hamburgerIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});