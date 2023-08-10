// Function to toggle the hamburger menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links"); // Select the menu links container
  const icon = document.querySelector(".hamburger-icon"); // Select the hamburger icon
  menu.classList.toggle("open"); // Toggle the "open" class on the menu links container
  icon.classList.toggle("open"); // Toggle the "open" class on the hamburger icon
}
