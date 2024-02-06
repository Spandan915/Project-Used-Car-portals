// frontend/frontend-app.js

document.addEventListener('DOMContentLoaded', () => {
    const filterForm = document.getElementById('filterForm');
    const carList = document.getElementById('carList');
  
    // Function to fetch and display cars based on filters
    function fetchAndDisplayCars(filters) {
      // Placeholder for API endpoint (replace with the actual API endpoint)
      const apiEndpoint = 'http://your-used-car-api.com/api/cars/filter';
  
      // Send a POST request to fetch cars based on filters
      fetch(apiEndpoint, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(filters),
      })
      .then(response => response.json())
      .then(cars => {
          // Clear the existing car list
          carList.innerHTML = '';
  
          // Display the fetched cars
          cars.forEach(car => {
              const li = document.createElement('li');
              li.classList.add('carItem');
              li.innerHTML = `
                <strong>${car.make} ${car.model} (${car.year})</strong><br>
                Price: $${car.price}<br>
                Location: ${car.location}<br>
                Kilometers: ${car.kilometers} km
              `;
              carList.appendChild(li);
          });
      })
      .catch(error => {
          console.error('Error fetching cars:', error);
          // Handle errors or display a user-friendly message
      });
    }
  
    // Handle form submission to apply filters
    filterForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      // Gather filter values from the form
      const filters = {
          make: filterForm.make.value,
          location: filterForm.location.value,
          priceLow: filterForm.priceLow.value,
          priceHigh: filterForm.priceHigh.value,
          yearFrom: filterForm.yearFrom.value,
          yearTo: filterForm.yearTo.value,
          kilometersFrom: filterForm.kilometersFrom.value,
          kilometersTo: filterForm.kilometersTo.value,
          // Add more filters as needed
      };
  
      // Fetch and display cars based on filters
      fetchAndDisplayCars(filters);
    });
  });
  