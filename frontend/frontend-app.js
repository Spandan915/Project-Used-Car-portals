// frontend/frontend-app.js

document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.querySelector('main'); // Add semicolon here

    // Example: Load Explore page content on initial load
    fetch('./explore.html')  // Use a relative path
      .then(response => response.text())
      .then(html => mainContent.innerHTML = html);

    // Example: Add click event listeners to navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const pageUrl = event.target.href;

        fetch(pageUrl)
          .then(response => response.text())
          .then(html => mainContent.innerHTML = html);
      });
    });

  // Placeholder functions for filter and search actions
  function applyFilters() {
    // Implement filter logic here
    alert('Filters applied!');
  }

  function searchCar() {
    // Implement search logic here
    alert('Searching for a specific car!');
  }
});