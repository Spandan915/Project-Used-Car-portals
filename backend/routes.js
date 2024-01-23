// backend/routes.js

const express = require('express');
const { Car } = require('./models');

const router = express.Router();

// Route to filter cars based on parameters
router.post('/api/cars/filter', async (req, res) => {
    // Retrieve filter parameters from the request body
    const filters = req.body;

    // Construct a MongoDB query based on the filters
    const query = {};

    if (filters.make) {
        query.make = filters.make;
    }

    if (filters.location) {
        query.location = filters.location;
    }

    if (filters.postcode) {
        query.postcode = filters.postcode;
    }

    if (filters.priceLow && filters.priceHigh) {
        query.price = { $gte: filters.priceLow, $lte: filters.priceHigh };
    }

    if (filters.yearFrom && filters.yearTo) {
        query.year = { $gte: filters.yearFrom, $lte: filters.yearTo };
    }

   
