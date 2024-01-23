// backend/backend-app.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Car, User } = require('./models');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
// Serve static files from the 'frontend' directory
app.use(express.static('frontend'));

// MongoDB connection
//mongoose.connect('mongodb://localhost:27017/carplatform', { useNewUrlParser: true, useUnifiedTopology: true });
// MongoDB connection without deprecated options
// MongoDB connection without deprecated options
mongoose.connect('mongodb://localhost:27017/carplatform', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // Remove the useFindAndModify option
})
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });


// Use routes
app.use('/api', routes);

// Define a simple route for the root path
app.get('/', (req, res) => {
  res.send('Hello, this is the root path!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
