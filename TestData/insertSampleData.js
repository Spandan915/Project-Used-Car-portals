// script to insert sample data into MongoDB
const mongoose = require('mongoose');
const { Car, User } = require('./models');

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/carplatform', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Sample data for cars
const sampleCars = [
  // ... (as shown above)
];

// Sample data for users
const sampleUsers = [
  // ... (as shown above)
];

async function insertSampleData() {
  try {
    // Insert sample data into the 'cars' collection
    await Car.insertMany(sampleCars);

    // Insert sample data into the 'users' collection
    await User.insertMany(sampleUsers);

    console.log('Sample data inserted successfully!');
  } catch (error) {
    console.error('Error inserting sample data:', error);
  } finally {
    // Close the MongoDB connection
    mongoose.disconnect();
  }
}

// Run the script to insert sample data
insertSampleData();
