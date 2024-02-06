// backend/routes.js

const express = require('express');
const { Car } = require('./models');

const router = express.Router();

// Route to filter cars based on parameters
router.post('/api/cars/filter', async (req, res) => {
  // Retrieve filter parameters from the request body
  const filters = req.body;

  // Initialize an empty query object
  const query = {};

  // Check if the make filter parameter is present
  if (filters.make) {
    // Add the make filter to the query object
    query.make = filters.make;
  }

  // Check if the location filter parameter is present
  if (filters.location) {
    // Add the location filter to the query object
    query.location = filters.location;
  }

  // Check if the postcode filter parameter is present
  if (filters.postcode) {
    // Add the postcode filter to the query object
    query.postcode = filters.postcode;
  }

  // Check if both the priceLow and priceHigh filter parameters are present
  if (filters.priceLow && filters.priceHigh) {
    // Add the price filter to the query object
    query.price = { $gte: filters.priceLow, $lte: filters.priceHigh };
  }

  // Check if both the yearFrom and yearTo filter parameters are present
  if (filters.yearFrom && filters.yearTo) {
    // Add the year filter to the query object
    query.year = { $gte: filters.yearFrom, $lte: filters.yearTo };
  }

  // Check if any filter parameters were provided
  if (Object.keys(query).length > 0) {
    try {
      // Find all cars that match the query
      const cars = await Car.find(query);

      // Send the filtered cars as a response
      res.json(cars);
    } catch (err) {
      // Send an error response if there was a problem finding cars
      res.status(500).json({ message: err.message });
    }
  } else {
    // Send a response indicating that no filter parameters were provided
    res.status(400).json({ message: 'No filter parameters provided' });
  }
});

module.exports = router;