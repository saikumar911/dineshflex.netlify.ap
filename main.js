// Select the toggle button and the navigation menu
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

// Add an event listener for when the toggle button is clicked
navToggle.addEventListener('click', () => {
  // Toggle the 'active' class on the nav menu
  navMenu.classList.toggle('active');
});